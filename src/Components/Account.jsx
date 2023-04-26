import { getAuth } from "firebase/auth";

export const Account = (props) => { 
    const auth = getAuth();
    const { name, level } = props;

    return auth.currentUser && (
      <>
        <h4>Hey {name}</h4>
        <h4>You're level {level}!</h4>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </>
    )
  };