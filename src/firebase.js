import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKgtsF0coJVBmkXzxPGmR-fePnS64CIpk",
  authDomain: "sitecatolico-e4db7.firebaseapp.com",
  projectId: "sitecatolico-e4db7",
  storageBucket: "sitecatolico-e4db7.appspot.com",
  messagingSenderId: "778841632115",
  appId: "1:778841632115:web:7c3a0a851e2eb1a7be2906"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
