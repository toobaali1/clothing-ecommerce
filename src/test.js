import firebase from "firebase/app";
import "firebase/firestore";

export const firestore = firebase.firestore();

//  to get Blue Jeans
firestore.collection("users").doc("n4xrrJonGEqHhkxsA4rx").collection("cartItems").doc("bZkHJYVQ3zaoaMADjtPx");
// OR
firestore.doc("/users/n4xrrJonGEqHhkxsA4rx/cartItems/bZkHJYVQ3zaoaMADjtPx");
//  OR to get the collection cartItems
firestore.collection("/users/n4xrrJonGEqHhkxsA4rx/cartItems");
