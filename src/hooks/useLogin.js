import { useContext } from "react";
import { loginContext } from '../contexts/loginContext'


const useLogin = () => {
  const context = useContext(loginContext);
  return context;
}

export default useLogin;