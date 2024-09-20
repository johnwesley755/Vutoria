// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY7JTxZv9mDz8IawoWsne8jIAY_tlVaQc",
  authDomain: "vutoria-60389.firebaseapp.com",
  projectId: "vutoria-60389",
  storageBucket: "vutoria-60389.appspot.com",
  messagingSenderId: "713181802098",
  appId: "1:713181802098:web:0019c3f40e96b348801ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Firebase Authentication 
const auth = getAuth(app);

export { auth };