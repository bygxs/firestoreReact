// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpXrjWQRu7KZbm_UKp6nvhFoOS-xE3Xdg",
  authDomain: "myfirestore-77728.firebaseapp.com",
  projectId: "myfirestore-77728",
  storageBucket: "myfirestore-77728.appspot.com",
  messagingSenderId: "5982560321",
  appId: "1:5982560321:web:d522bea216d8eb9feca6c0",
  measurementId: "G-9PWPTMJ2JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Correctly initialize Firestore

export { firestore }; // Export Firestore instance
