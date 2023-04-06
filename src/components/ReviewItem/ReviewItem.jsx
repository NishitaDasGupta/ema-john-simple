import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product , handleDelete }) => {
    console.log({product});
    const {id, img, name, quantity, price } = product;
  
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <h3>{name}</h3>
                <h4>Price: <span className='span-tag'>${price}</span></h4>
                <h4>Order Quantity: <span className='span-tag'>{quantity}</span>
                </h4>
            </div>
            <button className='btn-delete'><FontAwesomeIcon  onClick={() => handleDelete(id)} className='dlt-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;