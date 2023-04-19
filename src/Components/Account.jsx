import { getAuth } from "firebase/auth";

export const Account = () => { 
    const auth = getAuth();
    return auth.currentUser && (
      <>
        <h4>Hey Michael!</h4>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </>
    )
  };