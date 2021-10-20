import React, { useState} from 'react';
import initializeAuthentication from '../../Hooks/useFirebase/firebase.init';
import useFirebase from '../../Hooks/useFirebase/useFirebase';
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useLocation,useHistory } from 'react-router';
import { Link } from 'react-router-dom';

initializeAuthentication();


const Login = () => {
  const location=useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from|| "/home";
    const auth =getAuth();
   const{user,googleSignIn} =useFirebase();
    const handleGoogleSignIn =()=>{
        googleSignIn();
        history.push(redirect_uri);
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
        history.push(redirect_uri);
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
      
  };

    return (
        <div>
            <div className="login-box d-flex align-items-center justify-content-center">
              <div className="login">
                <div className="login-box">
                  <h2 className="custom-font">Please Login</h2>
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
                className="mt-3 w-50 custom-btn m-auto mb-3"
                type="submit"
                value="Login"
              />
            </form>
            <button onClick={handleGoogleSignIn} className='btn btn-success w-80'>Google Sign In</button>
            <Link to="/register"> <p>New to account? Please Register</p></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;