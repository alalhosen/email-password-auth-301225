// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49aItHvyFj3TCoN0MAQVxASAr4buaGpM",
  authDomain: "email-password-auth-301225.firebaseapp.com",
  projectId: "email-password-auth-301225",
  storageBucket: "email-password-auth-301225.firebasestorage.app",
  messagingSenderId: "692828234576",
  appId: "1:692828234576:web:6bc7f8e4f4058d48418255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;