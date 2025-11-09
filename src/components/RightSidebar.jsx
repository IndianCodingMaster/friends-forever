import { Plus } from "lucide-react";
import { recommendations, stories, suggestions } from "../../data/data";

const RightSidebar = () => {
  const recColorClasses = {
    blue: { bg: "rec-color-blue", icon: "rec-icon-blue" },
    pink: { bg: "rec-color-pink", icon: "rec-icon-pink" },
    yellow: { bg: "rec-color-yellow", icon: "rec-icon-yellow" },
    purple: { bg: "rec-color-purple", icon: "rec-icon-purple" },
  };
  return (
    <div className="right-sidebar">
      {/* Stories */}
      <section>
        <h3>Stories</h3>
        <div className="stories-container">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <img src={story.image} alt={story.name} className="story-image" />
              <div className="story-card-overlay"></div>
              <div className="story-card-author">
                <img src={story.avatar} alt={story.name} />
                <span>{story.name}</span>
              </div>
            </div>
          ))}
          <div className="add-story-card">
            <div className="add-story-button">
              <Plus />
            </div>
            <span>Add Story</span>
          </div>
        </div>
      </section>

      {/* Suggestions */}
      <section>
        <div className="suggestions-header">
          <h3>Suggestions</h3>
          <a href="#">See all</a>
        </div>
        <div className="suggestions-list">
          {suggestions.map((person) => (
            <div key={person.id} className="suggestion-item">
              <div className="suggestion-item-profile">
                <img src={person.avatar} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <p>@{person.name.toLowerCase().replace(" ", "")}</p>
                </div>
              </div>
              <button className="follow-button">Follow</button>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h3>Recommendations</h3>
        <div className="recommendations-grid">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`recommendation-card ${recColorClasses[rec.color]?.bg || ""}`}
            >
              <div
                className={`recommendation-card-icon ${recColorClasses[rec.color]?.icon || ""}`}
              >
                <rec.icon />
              </div>
              <span>{rec.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RightSidebar;
