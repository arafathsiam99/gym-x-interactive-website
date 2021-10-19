import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import initializeAuthentication from '../../Hooks/useFirebase/firebase.init';
import useFirebase from '../../Hooks/useFirebase/useFirebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { Link } from 'react-router-dom';

initializeAuthentication();


const Login = () => {
    const auth =getAuth();
   const{user,googleSignIn} =useFirebase();
    const handleGoogleSignIn =()=>{
        googleSignIn();
    }
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("password must need to be at least 6 characters");
      return;
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
  };

    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleOnSubmit}>
              <input
               onChange={handleEmailChange}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              <br />
              <input
              onChange={handlePasswordChange}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
              <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Register"
              />
            </form>
            <button onClick={handleGoogleSignIn} className='custom-btn'>Google Sign</button>
            <Link to="/register"> <p>New to account? Please Register</p></Link>
        </div>
    );
};

export default Login;