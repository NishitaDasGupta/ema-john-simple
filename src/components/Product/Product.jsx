import React from 'react';
import './Product.css'
import cartPlus from '../../images/cart-plus-solid.svg'
const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            </div>
            <button>Add to Cart <img className='btn-pic' src={cartPlus} alt="" /></button>
        </div>
    );
};

export default Product;