import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const myOrder = async () => {
            const email = user.email
            const url = `http://localhost:5000/myItems?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }
                });
                setMyOrders(data)
            } catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/singIn')
                }
            }
        }
        myOrder()
    }, [user])

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