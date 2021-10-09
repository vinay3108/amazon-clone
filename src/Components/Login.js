import React, { useState } from 'react'
import { Link,useHistory} from 'react-router-dom'
import './Login.css';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        //Some fancy FireBase login
        auth
        .signInWithEmailAndPassword(email,password)
        .auth(auth=>{
            history.push('/');
        })
        .catch((err)=>{
            alert(err.message);
        })
    }
    const register=e=>{
        e.preventDefault();
        //Some fancy FireBase register
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth)
            {
                history.push('/');
            }
        })
        .catch((err)=>{
            alert(err.message);
        })
    }
    return (
        <div className="login">
            <Link to='/'>
            <img
                className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
            />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" name="email" id="" value={email} onChange={e=>setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" name="password" id="" value={password} onChange={e=>setPassword(e.target.value)}/>
                    
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Clone Conditions of the Use & Sale. Please see our privacy Notice,our Cookies and our Interse-Based Ads Notice.
                    <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
                </p>
            </div>
        </div>
    )
}

export default Login
