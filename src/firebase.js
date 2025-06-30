import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNxT7nzr6Q4dI8jHWrmpGbyFX_WcrrEVE",
  authDomain: "mern-airbnb-af03b.firebaseapp.com",
  projectId: "mern-airbnb-af03b",
  storageBucket: "mern-airbnb-af03b.appspot.com",
  messagingSenderId: "298751193482",
  appId: "1:298751193482:web:58e0f94ea3d78dc1af5873",
  measurementId: "G-CG2FWT1KKF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
