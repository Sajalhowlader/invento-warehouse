import React from 'react';
const ShowItems = ({ items, handleClick }) => {

    const { _id, name, img, price, description, quantity } = items


    return (

        <div className='items-container_2'>
            <div className="items-info">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <p>{description.slice(0, 100) + "..."}</p>
                <button onClick={() => handleClick(_id)} className='update-btn'>Delete</button>
            </div>
        </div>
    );
};

export default ShowItems;