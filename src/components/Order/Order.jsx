import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);
    // console.log(cart);
    const handleDelete = (id) => {
        const finalSavedCart = cart.filter(product => product.id !== id);
        setCart(finalSavedCart);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (

        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}

                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                     <Link className='proceed-link' to="/checkout"><button className='dlt review'><span className='clear-span'>Proceed Checkout</span>
                        <FontAwesomeIcon className='font-clear' icon={faArrowAltCircleLeft} />
                    </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;