import React from 'react';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import fakeData from '../../fakeData/index'
import './Shop.css'
import {useState} from 'react'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);
    function handleAddProduct(product) {
        const newCount = [...cart, product];
        setCart(newCount)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    first10.map(pd => <Product products={pd} addProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;