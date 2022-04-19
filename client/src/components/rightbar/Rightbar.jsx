import "./rightbar.css"
import { Users } from "../../data";
import Online from "../online/Online.js";

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
        <ul className="rightbarFriendList">
         {Users.map((u) => (
           <Online key={u.id} user={u}/>
         ))}
        </ul>
      
      </div>
    </div>
  )
}
