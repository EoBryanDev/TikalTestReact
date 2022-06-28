import "./styles.css";
import { FormLogin } from "../../components/FormLogin";

function Login() {
  return (
    <section className="containerLogin">
      <aside className="form-aside">
        <img src="img/tikal_tech_logotype.webp" alt="Tikal Logotype"></img>
        <h2>Welcome back</h2>
        <p>
          To connect to your account fill the form with valid email and
          password!
        </p>
        <FormLogin />
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
