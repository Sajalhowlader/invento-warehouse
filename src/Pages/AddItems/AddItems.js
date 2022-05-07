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
        const user = {
            name,
            img,
            description,
            price,
            quantity,
            supply
        }

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