import "./singlePost.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singleImg"
          src="https://images.squarespace-cdn.com/content/v1/54e4862de4b0004c775a3d5a/1463737467737-IW4A6Y2JARG9RXYXF8F6/coffee.jpg?format=1000w"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem Ipsum is simply dummy text{" "}
          <div className="singlePostEdit">
            <AiFillEdit className="singlePostIcon" />
            <AiFillDelete className="singlePostIcon" />
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sumit</b>
          </span>
          <span className="singlePostDate"> 1Hour ago </span>
        </div>

        <p className="singlePostDesc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
