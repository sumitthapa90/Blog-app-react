import "./registerPage.css";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerPageForm">
        <label className="lableTitle">Username</label>
        <input type="text" placeholder="Username" className="registerInput" />

        <label className="lableTitle">Email</label>
        <input type="text" placeholder="Email" className="registerInput" />

        <label className="lableTitle">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="registerInput"
        />
        <button className="registerButton">Register</button>
      </form>

      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

export default RegisterPage;
