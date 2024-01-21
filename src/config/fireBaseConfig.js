// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZu0e9r1cQIy2X18aWVwXcHx7co35X6yY",
  authDomain: "budget-tracker-b3b8e.firebaseapp.com",
  projectId: "budget-tracker-b3b8e",
  storageBucket: "budget-tracker-b3b8e.appspot.com",
  messagingSenderId: "262235421617",
  appId: "1:262235421617:web:5c1a3dec1984fd28905b90",
  measurementId: "G-FHP0JQQBD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
