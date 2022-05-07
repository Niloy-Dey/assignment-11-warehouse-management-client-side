import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [SignInWithGoogle] = useSignInWithGoogle(auth);

    const handleEmailBlur= event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event  => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event =>{
        event.preventDefault();
        setEmail('');
        setPassword('');
    }
    return (
        <div className=' w-100 mt-5 pt-5'>

           <form 
            onSubmit={handleUserSignIn}
        >
            <h1 className="login">LOGIN</h1>
            <div className="form-container mx-auto">
                <div className="container login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style" onBlur={handleEmailBlur}  type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>New to refrigerator world?  <Link to="/signup">Sign up</Link></p>
                <br />
                <button type="submit" onClick={() => signInWithEmailAndPassword(email, password)} className="submit w-50"><strong>LOGIN</strong></button>
                <br />
                <button onClick={() => SignInWithGoogle()} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form >
           </div>
    );
};

export default Login;