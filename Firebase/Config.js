import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, querySnapshot} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0fwwozplTjg6cdN1u9s4N1JON8IQiOHw",
  authDomain: "chat-55e72.firebaseapp.com",
  projectId: "chat-55e72",
  storageBucket: "chat-55e72.appspot.com",
  messagingSenderId: "342449004483",
  appId: "1:342449004483:web:31602f863c35495cd1e776"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
};