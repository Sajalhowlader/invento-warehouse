import React from 'react';

const HomeItems = ({ item }) => {
    const { name, img, price, description, quantity } = item

    return (
        <div className='inventory-item'>
            <img src={img} alt="" />
            <div className="item-info">
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <p>{description.slice(0, 100) + "..."}</p>
            </div>
        </div>
    );
};

export default HomeItems;