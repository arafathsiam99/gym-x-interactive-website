import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from './firebase.init';
initializeAuthentication();


const useFirebase = () => {
     const [user,setUser] =useState({});
     const[isLoading,setIsLoading]=useState(true);
     const googleProvider = new GoogleAuthProvider();
     const auth =getAuth();

    
  const googleSignIn =()=>{
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setUser(result.user);
  })
  .finally(()=>setIsLoading(false))

  .catch((error) => {
    console.log(error.message);
  });
  }

  useEffect( ()=>{
   const unsubscribed= onAuthStateChanged(auth,user=>{
      if(user){
        setUser(user);
      }
      else{
        setUser({})
      }
      setIsLoading(false);
    });
    return ()=> unsubscribed;
  },[])
  const logOut = ()=>{
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false));
  }
    return {
        user,
        googleSignIn,
        isLoading,
        logOut
    };
};

export default useFirebase;