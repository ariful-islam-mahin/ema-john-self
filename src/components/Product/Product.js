import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {name, price, img, seller, stock, features, key} = props.products
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-text'>
                <h4 className='product-name'><Link to={'/product/'+key}>{name}</Link></h4>
                <div className='item-description'>
                    <div className='details'>
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                    </div>
                    <div className='features'>
                        <h3>Features</h3>
                        {
                            features.map(feature => <small><li className='feature-list'>{feature.description}: <strong>{feature.value}</strong></li></small>)
                        }
                    </div>
                </div>
                { props.showAddToCart === true && <button onClick={() => props.addProduct(props.products)} className='cart-btn'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;