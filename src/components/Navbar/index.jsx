import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react'

import "./styles.css";
import { Context } from "../../contexts/loginContext";
import axios from "axios";

function Navbar() {
  const { authenticated, handleLogout } = useContext(Context)

    async function handleOnClick(){
      const response = await axios.post('logout',{
        headers:{
          'x-access-token' : localStorage.getItem('token')
        }
      })
      console.log(response)
      handleLogout(false)
      localStorage.removeItem('token')
  }

  const login_logout = authenticated ? <li>
            <Link to="/logout" onClick={handleOnClick}>
              Logout
            </Link>
          </li> : <li>
            <Link to="/login">
              Login
            </Link>
          </li>
useEffect(()=>{

},[authenticated])
  return (
    <nav className="navContainer">
      <ul>
        <li>
          <Link to="/">
              <img
                src="img/tikal_tech_logotype.webp"
                alt="Tikal Logotype"
              ></img>
          </Link>
        </li>
        <div className="liContainer">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          {login_logout}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
