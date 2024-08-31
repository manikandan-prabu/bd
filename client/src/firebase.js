// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "real-1-12265.firebaseapp.com",
  projectId: "real-1-12265",
  storageBucket: "real-1-12265.appspot.com",
  messagingSenderId: "540817875648",
  appId: "1:540817875648:web:ef74dcded9e28afb818325"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);