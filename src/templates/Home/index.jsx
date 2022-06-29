import "./styles.css";

import {Link} from 'react-router-dom'

import { Button } from "../../components/Button";

function Home() {
  return (
    <section className="backgroundHome containerHome">
      <div>
        <div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/tikal_tech_logotypeName.webp"}
              alt="Tikal Brand"
            ></img>
          </div>
          <div className="buttonContainer">         
            <Link to={"/login"}><Button>Login</Button></Link>
            <a href="https://www.tikal.tech/"><Button>See more...</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
