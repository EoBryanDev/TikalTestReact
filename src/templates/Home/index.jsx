import "./styles.css";

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
            <Button>Login</Button>
            <Button>See more...</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
