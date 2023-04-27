import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState('');
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password !== confirm) {
            setError("Your Password didn't match.")
            return
        }
        else  if (password.length < 6) {
            setError("Password must be 6 characters or longer.")
            return
        }
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <input className='btn-submit' type="submit" value="LogIn" />
                </form>
                <p><small>Already have an account? <Link to='/login'>LogIn</Link></small></p>
            </div>
        </div>
    );
};

export default SignUp;