import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAcguVQVfpSKuBegXMeOPRD_EOiXcLrEnQ",
    authDomain: "clothing-ecommerce-db-a9112.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-db-a9112.firebaseio.com",
    projectId: "clothing-ecommerce-db-a9112",
    storageBucket: "clothing-ecommerce-db-a9112.appspot.com",
    messagingSenderId: "928625196029",
    appId: "1:928625196029:web:e6b6ea29edbfb8c710f794",
    measurementId: "G-0GD8LY42VC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

// because we want a popup to appear to choose accounts
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider);
}
export default firebase;