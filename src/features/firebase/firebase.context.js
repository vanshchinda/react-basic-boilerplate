import React, { createContext } from "react";
// ! Temp
import PropTypes from "prop-types";

//project-308870521577
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// ! Temp
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_apiKey,
  authDomain: process.env.REACT_APP_Firebase_authDomain,
  projectId: process.env.REACT_APP_Firebase_projectId,
  storageBucket: process.env.REACT_APP_Firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_messageSenderId,
  appId: process.env.REACT_APP_Firebase_appId,
  measurementId: process.env.REACT_APP_Firebase_measureId,
};

const app = initializeApp(firebaseConfig);

// ! Temp
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
var provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider);
const login = () => {
  signInWithRedirect(auth, provider);
};

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={login}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
