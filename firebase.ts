import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJ0hCXz_mN-VXFXdgvEJ9xUtCCbV7TeE",
  authDomain: "chatgpt-messenger-gen.firebaseapp.com",
  projectId: "chatgpt-messenger-gen",
  storageBucket: "chatgpt-messenger-gen.appspot.com",
  messagingSenderId: "865776429930",
  appId: "1:865776429930:web:5ed224ef7f41cf4d4f5313",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
