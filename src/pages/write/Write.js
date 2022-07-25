import "./write.css";
import { GrAddCircle } from "react-icons/gr";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://wallpaperaccess.com/full/271965.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="">
            <GrAddCircle className="fileInputIcon" />
          </label>

          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            type="text"
            className="writeInput writeText"
            placeholder="Tell Your Story..."
          ></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
