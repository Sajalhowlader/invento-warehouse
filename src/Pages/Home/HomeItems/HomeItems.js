import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeItems = ({ item }) => {
    const { _id, name, img, price, description, quantity } = item
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/updateItems/${id}`)
    }
    return (
        <div className='inventory-item'>
            <img src={img} alt="" />
            <div className="item-info">
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <p>{description.slice(0, 100) + "..."}</p>
                <button onClick={() => handleUpdate(_id)} className='update-btn'>Update</button>
            </div>
        </div>
    );
};

export default HomeItems;