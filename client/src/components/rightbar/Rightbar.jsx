import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online.js";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="logoContainer">
          <img className="logoImg" src="assets/logo.png" alt="" />
          <span className="logoText">
            <b>Historical Places </b> Photo and Video
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Montreal</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Iran</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Education</span>
            <span className="rightbarInfoValue">Cultural Heritage</span>
          </div>
        </div>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName"> Azadeh</span>
          </div>
          </div>
      </>
    );
  };
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
  );
}
