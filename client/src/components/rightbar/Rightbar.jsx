import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="logoContainer">
          <img className="logoImg" src="assets/logo.png" alt="" />
          <span className="logoText">
            <b>Historical Places </b> Photo and Video
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
      </div>
    </div>
  )
}
