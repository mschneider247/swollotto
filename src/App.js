import './App.css';
import { useState, useEffect } from "react";

//Firebase and react-firebase-hooks
import { getAuth } from "firebase/auth";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from './Configs/firebaseConfig';

// UI Components
import { Account } from './Components/Account';
import { SignInWithGoogle } from './Components/SignInWithGoogle';
import { FirstTimeLogin } from './Components/FirstTimeLogin';
import { Dashboard } from './Components/Dashboard';
import { Achievements } from './Components/Achievements';

// Initialize Firebase
const auth = getAuth();


function App() {

  const [authorizedUser] = useAuthState(auth);
  const uid = authorizedUser?.uid;
  const [user, setUser] = useState();
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const usersRef = collection(db, "users");

  if (authorizedUser) {
    console.log('xx authorizedUser', authorizedUser);

  }


  useEffect(() => {
    const getUser = async () => {
      if (uid) {
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        console.log('xx querySnapshot', querySnapshot);
        
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setUser(doc.data());
          setLoggedIn(true);
        });
      }
      console.log('xx user', user);
    };
    try {
      getUser();
    } catch(error) {
      console.log(error);
    }
  
  }, []);

  const addUserToDB = async (user) => {
    await addDoc(usersRef, {...user});
  }

  const logOut = async () => {
    await setLoggedIn(false);
    await setUser()
    await auth.signOut();
  }

  // we have an authorizedUser, but we're not finding them in the db
  
  return (
    <div className="App">
      <header className="header">
        <h3>SwolLotto</h3>
        {authorizedUser ? 
          <Account logOut={logOut} /> 
        : <SignInWithGoogle />
        }
      </header>
      <hr></hr>
      {/* {(authorizedUser && !user && !loggedIn) &&
        <section>
          <FirstTimeLogin auth={authorizedUser} setUser={setUser} addUserToDB={addUserToDB} setLoggedIn={setLoggedIn}/>
        </section>
      } */}
      {(authorizedUser && user) &&
        <section>
          <Achievements user={user}/>
          <Dashboard />
        </section>
      }
    </div>
  );
}

export default App;