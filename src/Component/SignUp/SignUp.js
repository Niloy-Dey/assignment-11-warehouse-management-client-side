import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const singUp = (event) =>{

    }

    const handleGoogleLogin= ()=>{

    }
    return (
        <div>
            <form onSubmit={singUp}>
            <h1 className="signup mt-5">SIGN UP</h1>
            {/* <p className="text-danger text-center">{error}</p> */}
            <div className="form-container mx-auto">
                <div className="container signup-container">
                    <label htmlFor="uname"><strong>Username</strong></label>
                    <input className="input-style" type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style"  type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>Already have an account?  <Link  to="/login">Log in</Link></p>
                <br />
                <button type="submit" className="submit w-50 "><strong>SIGN UP</strong></button>
                <br />

                <button onClick={handleGoogleLogin} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form>
        </div>
    );
};

export default SignUp;