import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateItems = () => {
    const navigate = useNavigate()
    const { productId } = useParams()
    const [products, setProducts] = useState({});
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    const handleDelivered = () => {
        const name = products.name
        const image = products.img
        const description = products.description
        const quantity = parseInt(products.quantity) - 1

        const updated = {
            name,
            image,
            description,
            quantity,
        }
        const url = `http://localhost:5000/products/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsReload(!isReload)
                    toast('delivered successfully')
                }
            })
    }

    const handleUpdateStock = (e) => {
        e.preventDefault()
        const updateStock = e.target.update.value
        const name = products.name
        const image = products.img
        const description = products.description
        const quantity = parseInt(products.quantity) + parseInt(updateStock)

        const updated = {
            name,
            image,
            description,
            updateStock,
            quantity,
        }
        const url = `http://localhost:5000/products/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (updateStock < 1) {
                        toast("add some number")
                    } else {
                        setIsReload(!isReload)
                        toast('add successfully')
                    }
                }
            })

    }
    const handleAddNew = () => {
        navigate('/addItems')
    }
    return (
        <div>
            <div className="update-container">
                <h3 className='product-id'>Product ID:{products._id}</h3>
                <div className="update-item-container">
                    <div className="update-item-img">
                        <img src={products.img} alt="" />
                    </div>
                    <div className="update-item-info">
                        <h3>Name:{products.name}</h3>
                        <h2>Price:{products.price}</h2>
                        <p>Description:{products.description}</p>
                        <h3>Quantity:{products.quantity}</h3>
                        <button onClick={handleDelivered} className='delivered'>Delivered</button>
                        <form onSubmit={handleUpdateStock} className='update-form'>
                            <input type="number" placeholder='Update Stock' name="update" />
                            <input className='delivered' type="submit" value="Update Stock" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='add-new'>
                <button onClick={handleAddNew} className='delivered '>Add New Item</button>
            </div>
        </div>
    );
};

export default UpdateItems;