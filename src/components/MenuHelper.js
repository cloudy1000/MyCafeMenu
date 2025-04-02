import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';
import ItemModal from './ItemModal';
import DisplayOrder from './DisplayOrder';
import CakeModal from './CakeModal';

function MenuHelper({ type, modalSelections }) {
    const { handleOpen, currentItem } = useContext(OrderContext);

    return (
        <div className='type-layout'>
            <div className='grid-main'>
                {/* for each item, display the title */}
                {type.map((item => {
                    return (
                        <div key={item.id} className="grid-child" onClick={() => handleOpen(item)}>
                            <img src={item.src} alt={`image of ${item.title}`} className='images'/>
                            <p className='item-title'>{item.title}</p>
                        </div>
                    )
                }))}
            </div> 
            
            <DisplayOrder />
            {modalSelections.length === 2 && currentItem ? <CakeModal modalSelections={modalSelections}/> : currentItem ? <ItemModal modalSelections={modalSelections}/> : null}
        </div>
        
    )
}
export default MenuHelper