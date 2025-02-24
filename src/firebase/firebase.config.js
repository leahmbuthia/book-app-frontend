import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQCHlYBKmeivSaitz_QtJwfERfPZhxO_8",
  authDomain: "book-store-mern-app-fc72f.firebaseapp.com",
  projectId: "book-store-mern-app-fc72f",
  storageBucket: "book-store-mern-app-fc72f.firebasestorage.app",
  messagingSenderId: "379420946004",
  appId: "1:379420946004:web:3d6d6ecb908b040fd107c1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};


