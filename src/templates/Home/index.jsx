import "./styles.css";


import { Button } from "../../components/Button";

function Home() {
  return (
    <div className="backgroundHome">
      <div className="container">
        <Button>Login</Button>
        <Button>See more...</Button>
        <div>carrousel</div>
      </div>
    </div>
  );
}

export default Home;
