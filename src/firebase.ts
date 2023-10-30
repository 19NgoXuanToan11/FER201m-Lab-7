// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHtWIur8-uu6ql2vSpWarlOtL9VK8LgV0",
    authDomain: "movies-5c3e8.firebaseapp.com",
    projectId: "movies-5c3e8",
    storageBucket: "movies-5c3e8.appspot.com",
    messagingSenderId: "141094898126",
    appId: "1:141094898126:web:b74659ff2e796cddeb839f",
    measurementId: "G-K5P8N5FN92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
