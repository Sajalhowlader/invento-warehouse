import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const handleAddItems = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.product.value
        const img = e.target.img.value
        const description = e.target.description.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const supply = e.target.supplier.value
        const addInfo = {
            email,
            name,
            img,
            description,
            price,
            quantity,
            supply
        };
        fetch('https://aqueous-brook-47293.herokuapp.com/products', {
            method: 'POST',
            body: JSON.stringify(addInfo),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast('product add successfully')
                    e.target.reset()

                }
            });

        fetch('https://aqueous-brook-47293.herokuapp.com/myItems', {
            method: 'POST',
            body: JSON.stringify(addInfo),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    toast('Add items Successfully')
                    e.target.reset()

                }
            });


    }



    return (
        <div>
            <h2 className='all-items-title'>Add New Item</h2>
            <div className="form-container">
                <form onSubmit={handleAddItems}>
                    <input name='email' type="email" value={user.email} readOnly />
                    <input type="text" name="product" placeholder='Product Name' />

                    <input type="text" name="img" placeholder='Img url' />
                    <textarea type="text" name="description" placeholder='Description' />
                    <input type="number" name="price" placeholder='Price' />
                    <input type="number" name="quantity" placeholder='Quantity' />
                    <input type="text" name="supplier" placeholder='Supplier Name' />
                    <input className='add_items' type="submit" value="Add Items" />
                </form>

            </div>

        </div>
    );
};

export default AddItems;