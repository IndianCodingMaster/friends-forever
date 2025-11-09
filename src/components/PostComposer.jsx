import React from "react";
import { userProfile } from "../../data/data";
import {
  ChevronDown,
  File,
  Globe,
  ImageIcon,
  MapPin,
  Send,
} from "lucide-react";

const PostComposer = () => {
  return (
    <div className="post-composer">
      <div className="post-composer-input-area">
        <img src={userProfile.avatar} alt={userProfile.name} />
        <input
          type="text"
          placeholder={`Share something, ${userProfile.name.split(" ")[0]}...`}
        />
      </div>
      <div className="post-composer-actions">
        <div className="post-composer-buttons">
          <button>
            <File />
            <span>File</span>
          </button>
          <button className="hover-green">
            <ImageIcon />
            <span>Image</span>
          </button>
          <button className="hover-red">
            <MapPin />
            <span>Location</span>
          </button>
        </div>
        <div className="post-composer-submit-area">
          <button className="post-composer-privacy-btn">
            <Globe />
            <span>Public</span>
            <ChevronDown />
          </button>
          <button className="post-composer-send-btn">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
