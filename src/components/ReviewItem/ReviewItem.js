import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div style={{borderBottom:'1px solid gray', padding:'10px'}}>
            <h3>Name: {name}</h3>
            <p>Quantity: {quantity}</p>
            <button>Remove</button>
        </div>
    );
};

export default ReviewItem;