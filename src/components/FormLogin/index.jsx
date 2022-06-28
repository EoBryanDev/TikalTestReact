import { useState } from "react";

import "./styles.css";
import { Button } from "../Button";
import { Input } from "../FormLogin/Input";

export const FormLogin = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      user: user,
      pwd: pwd,
    };
    console.log(data);
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <Input
          type="email"
          id="user"
          value={user}
          placeholder="Type your email"
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          type="password"
          id="pwd"
          value={pwd}
          placeholder="Type your password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <Button>Sign In</Button>
      </div>
    </form>
  );
};
