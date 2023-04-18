import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4sx9MRK9TXpiYMlXALbDOHL3PWRTaVXw",
  authDomain: "swollotto.firebaseapp.com",
  projectId: "swollotto",
  storageBucket: "swollotto.appspot.com",
  messagingSenderId: "282391073397",
  appId: "1:282391073397:web:24c356ad7ef672f79ade3c",
  measurementId: "G-QJ55BEMJDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const firestore = getFirestore();

const Account = () => {
  return (
    <h4>Hey Michael!</h4>
  )
};

const SignIn = () => {
  return (
    <h4>Sign in</h4>
  )
};

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="header">
        <ul>
          <li>
            {user ? <Account /> : <SignIn />}
          </li>
          <l1>level 1</l1>
          <li>🍔</li>
        </ul>
        <h3>SwolLotto</h3>
      </header>
      <body>
        <h5>achievements</h5>
        <h5>nutritionWatch</h5>
        <h5>hootchHound</h5>
        <h5>bodyWorks</h5>
      </body>
    </div>
  );
}

export default App;
