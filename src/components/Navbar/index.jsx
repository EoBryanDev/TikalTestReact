import { Link } from "react-router-dom";

import "./styles.css";

function Navbar() {
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
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
