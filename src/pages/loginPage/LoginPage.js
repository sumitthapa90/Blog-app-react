import "./loginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginPageForm">
        <label className="lableTitle">Email</label>
        <input type="text" placeholder="Email" className="loginInput" />

        <label className="lableTitle">Password</label>
        <input type="password" placeholder="Password" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}

export default LoginPage;
