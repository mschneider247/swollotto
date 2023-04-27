import './App.css';
import { useState, useEffect } from "react";

//Firebase and react-firebase-hooks
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { app, db } from './Configs/firebaseConfig';

// UI Components
import { Account } from './Components/Account';
import { SignIn } from './Components/SignIn';
import { FirstTimeLogin } from './Components/FirstTimeLogin';
import { Achievements } from './Components/Achievements';
import { WalkAbout } from './Components/WalkAbout';

//Utils

// Initialize Firebase
const auth = getAuth();
const analytics = getAnalytics(app);




function App() {

  const [authorizedUser] = useAuthState(auth);
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({...doc.data()})));
    };
    getUsers();
    checkForUserInDB();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkForUserInDB = async () => {
    const foundUser = users.find((user) => user.id === authorizedUser.uid);
    if (!foundUser && user) {
      await setLoggedIn(true);
      await addDoc(usersRef, {...user})
      
    }
    if (foundUser && !user) {
      await setLoggedIn(true);
      await setUser(foundUser)
    }
  }

  if (authorizedUser && !loggedIn) {
    checkForUserInDB();
  }

  return (
    <div className="App">
      <header className="header">
      <h3>SwolLotto</h3>
        {authorizedUser ? <Account setUser={setUser} setLoggedIn={setLoggedIn} /> 
        : <SignIn />}
      </header>
      <hr></hr>
      {(authorizedUser && !user && !loggedIn) &&
        <FirstTimeLogin auth={authorizedUser} setUser={setUser}/>
      }
      {(authorizedUser && user && loggedIn) && 
      <section>
        <Achievements user={user}/>
        <WalkAbout />
      </section>}
    </div>
  );
}

export default App;