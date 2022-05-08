import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeItems = ({ item }) => {
    const { _id, name, img, price, description, quantity, supplier } = item
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/updateItems/${id}`)
    }
    return (
        <div className='inventory-item'>
            <img src={img} alt="" />
            <div className="item-info">
                <h2>Name:{name}</h2>
                <h4>Price:{price}</h4>
                <h4>Qnt:{quantity}</h4>
                <p>Description:{description.slice(0, 100) + "..."}</p>
                <h5>Supplier:{supplier}</h5>
                <button onClick={() => handleUpdate(_id)} className='update-btn'>Update</button>
            </div>
        </div>
    );
};

export default HomeItems;