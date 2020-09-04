import React from 'react';
import '../Cart/Cart.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{borderBottom:'1px solid gray', padding:'10px'}}>
            <h3>Name: {name}</h3>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button onClick={() => props.removeProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;