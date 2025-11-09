import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import "../App.css";
const FeedPost = ({ post }) => {
  return (
    <div className="feed-post">
      {/* Post Header */}
      <div className="feed-post-header">
        <div className="feed-post-author">
          <img src={post.author.avatar} alt={post.author.name} />
          <div>
            <h4>{post.author.name}</h4>
            <p>{post.time}</p>
          </div>
        </div>
        <button className="feed-post-menu-btn">
          <MoreHorizontal />
        </button>
      </div>

      {/* Post Content */}
      <div className="feed-post-content">{post.content}</div>

      {/* Post Images */}
      {post.images.length > 0 && (
        <div className="feed-post-images">
          {post.images.map((img, index) => (
            <img key={index} src={img} alt={`post image ${index + 1}`} />
          ))}
        </div>
      )}

      {/* Post Actions */}
      <div className="feed-post-actions">
        <div className="feed-post-stats">
          <button>
            <Heart />
            <span>{post.likes}</span>
          </button>
          <button>
            <MessageCircle />
            <span>{post.comments}</span>
          </button>
        </div>
        <div className="feed-post-reactions">
          {post.reactions.map((reaction, index) => (
            <span key={index}>{reaction}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
