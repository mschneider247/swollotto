import logo from './logo.svg';
import './App.css';

import { firebaseConfig } from './Configs/firebaseConfig';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const firestore = getFirestore();

const Account = () => { 
  return auth.currentUser && (
    <>
      <h4>Hey Michael!</h4>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
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
