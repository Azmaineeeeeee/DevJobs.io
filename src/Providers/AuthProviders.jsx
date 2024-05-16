import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { Toaster, toast } from "react-hot-toast";

import auth from "../FireBase/FireBase.config"
import axios from "axios";

export const Context = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
    toast.success("User created successfully");
    return;
  };

  // Sign In
  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
    toast.success("Signed In Successfully")
    return;
  };

 
const updateUser = async (name, photo) => {
    setUpdateLoading(true); 
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setUpdateLoading(false);
    }
  };

  // Login with Google

  const googleSignIn = (googleProvider) => {
    signInWithPopup(auth, googleProvider);
    return;
  };

  // SignOut
  const logOut = () => {
    setLoading(true);
    signOut(auth);
    return;
  };

  // Keeping track of the users
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("User Changed", currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
      
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, [updateLoading]);
  useEffect(()=> {
    const unSubscribe =  onAuthStateChanged(auth,currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false)
        if(currentUser){
          
         axios.post('http://localhost:5001/jwt',loggedUser,{withCredentials: true})
         .then(res => {
          console.log(res.data);
         })
        }
        else{
          axios.post('http://localhost:5001/logout',loggedUser,{withCredentials: true})
          .then(res => {
            console.log(res.data);
          })
        }

      })
      return () => {
        unSubscribe();
      }
    })
  const authInfo = {
    createUser,
    user,
    loading,
    signInUser,
    logOut,
    googleSignIn,
    updateUser,
    updateLoading
  };

  return (
    <Context.Provider value={authInfo}>
      {children}
      <Toaster />
    </Context.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;