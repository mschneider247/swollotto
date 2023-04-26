import './App.css';
import { useState, useEffect } from "react";

//Firebase and react-firebase-hooks
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { app, db } from './Configs/firebaseConfig';

// UI Components
import { Account } from './Components/Account';
import { SignIn } from './Components/SignIn';
import { FirstTimeLogin } from './Components/FirstTimeLogin';
import { Achievements } from './Components/Achievements';
import { WalkAbout } from './Components/WalkAbout';

//Utils
import { buildNewUser } from './Utils/utils.js';

// Initialize Firebase
const auth = getAuth();
const analytics = getAnalytics(app);




function App() {

  const [authorizedUser] = useAuthState(auth);
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

  getUsers();
  // Why does this freak out when given usersRef as a dependency?
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkForLogin = () => {
    console.log('authorizedUser:: ',authorizedUser);
  
    if (authorizedUser) {
      const foundUser = users.find((user) => user.id === authorizedUser.uid);
      if (!foundUser) {
        const newUser = buildNewUser(authorizedUser);
        console.log('newUser:: ',newUser);
        // setUser(newUser);
      } else {
        console.log('foundUser:: ',foundUser);
        // setUser(foundUser);
      }
    }
  }

  checkForLogin();
  return (
    <div className="App">
      <header className="header">
        <ul className="signIn">
          <li>
            {authorizedUser ? <Account name={'mike'}
                             level={'1'}
            /> 
            : <SignIn />}
          </li>
          {user &&
          <l1>
            level
          </l1>}
        </ul>
        <h3>SwolLotto</h3>
      </header>
      <hr></hr>
      {(!user && authorizedUser) &&
        <FirstTimeLogin props={authorizedUser}/>
      }
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
