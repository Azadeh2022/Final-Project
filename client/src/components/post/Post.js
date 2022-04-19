import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername">Azadeh Ghobadi</span>
            <span className="postDate">10 min ago</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">hi its my first Post</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> 456 like</span>
          </div>
          <div className="postBottomRight"> </div>
          <span className="postCommentText"> 45 comment</span>
        </div>
      </div>
    </div>
  );
}
