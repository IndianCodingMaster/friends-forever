import React from "react";
import "../App.css";
import { navItems, userProfile } from "../../data/data.jsx";

const LeftSidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <img src={userProfile.avatar} alt={userProfile.name} />
        <div>
          <h2>{userProfile.name}</h2>
          <p>{userProfile.handle}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`nav-item ${item.active ? "active" : ""}`}
          >
            <div className="nav-item-content">
              <item.icon />
              <span>{item.name}</span>
            </div>
            {item.count > 0 && (
              <span className="nav-item-count">{item.count}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Download App Card */}
      <div className="download-card-container">
        <div className="download-card">
          <div className="relative z-10">
            {/* Simple QR-like icon */}
            <div className="download-card-qr">
              <div className="download-card-qr-grid">
                <span className="download-card-qr-box"></span>
                <span className="download-card-qr-box"></span>
                <span className="download-card-qr-box"></span>
                <span className="download-card-qr-box"></span>
              </div>
            </div>
            <h3>Download the App</h3>
            <p>Get the full experience on your phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
