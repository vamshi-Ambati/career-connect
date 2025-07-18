import { useState } from "react";
import "./index.css";
import apiUrl from "../../../apiURL";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);

  const submitBtn = async (event) => {
    event.preventDefault();
    const userDetails = { username, password, email };
    console.log(userDetails);
    const url = `${apiUrl}/register/employer`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      alert("Registration Successful , you can now Login");
      setUsername("");
      setPassword("");
      setEmail("");
    } else {
      alert("User Already Exists");
    }
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={submitBtn}>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="USERNAME"
          onChange={onChangeUsername}
          className="username"
        />
        <input
          type="text"
          value={email}
          placeholder="EMAIL"
          onChange={onChangeEmail}
          className="email"
          id="email"
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="PASSWORD"
          onChange={onChangePassword}
          className="password"
        />
        <button className="btn btn-dark mt-3 mb-3 w-50" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <a href="/employer/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
