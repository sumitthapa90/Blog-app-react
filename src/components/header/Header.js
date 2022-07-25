import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="titleS">React & Node</span>
        <span className="titleL">Blog</span>
      </div>

      <img
        className="headerImg"
        src="http://images6.fanpop.com/image/photos/41000000/5983754-hd-wallpaper-free-download-bambidkar-41031093-1920-1200.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
