import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Receipt() {
    const { selectedItems, totalCost, clearItems } = useContext(OrderContext);
    let navigate = useNavigate();
    return (
        <div className='receipt-container'>
            <div className='receipt-text'>
                <span>Thank you! We have received your order.</span>
                <span>Would you like to place another one?</span>
            </div>
            <Button onClick={() => { clearItems(); navigate(`/menu`); }}>New Order</Button>
            <div className='order-summary'>
                <h1>Order Summary</h1>
                <ul>
                    {selectedItems.map((item) => (
                        <li key={item.id}>
                            <div className='list'>
                                <span>{item.title}</span>
                                <span className='count'>{` x${item.count}`}</span>
                                <span className='cost'>{` $${item.cost.toFixed(2)}`}</span>
                                {/* <span>{item.title.toLowerCase().includes("cake") ? null : <pre style={{marginTop: "0"}}>{item.selectedFromModal.map(selection => `- ${selection.title} $${selection.cost}`).join("\n")}</pre>}</span>   */}
                                <span className='toppings'>{item.title.toLowerCase().includes("cake") ? null : (<div style={{ marginTop: "0", whiteSpace: "pre-wrap" }}>{item.selectedFromModal.map((selection, index) => (<div key={index}>- {selection.title}<span style={{ color: "rgb(179, 0, 0)" }}> ${selection.cost}</span></div>))}</div>)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <span>Order Total: ${totalCost.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default Receipt