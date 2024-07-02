import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firevase.config";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// Instead of export default MyContext, directly export the context object
export const MyContext = createContext();

export default function Context({ children }) {
  const [getUser, setGetUser] = useState();
  const [loader, setLoader] = useState(true);
  const [filterCatogery, setFilterCatogeru] = useState();
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const getCategoryName = (name) => {
    setFilterCatogeru(name);
  };

  const signinWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const signinWithGithub = () => {
    setLoader(true);
    return signInWithPopup(auth, GithubProvider);
  };

  const CreateUserByEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginByEmailPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutByClick = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUserProfile = (data) => {
    setLoader(true);
    return updateProfile(auth.currentUser, data);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setGetUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextData = {
    signOutByClick,
    signinWithGoogle,
    signinWithGithub,
    CreateUserByEmail,
    loginByEmailPassword,
    updateUserProfile,
    getUser,
    loader,
    filterCatogery,
    getCategoryName,
  };
  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
}
