import React from 'react';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import fakeData from '../../fakeData/index'
import './Shop.css'
import {useState} from 'react'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product
        })
        setCart(previousCart)
    }, [])

    function handleAddProduct(product) {

        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    first10.map(pd => <Product key={pd.key} showAddToCart={true} products={pd} addProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/order'>
                    <button className='main-button'>Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;