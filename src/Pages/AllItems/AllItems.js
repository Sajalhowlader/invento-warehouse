import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Lodaing/Loading';
import ShowItems from '../ShowItems/ShowItems';

const AllItems = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    if (allItems.length === 0) {
        return <Loading />
    }
    const handleDelete = (id) => {
        console.log(id);
        const areYouSure = window.confirm("Are you want to Delete your Items")
        if (areYouSure) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast("Delete successull")
                        const remaining = allItems.filter(product => product._id !== id)
                        setAllItems(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='all-items-title'>ALL ITEMS</h1>
            <div className="all-items-container">

                {
                    allItems.map(items => <ShowItems key={items._id} items={items} handleClick={handleDelete} />)
                }
            </div>
        </div>
    );
};

export default AllItems;