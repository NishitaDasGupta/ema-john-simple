import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    const btnAddCart=props.btnAddCart;
    
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            </div>

            <button onClick={()=>btnAddCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;