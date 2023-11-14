// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSEa5eYiX6zcVddI_EhJuVZOz4u2xX5-Q",
  authDomain: "academighty.firebaseapp.com",
  projectId: "academighty",
  storageBucket: "academighty.appspot.com",
  messagingSenderId: "782864473078",
  appId: "1:782864473078:web:ad572cf2f1d7b38c3905d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const db = getFirestore(app);

// firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
export const storage = getStorage(app,"gs://academighty.appspot.com/");
