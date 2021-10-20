import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged,updateProfile } from "firebase/auth";
import initializeAuthentication from './firebase.init';
initializeAuthentication();


const useFirebase = () => {
    const [name,setName]=useState('');
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
  const updateName=()=>{
    updateProfile(auth.currentUser, {
  displayName: name
  }).then(() => {
  }).catch((error) => {
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
        setUser,
        setName,
        updateName,
        logOut
    };
};

export default useFirebase;