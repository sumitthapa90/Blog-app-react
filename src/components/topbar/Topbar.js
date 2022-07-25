import "./topbar.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router-dom";

function Topbar() {
  // check true or false
  const user = false;
  return (
    <div className="topbar">
      <div className="topLeft">
        <AiFillFacebook className="topIcons" />
        <AiFillInstagram className="topIcons" />
        <AiFillTwitterCircle className="topIcons" />
        <MdOutgoingMail className="topIcons" />
      </div>
      <div className="topMiddle">
        <ul className="topList">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="topListItem">HOME</li>
          </Link>

          

          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="topListItem">CONTACT</li>
          </Link>

          <Link
            to="/write"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">WRITE</li>
          </Link>

          <Link
            to="/setting"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">SETTING</li>
          </Link>

          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="img"
          />
        ) : (
          <>
            <Link className="link" to="/login">
              LOGIN
            </Link>
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </>
        )}

        <AiOutlineSearch className="topSearchIcons" />
      </div>
    </div>
  );
}

export default Topbar;
