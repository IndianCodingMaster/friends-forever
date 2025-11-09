import React from "react";
import FeedPost from "./FeedPost";
import PostComposer from "./PostComposer";
import { feedPosts } from "../../data/data";

const MainFeed = () => {
  return (
    <div className="main-feed">
      {/* Feed Header */}
      <div className="feed-header">
        <h2>Feeds</h2>
        <div className="feed-header-nav">
          <a href="#" className="active">
            Recents
          </a>
          <a href="#">Friends</a>
          <a href="#">Popular</a>
        </div>
      </div>

      {/* Post Composer */}
      <PostComposer />

      {/* Feed Posts */}
      <div>
        {feedPosts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;
