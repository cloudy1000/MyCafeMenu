import React, { useContext, useEffect } from 'react';
import { OrderContext } from './OrderContext';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function DisplayOrder() {
    const { selectedItems, clearItems, calculateOrderTotal, totalCost } = useContext(OrderContext);
    let navigate = useNavigate();
    
    const handlePlaceOrder = () => {
        if (totalCost !== 0)
            navigate('/summary');
    };

    useEffect(() => {
        calculateOrderTotal();
    }, [selectedItems]);

    return (
        <div className="sidebar">
            <h2>Your Order</h2>
            {selectedItems.length === 0 ? (
                <Typography style={{fontSize: "large"}}>No items added.</Typography>
            ) : (
                <ul>
                    {selectedItems.map((item) => (
                        <li key={item.id}>
                            <div className='list'>
                                <span>{item.title}</span>
                                <span className='count'>{` x${item.count}`}</span>
                                <span className='cost'>{` $${item.cost.toFixed(2)}`}</span>
                                <span className='toppings'>{item.selectedFromModal.length === 0 ? null : (<div style={{ marginTop: "0", whiteSpace: "pre-wrap" }}>{item.selectedFromModal.map((selection, index) => (<div key={index}>- {selection.title}<span style={{ color: "rgb(179, 0, 0)" }}> ${selection.cost}</span></div>))}</div>)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <span className='total-cost'>Order Total: ${totalCost.toFixed(2)}</span>
            <div className='sidebar-btns'>
                <Button onClick={handlePlaceOrder}>Place Order</Button>
                <Button onClick={clearItems}>Clear</Button>
            </div>
        </div>
    );
}

export default DisplayOrder;