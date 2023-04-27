import React, { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const LogIn = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const { logInUser } = useContext(AuthContext);
    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        logInUser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser, "Login");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {

                console.log(error.message);
            })

    }


    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">LogIn</h2>
                <form onSubmit={handleLogIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={showPass ? 'text' : 'password'} name="password" id="" required />

                        <p onClick={() => setShowPass(!showPass)}>{
                        showPass ? 
                        <small>Hide Password</small> : <small>Show Password</small>}
                        </p>
                    </div>
                    <input className='btn-submit' type="submit" value="LogIn" />
                </form>
                <p className='sub-title'><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
            </div>
        </div>
    );
};

export default LogIn;