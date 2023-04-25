import './App.css';
//react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';

import { Account } from './Components/Account';
import { SignIn } from './Components/SignIn';
import { WalkAbout } from './Components/WalkAbout';

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// Initialize Firebase
import { app, db } from './Configs/firebaseConfig';
const auth = getAuth();
const analytics = getAnalytics(app);


let level = getLevel();
console.log(level);

async function getLevel() {
  await getDoc(doc(db, "achievements", "level")).then((doc) => {console.log(doc)});
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
