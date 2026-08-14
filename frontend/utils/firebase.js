// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codexai-bbde2.firebaseapp.com",
  projectId: "codexai-bbde2",
  storageBucket: "codexai-bbde2.firebasestorage.app",
  messagingSenderId: "1035800557939",
  appId: "1:1035800557939:web:96f8de3de0dacf7a196d06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
