import React from 'react';

const AddItems = () => {
    const handleAddItems = (e) => {
        e.preventDefault()
        const name = e.target.product.value
        const img = e.target.img.value
        const description = e.target.description.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const supply = e.target.supplier.value
        const addInfo = {
            name,
            img,
            description,
            price,
            quantity,
            supply
        };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(addInfo),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    alert('product add successfully')
                    e.target.reset()

                }
            });

    }
    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleAddItems}>
                    <input type="email" />
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