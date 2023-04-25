import './App.css';
//react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Account } from './Components/Account';

import { firebaseConfig } from './Configs/firebaseConfig';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { applicationDefault, cert } from "firebase/app";

// Initialize Firebase
import { app, db } from './Configs/firebaseConfig';

const auth = getAuth();
const analytics = getAnalytics(app);


let level = getLevel();
console.log(level);

async function getLevel() {
  await getDoc(doc(db, "achievements", "level")).then((doc) => {console.log(doc)});
}



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

const WalkAbout = () => {
   return (
        <section>
            <h4>WalkAbout</h4>
            <button>Add Step Count</button>

        </section>
    )
}


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="header">
        <ul className="signIn">
          <li>
            {user ? <Account /> : <SignIn />}
          </li>
          {user &&
          <l1>
            level
          </l1>}
        </ul>
        <h3>SwolLotto</h3>
      </header>
      <hr></hr>
      {user && 
      <body>
        <WalkAbout />
      </body>}
    </div>
  );
}

export default App;
