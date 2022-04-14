import Share from "../share/Share";
import "./feed.css";
import Post from "./../post/Post";
import { Posts } from "../../dummyData";

const renderPosts = Posts.map((post) => <Post key={post.id} post={post} />);

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {renderPosts}
      </div>
    </div>
  );
}
