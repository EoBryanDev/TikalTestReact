import "./styles.css";
import { Button } from "../../components/Button";
function Login() {
  return (
    <section className="containerLogin">
      <aside className="form-aside">
        <h2>Welcome back</h2>
        <p>
          To connect to your account fill the form with valid email and
          password!
        </p>
        <form className="loginForm">
          <div className="inputContainer">
            <input type="email" id="user" placeholder="Type your email"></input>
            <label for="user">User</label>

            <input
              type="password"
              id="pwd"
              placeholder="Type your password"
            ></input>
            <label for="pwd">Password</label>
            <Button>Sign In</Button>
          </div>
        </form>
      </aside>
      <aside>
        <img
          className="loginImage"
          src={process.env.PUBLIC_URL + "/img/tikal_tech_loginBackground.jpg"}
          alt="Big city"
        ></img>
      </aside>
    </section>
  );
}

export default Login;
