import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import initializeAuthentication from '../../Hooks/useFirebase/firebase.init';
import useFirebase from '../../Hooks/useFirebase/useFirebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

initializeAuthentication();


const Login = () => {
    const auth =getAuth();
   const{user,googleSignIn} =useFirebase();
    const handleGoogleSignIn =()=>{
        googleSignIn();
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn} className='custom-btn'>Google Sign</button>
            <p>Already Have an account?</p>
            <h2>Please Register</h2>
        </div>
    );
};

export default Login;