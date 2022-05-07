import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItems = () => {
    const { productId } = useParams()
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products
            }
        </div>
    );
};

export default UpdateItems;