// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-b8782.firebaseapp.com",
  projectId: "vingo-food-delivery-b8782",
  storageBucket: "vingo-food-delivery-b8782.firebasestorage.app",
  messagingSenderId: "222555174185",
  appId: "1:222555174185:web:4c0c9541806fb8fa7f7338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {app, auth}