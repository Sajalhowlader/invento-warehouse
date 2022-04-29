import React, { useEffect, useState } from 'react';
import HomeItems from '../HomeItems/HomeItems';

const Home = () => {
    const [homeItems, setHomeItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setHomeItems(data))
    }, [])
    return (
        <div>
            <h1>INVENTORY ITEMS</h1>
            <div className='inventory-items-container'>
                {
                    homeItems.map(item => <HomeItems item={item} />)
                }
            </div>
        </div>
    );
};

export default Home;