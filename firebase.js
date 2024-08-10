// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9IPqXPbGxbXSBLoVmkJdIxtuwxETx7jI",
  authDomain: "inventory-management-f19c0.firebaseapp.com",
  projectId: "inventory-management-f19c0",
  storageBucket: "inventory-management-f19c0.appspot.com",
  messagingSenderId: "1038814046838",
  appId: "1:1038814046838:web:7f47c6559684b6e6558d57",
  measurementId: "G-PEHX7W8S4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}