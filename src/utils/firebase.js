// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzQTktHTLFdYkruWgGLmTY-2vIPiNp6Y",
  authDomain: "netflixgpt-44775.firebaseapp.com",
  projectId: "netflixgpt-44775",
  storageBucket: "netflixgpt-44775.firebasestorage.app",
  messagingSenderId: "161450041168",
  appId: "1:161450041168:web:1d3d6a67712c299e77d655",
  measurementId: "G-GP6C4XR7KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);