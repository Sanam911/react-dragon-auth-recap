// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqBd8MX_xgHR1QBcCzuiFO7WtFjahigVw",
  authDomain: "react-dragon-news-auth-8d89e.firebaseapp.com",
  projectId: "react-dragon-news-auth-8d89e",
  storageBucket: "react-dragon-news-auth-8d89e.appspot.com",
  messagingSenderId: "1098741966990",
  appId: "1:1098741966990:web:292f8068c8c3fcc7bd81df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;