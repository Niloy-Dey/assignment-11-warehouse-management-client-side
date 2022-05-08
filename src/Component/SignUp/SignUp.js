import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import auth from  '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle  } from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, loding, error] = useCreateUserWithEmailAndPassword(auth)
    const [SignInWithGoogle] = useSignInWithGoogle(auth);
   
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value); 
    }
    const handleCreateUser = (event) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <form onSubmit={handleCreateUser}>
            <h1 className="signup mt-5 pt-5">SIGN UP</h1>
            <p className="text-danger text-center">{error}</p>
            <div className="form-container mx-auto">
                <div className="container signup-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style"onBlur={handleEmail}   type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" onBlur={handlePassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>Already have an account?  <Link  to="/login">Log in</Link></p>
                <br />
                <button type="submit"  className="submit w-50 "><strong>SIGN UP</strong></button>
                <br />

                <button onClick={() => SignInWithGoogle()} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form>
        </div>
    );
};

export default SignUp;