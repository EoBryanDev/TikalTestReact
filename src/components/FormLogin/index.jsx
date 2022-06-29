import { useState, useContext } from "react";
import {useNavigate} from "react-router-dom"


import "./styles.css";
import { Button } from "../Button";
import { Input } from "../FormLogin/Input";

import { Context } from '../../contexts/loginContext'
import { loginRoute } from "../../utils/post-login-route";

export const FormLogin = () => {

  const { authenticated, handleAuthenticated} = useContext(Context)

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  let navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      user: user,
      pwd: pwd,
    };   

    if (loginRoute(data)) {
      handleAuthenticated(data.user)
    }
    
  }
  
  if (authenticated) {
    navigate('/index')
  }
  return (
      <form className="loginForm" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <Input
          type="email"
          id="user"
          value={user}
          placeholder="Type your email"
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          type="password"
          id="pwd"
          value={pwd}
          placeholder="Type your password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <Button>Sign In</Button>
      </div>
    </form>
  );
};
