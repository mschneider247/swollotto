import { getAuth } from "firebase/auth";

export const Account = (props) => { 
    const auth = getAuth();

    const signOutClearUser = async () => {
        console.log('SIGN OUT')
        await props.setUser()
        await props.setLoggedIn(false)
        auth.signOut()
    }

    return auth.currentUser && (
      <>
        <p>Authenticated with Google</p>
        <button onClick={() => signOutClearUser()}>Sign Out</button>
      </>
    )
  };