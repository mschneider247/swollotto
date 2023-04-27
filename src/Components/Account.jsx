import { getAuth } from "firebase/auth";

export const Account = (props) => { 
    const auth = getAuth();

    return auth.currentUser && (
      <>
        <p>Authenticated with Google</p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </>
    )
  };