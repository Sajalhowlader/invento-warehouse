import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/myItems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])
    return (
        <div>
            <h1 className='all-items-title'>MY ITEMS</h1>
            <div className='my-items-container'>
                <h1>Product Add By:{user.displayName}</h1>
                <h2>Quantity:{myOrders.length}</h2>
            </div>
        </div>
    );
};

export default MyOrders;