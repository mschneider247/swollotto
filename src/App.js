import './App.css';
import { useState, useEffect } from "react";
//react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';

import { Account } from './Components/Account';
import { SignIn } from './Components/SignIn';
import { Achievements } from './Components/Achievements';
import { WalkAbout } from './Components/WalkAbout';

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

// Initialize Firebase
import { app, db } from './Configs/firebaseConfig';
const auth = getAuth();
const analytics = getAnalytics(app);

function App() {

  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, [usersRef]);

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
      <section>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <h4>
                  {user.name}
                </h4>
                <h4>
                  {user.level}
                </h4>
              </div>
            )
          })}
        </div>
        <Achievements />
        <WalkAbout />
      </section>}
    </div>
  );
}

export default App;
