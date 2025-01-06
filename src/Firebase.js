import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE3nnUdr3gFHK3wyPdoQvIMowPytB1-Fo",
  authDomain: "swe-portfolio-fc4b9.firebaseapp.com",
  projectId: "swe-portfolio-fc4b9",
  storageBucket: "swe-portfolio-fc4b9.firebasestorage.app",
  messagingSenderId: "534410402998",
  appId: "1:534410402998:web:9f3ca7ef97d4ff89839a17",
  measurementId: "G-4YHPX984WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const imageStorage = getStorage();
