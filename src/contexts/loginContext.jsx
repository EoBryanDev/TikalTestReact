import { createContext } from "react";

const Context = createContext();

export const LoginContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
