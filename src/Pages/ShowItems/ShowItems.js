import React from 'react';
const ShowItems = ({ items, handleClick }) => {

    const { _id, name, img, price, description, quantity, supplier } = items


    return (

        <div className='items-container_2'>
            <div className="items-info">
                <img src={img} alt="" />
                <h2>Name:{name}</h2>
                <h4>Price:{price}</h4>
                <h4>Qnt{quantity}</h4>
                <p>Description:{description.slice(0, 100) + "..."}</p>
                <h5>Supplier:{supplier}</h5>
                <button onClick={() => handleClick(_id)} className='update-btn'>Delete</button>
            </div>
        </div>
    );
};

export default ShowItems;