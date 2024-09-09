// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const {
  VITE_FIREBASE_API_KEY,  
VITE_FIREBAE_AUTH_DOMAIN ,
VITE_FIREBASE_PROJECT_ID  ,
VITE_FIREBASE_STORAGE_BUCKET  ,
VITE_FIREABASE_MESSAGING_SENDER_ID,
VITE_FIREBASE_APP_ID 
}=import.meta.env
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBAE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREABASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)