import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">

<h1>{products.length}</h1>
            </div>
            <div className="cart-container">
<h1>Bye</h1>
            </div>
        </div>
    );
};

export default Shop;