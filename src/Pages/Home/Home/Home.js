import React, { useEffect, useState } from 'react';

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

            </div>
        </div>
    );
};

export default Home;