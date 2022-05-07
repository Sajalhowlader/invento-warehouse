import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowUpdateItem from '../ShowUpdateItem/ShowUpdateItem';

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
                products.map(product => <ShowUpdateItem key={product._id} product={product} />)
            }
        </div>
    );
};

export default UpdateItems;