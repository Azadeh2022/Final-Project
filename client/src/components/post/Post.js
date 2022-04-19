import "./post.css";
import { MoreVert } from "@material-ui/icons";


export default function Post({ post }) {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>
            <span className="postUsername">Azadeh Ghobadi</span>
            <span className="postDate">10 min ago</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
        <span className="postText">hi its my first Post</span>
        </div>
        <div className="postBottom">
         
           
          </div>
        </div>
     
  );
}
