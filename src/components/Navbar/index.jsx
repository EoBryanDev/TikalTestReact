import {Link} from 'react-router-dom'

import './styles.css'

function Navbar () {
    return(
        <nav>
            <ul>
                <li><Link to="/">Logo</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar

