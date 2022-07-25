import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineUserAdd } from "react-icons/ai";

function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTittle">Delete Account</span>
        </div>

        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingProfilePik">
            <img
              className="settingImg"
              src="https://images.unsplash.com/photo-1610085927744-7217728267a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMGhkJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <AiOutlineUserAdd className="settingIcons" />
            </label>

            <input type="file" id="fileInput" className="Input"  />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Enter your usename" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
