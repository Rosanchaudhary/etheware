// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtaDQskvoBzmyMQWtUn-qUPs8rrUPXqDE",
  authDomain: "etheware-live.firebaseapp.com",
  databaseURL: "https://etheware-live-default-rtdb.firebaseio.com",
  projectId: "etheware-live",
  storageBucket: "etheware-live.appspot.com",
  messagingSenderId: "948539583365",
  appId: "1:948539583365:web:4c43f7eb8f5445686d72ec",
  measurementId: "G-D5FCKTWW07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app)
export {db,storage}
 