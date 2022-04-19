import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../data";

export default function Post ({post}) {

  //const post = Posts;
   const user = Users.filter(u =>u.id===1)
  console.log(user[0].username)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src=       {Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> {post.like}</span>
          </div>
          <div className="postBottomRight"> </div>
          <span className="postCommentText"> {post.comment} Comment</span>
        </div>
      </div>
    </div>
  );
}
