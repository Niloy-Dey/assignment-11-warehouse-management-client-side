import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const signInWithEmail = (event) =>{
        const email= event.target.value;
        const password = event.target.value; 
    }

    const handleGoogleLogin = () =>{

    }
    return (
        <div className=' w-100 mt-5 pt-5'>

           <form 
            onSubmit={signInWithEmail}
        >
            <h1 className="login">LOGIN</h1>
            <div className="form-container mx-auto">
                <div className="container login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style"  type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>New to refrigerator world?  <Link to="/signup">Sign up</Link></p>
                <br />
                <button type="submit" className="submit w-50"><strong>LOGIN</strong></button>
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form >
           </div>
    );
};

export default Login;