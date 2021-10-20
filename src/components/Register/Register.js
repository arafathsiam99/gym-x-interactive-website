import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
  const {setUser,setName,updateName}= useAuth();
  const auth = getAuth();
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        verifyEmail();
      })
      .catch((error) => setError(error.message));
       updateName();
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
    });
  };
  const handleNameChange= (e)=>{
    setName(e.target.value);
  }
    return (
          <div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div className="login-box">
            <h2 className="custom-font">Please Register</h2>
            <form className="p-5 " onSubmit={handleOnSubmit}>
              <input
               onChange={handleEmailChange}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <br />
              <input type="text" placeholder="enter your name"
              onChange={handleNameChange}/>
              <br />
              <input
              onChange={handlePasswordChange}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <input
                className="mt-3 w-50 custom-btn m-auto"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;