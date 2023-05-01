// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm7kb4m5ry0xvqkPEQcRnFb-KdBFlT77o",
  authDomain: "delicious-dish-ed018.firebaseapp.com",
  projectId: "delicious-dish-ed018",
  storageBucket: "delicious-dish-ed018.appspot.com",
  messagingSenderId: "190934246380",
  appId: "1:190934246380:web:e8e6dc1aa04d2e1b77d6c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;