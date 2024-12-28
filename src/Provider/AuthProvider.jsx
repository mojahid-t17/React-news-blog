import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";



 export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    // create user with email and password
    const createUser=(email,password)=>{
      setLoader(true)
   
      return createUserWithEmailAndPassword(auth,email,password);
    }
     
    // login user with email and password
    const signIn=(email,password)=>{
      setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // load user /Get the currently signed-in user
    useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth,(currentUser=>{
      setUser(currentUser);
      setLoader(false)
      console.log("the user is logged in: ", user);
    }));
    return ()=>unsubscribe()
    },[])
    //   log out a user 
    const logOut=()=>{
      setLoader(true)
        signOut(auth)
        .then(()=>{
       
          console.log("logout success")})
        .catch(err=>console.log(err))
    }
     const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loader,
     }
    return (
       <AuthContext.Provider value={authInfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;