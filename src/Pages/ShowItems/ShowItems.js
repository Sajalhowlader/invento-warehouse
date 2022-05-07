import React, { useEffect, useState } from 'react';
const ShowItems = ({ items }) => {
    const { _id, name, img, price, description, quantity } = items
    const [deletes, setDeletes] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setDeletes(data))
    }, [])

    const handleDelete = (id) => {
        const areYouSure = window.confirm("Are you want to Delete your Items")
        if (areYouSure) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("product delete successfully")
                    }
                })
        }
    }
    return (

        <div className='items-container_2'>
            <div className="items-info">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <p>{description.slice(0, 100) + "..."}</p>
                <button onClick={() => handleDelete(_id)} className='update-btn'>Delete</button>
            </div>
        </div>
    );
};

export default ShowItems;