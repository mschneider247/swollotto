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
      const data = await getDocs(usersRef);
      await setUsers(data.docs.map((doc) => ({...doc.data()})));
    };
    try {
      getUsers();
      findUser();
    } catch(error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findUser = () => {
    const foundUser = users.find((user) => user.id === authorizedUser.uid)
    if (foundUser) {
      setUser(foundUser);
      setLoggedIn(true);
    }
  }

  const addUserToDB = async (user) => {
    await addDoc(usersRef, {...user});
  }

  const logOut = async () => {
    await setLoggedIn(false);
    await setUser()
    await auth.signOut();
  }

  if (authorizedUser && !user) {
    findUser();
  }

  return (
    <div className="App">
      <header className="header">
        <h3>SwolLotto</h3>
        {authorizedUser ? 
          <Account logOut={logOut} /> 
        : <SignIn findUser={findUser}/>
        }
      </header>
      <hr></hr>
      {(authorizedUser && !user && !loggedIn) &&
        <section>
          <FirstTimeLogin auth={authorizedUser} setUser={setUser} addUserToDB={addUserToDB} setLoggedIn={setLoggedIn}/>
        </section>
      }
      {(authorizedUser && user) &&
        <section>
          <Achievements user={user}/>
          <WalkAbout />
        </section>
      }
    </div>
  );
}

export default App;