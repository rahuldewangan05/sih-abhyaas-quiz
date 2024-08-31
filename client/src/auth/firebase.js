// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiDAtYtPjVuWyCiQofJh9fxdB3AzXebXE",
  authDomain: "abhyaas-5d3f9.firebaseapp.com",
  projectId: "abhyaas-5d3f9",
  storageBucket: "abhyaas-5d3f9.appspot.com",
  messagingSenderId: "656375248232",
  appId: "1:656375248232:web:0d467572621d7a4df792dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
