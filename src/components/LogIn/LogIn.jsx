import React from 'react';
import './LogIn.css'
import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">LogIn</h2>
                <form>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='btn-submit' type="submit" value="LogIn" />
                </form>
                <p className='sub-title'><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
            </div>
        </div>
    );
};

export default LogIn;