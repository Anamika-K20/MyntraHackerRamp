// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPL0CCMuTkpZtWoRe5T9uBehQNlAat9VE",
  authDomain: "myntra-chat-84b88.firebaseapp.com",
  projectId: "myntra-chat-84b88",
  storageBucket: "myntra-chat-84b88.appspot.com",
  messagingSenderId: "605944810859",
  appId: "1:605944810859:web:4df7f5af4bc8cb3f39902e",
  measurementId: "G-FZWXRGJNZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);