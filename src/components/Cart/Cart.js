import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price  
    }
    let shipping = 0;
    if(total > 200){
        shipping = 0
    }
    else if(total > 100){
        shipping = 6.99
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tax = total / 7;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
                <div className='order-summary'>
                    <h3>Order Summary</h3>
                    <p>Items ordered: {cart.length}</p>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling</td>
                            <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${(total + shipping).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax:</td>
                            <td>${tax.toFixed(2)}</td>
                        </tr>
                        <tr className='total-row'>
                            <td>Order Total:</td>
                            <td>${grandTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Link to='/order'>
                  <button className='main-button'>Order Review</button>
                </Link>
        </div>
    );
};

export default Cart;