import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const key = process.env.REACT_APP_FIREBASE_API_KEY;
const id = process.env.REACT_APP_FIREBASE_APP_ID;
const domain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const msid = process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID;

const env = {
    apiKey: key,
    authDomain: domain,
    projectId: "swollotto",
    storageBucket: "swollotto.appspot.com",
    messagingSenderId: msid,
    appId: id,
    measurementId: "G-QJ55BEMJDC"
};

export const app = initializeApp(env);

export const db = getFirestore();