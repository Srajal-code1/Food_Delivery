import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ⚠️ IMPORTANT: Replace these values with your actual Firebase project config
// Get these from Firebase Console: https://console.firebase.google.com/
// 1. Go to your project settings (gear icon)
// 2. Under "Your apps", find your web app
// 3. Copy the config values from "firebaseConfig"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,  // From Firebase Console
  authDomain: "vingo-food-delivery-b8782.firebaseapp.com",
  projectId: "vingo-food-delivery-b8782",
  storageBucket: "vingo-food-delivery-b8782.firebasestorage.app",
  messagingSenderId: "222555174185",
  appId: "1:222555174185:web:4c0c9541806fb8fa7f7338"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
