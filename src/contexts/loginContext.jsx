import { createContext, useEffect, useState } from "react";

const Context = createContext();

function LoginContextProvider({ children }) {
  const [authenticated, setAuthenticated ] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState('')

  function handleAuthenticated(data){
    setUserAuthenticated(data)
    setAuthenticated(true)
  }
  function handleLogout(bool){
    setAuthenticated(bool)
  }

  return (
    <Context.Provider value={{ authenticated, handleAuthenticated, userAuthenticated, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, LoginContextProvider };
