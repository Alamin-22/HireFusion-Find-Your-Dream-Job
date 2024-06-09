import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD0iOsNsJX9RXpgDckfKRfv8vK34nU4b58",
    authDomain: "assignment-11-5c145.firebaseapp.com",
    projectId: "assignment-11-5c145",
    storageBucket: "assignment-11-5c145.appspot.com",
    messagingSenderId: "586036004419",
    appId: "1:586036004419:web:09ee72ef87dfde7aaef6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;