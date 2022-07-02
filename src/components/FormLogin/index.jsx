import { useNavigate } from 'react-router-dom'

import {FaRegWindowClose} from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import "./styles.css";
import { Button } from "../Button";
import { Input } from "../FormLogin/Input";


import useLogin from "../../hooks/useLogin";

export const FormLogin = () => {

  const {user, setUser, login, error} = useLogin()
  
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('no submit')
    login(user.user, user.pwd)
    navigate("/index")
  }
  return (
      <form className="loginForm" onSubmit={handleSubmit}>
      <div className="inputContainer">
        {error ? <div className="errorBox"><FaRegWindowClose style={{margin: '0 4px'}}/> {error}</div> : ''}
        <Input
          type="email"
          id="user"
          value={user.user}
          placeholder="Type your email"
          onChange={(e) => setUser((prevState) => ({...prevState , user: e.target.value}))}
        />
        <Input
          type="password"
          id="pwd"
          value={user.pwd}
          placeholder="Type your password"
          onChange={(e) => setUser((prevState) => ({...prevState , pwd: e.target.value}))}
        />

        <Button><FiLogIn size={'15px'}  style={{margin: '0 4px'}}/> Sign In</Button>
      </div>
    </form>
  );
};
