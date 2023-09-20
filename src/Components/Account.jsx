export const Account = (props) => { 
    return (
      <>
        <p>Authenticated with Google</p>
        <button onClick={() => props.logOut()}>Log Out</button>
      </>
    )
  };