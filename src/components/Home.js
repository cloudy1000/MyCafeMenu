import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { OrderContext } from './OrderContext';
import Button from '@mui/material/Button';

function Home() {
    let navigate = useNavigate();
    const { clearItems } = useContext(OrderContext);
    
    return (
        <div className='welcome-message'>
            <p className='typing-text'>
                <Typewriter
                    words={[
                    "Welcome to my online cafe, would you like to make an order?",
                    "We have a wide selection of beverages, desserts, food, and cakes!"
                    ]}
                    loop={Infinity}
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={3000}
                />
            </p>
            <div className='order-btns'>
                {/* <button onClick={() => navigate(`/menu`)}>Prev Order</button> */}
                <Button onClick={() => { clearItems(); navigate(`/menu`); }}>New Order</Button>
            </div>
        </div>
      )
}
export default Home