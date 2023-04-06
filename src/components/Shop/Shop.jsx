import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedData = getShoppingCart();
        const savedCart = [];
        //console.log(storedData);
        for (const id in storedData) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const btnAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* {products.map(product => console.log(product))} */}
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    btnAddCart={btnAddCart}
                ></Product>)}

            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link className='review-link' to="/order"><button className='dlt review'><span className='clear-span'>Review Order</span>
                        <FontAwesomeIcon className='font-clear' icon={faArrowAltCircleLeft} />
                    </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;