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

export const createUserProfileDocument = async (authUser, additionalData)=>{
  if(!authUser) return; //if user is null then return

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists){
    // if userSnapshot does not exist then create a user
    const {displayName,email} = authUser;
    const createdAt = new Date();

    try{
      // use docRef.set() to create a new document
      await userRef.set({
        displayName: displayName, //can omit :displayName for simplification
        email: email,
        createdAt: createdAt,
        ...additionalData
      })
    } catch(e){
      console.log("Error creating user", e.message);

    }
  }
  return userRef; //return userRef as it might be needed somewhere else

}

// Populating the database with SHOP_DATA
export const addCollectionsAndDocuments = async (collectionKey, documentObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  documentObjectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export default firebase;