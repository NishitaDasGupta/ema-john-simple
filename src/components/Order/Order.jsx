import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);
    // console.log(cart);
    const handleDelete = (id) => {
        const finalSavedCart = cart.filter(product => product.id !== id);
        setCart(finalSavedCart);
        removeFromDb(id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;