import React, { useEffect, useState } from 'react';
import ShowItems from '../ShowItems/ShowItems';

const AllItems = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h1>ALL ITEMS</h1>
            <div className="all-items-container">
                {
                    allItems.map(items => <ShowItems key={items._id} items={items} />)
                }
            </div>
        </div>
    );
};

export default AllItems;