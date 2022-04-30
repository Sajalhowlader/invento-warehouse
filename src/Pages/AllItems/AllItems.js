import React, { useEffect, useState } from 'react';

const AllItems = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h1>ALL ITEMS</h1>
            <div className="all-items-container">
                {
                    allItems.map(item => <AllItems item={item} />)
                }
            </div>
        </div>
    );
};

export default AllItems;