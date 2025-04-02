import React from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayOrder from './DisplayOrder';

function Menu() {
    const options = [
        { path: '/milkteas', title: 'Milk Teas', src: 'Pixel_Images/gifs/milktea.gif' },
        { path: '/smoothies', title: 'Smoothies', src: 'Pixel_Images/gifs/smoothie.gif' },
        { path: '/fruitteas', title: 'Fruit Teas', src: 'Pixel_Images/gifs/fruittea.gif' },
        { path: '/coffees', title: 'Coffees', src: 'Pixel_Images/gifs/coffee.gif' },
        { path: '/icecream', title: 'Ice Cream', src: 'Pixel_Images/gifs/icecream.gif' },
        { path: '/cakes', title: 'Cakes', src: 'Pixel_Images/gifs/cakes.gif' },
        // { path: '/foods', title: 'Foods', src: 'Pixel_Images/gifs/food.gif' }
    ];

    let navigate = useNavigate();
    
    return (
        <div className='menu-layout'>
            <div className='grid-main'>
                {/* for each option, display the title */}
                {options.map((option => {
                    return (
                        // navigate to option's page upon user click
                        <div className='grid-child' onClick={() => navigate(option.path)}>
                            <img src={option.src} alt={`image of ${option.title}`} className='gifs'/>
                            <p>{option.title}</p>
                        </div>
                    )
                }))}
            </div>
            <DisplayOrder />
        </div>
      )
}
export default Menu