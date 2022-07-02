import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome, FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import "./styles.css";

import useLogin from "../../hooks/useLogin";

function Navbar() {
  const { authenticated, logout } = useLogin();

  async function handleOnClick() {
    logout();
  }

  return (
      <nav className="navContainer">
      <IconContext.Provider value={{ style: {verticalAlign: 'middle', margin: '0 5px'}}}>
        {!authenticated ? (
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
                <Link to="/"> <FaHome /> Home</Link>
              </li>
              <li>
                <Link to="/login"> <FaSignInAlt /> Login</Link>
              </li>
            </div>
          </ul>
        ) : (
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
                <Link to="/logout" onClick={handleOnClick}>
                  <FaSignOutAlt />
                    Logout
                </Link>
              </li>
              <li>
                <Link to="/index"> <MdDashboard />Index</Link>
              </li>
            </div>
          </ul>
        )}
        </IconContext.Provider>
      </nav>
  );
}

export default Navbar;
