import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const env = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "swollotto.firebaseapp.com",
    projectId: "swollotto",
    storageBucket: "swollotto.appspot.com",
    messagingSenderId: "282391073397",
    appId: "1:282391073397:web:24c356ad7ef672f79ade3c",
    measurementId: "G-QJ55BEMJDC"
};

const app = initializeApp(env);

export const db = getFirestore();