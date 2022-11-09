import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDksjFuZ1wKuTXWZ-029jZPzl12lE5LYNg",
  authDomain: "fire-db-caf05.firebaseapp.com",
  projectId: "fire-db-caf05",
  storageBucket: "fire-db-caf05.appspot.com",
  messagingSenderId: "738119490594",
  appId: "1:738119490594:web:95eea54793149a3428fe7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);