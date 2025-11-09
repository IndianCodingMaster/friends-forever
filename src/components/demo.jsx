import "../App.css";
import {
  MessageSquare,
  Users,
  User,
  Image as ImageIcon,
  Settings,
  MoreHorizontal,
  Heart,
  MessageCircle,
  File,
  MapPin,
  Globe,
  Send,
  Newspaper,
  Palette,
  Music,
  ChefHat,
  Mountain,
  Plus,
  ChevronDown,
} from "lucide-react";

// --- Mock Data ---

const userProfile = {
  name: "Bogdan Nikitin",
  handle: "@nikitinteam",
  avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=BN",
};

const navItems = [
  { name: "News Feed", icon: Newspaper, active: true, count: 0 },
  { name: "Messages", icon: MessageSquare, active: false, count: 6 },
  { name: "Forums", icon: Users, active: false, count: 0 },
  { name: "Friends", icon: User, active: false, count: 3 },
  { name: "Media", icon: ImageIcon, active: false, count: 0 },
  { name: "Settings", icon: Settings, active: false, count: 0 },
];

const stories = [
  {
    id: 1,
    name: "Anatoly Pi",
    avatar: "https://placehold.co/50x50/FBCFE8/9D174D?text=AP",
    image: "https://placehold.co/150x200/A5F3FC/0891B2?text=Story+1",
  },
  {
    id: 2,
    name: "Lotta Eams",
    avatar: "https://placehold.co/50x50/FED7AA/9A3412?text=LE",
    image: "https://placehold.co/150x200/FBCFE8/9D174D?text=Story+2",
  },
];

const suggestions = [
  {
    id: 1,
    name: "Nick Shelburne",
    avatar: "https://placehold.co/50x50/C7D2FE/3730A3?text=NS",
  },
  {
    id: 2,
    name: "Brittni Lando",
    avatar: "https://placehold.co/50x50/FCA5A5/991B1B?text=BL",
  },
  {
    id: 3,
    name: "Ivan Shevchenko",
    avatar: "https://placehold.co/50x50/A7F3D0/065F46?text=IS",
  },
];

const recommendations = [
  { id: 1, name: "UI/UX", icon: Palette, color: "blue" },
  { id: 2, name: "Music", icon: Music, color: "pink" },
  { id: 3, name: "Cooking", icon: ChefHat, color: "yellow" },
  { id: 4, name: "Hiking", icon: Mountain, color: "purple" },
];

const feedPosts = [
  {
    id: 1,
    author: {
      name: "George Lobko",
      avatar: "https://placehold.co/50x50/FECACA/7F1D1D?text=GL",
    },
    time: "2 hours ago",
    content: (
      <p>
        Hi everyone, today I was on the most beautiful mountain in the world 🏔️.
        I also want to say hi to{" "}
        <span className="post-content-mention">Silena</span>,{" "}
        <span className="post-content-mention">Olya</span> and{" "}
        <span className="post-content-mention">Davis!</span>
      </p>
    ),
    images: [
      "https://placehold.co/300x300/BFDBFE/1E3A8A?text=Post+1",
      "https://placehold.co/300x300/FBCFE8/9D174D?text=Post+2",
      "https://placehold.co/600x600/E0E7FF/3730A3?text=Post+3",
    ],
    likes: 6355,
    comments: 24,
    reactions: ["😍", "🔥", "❤️"],
  },
  {
    id: 2,
    author: {
      name: "Vitaliy Boyko",
      avatar: "https://placehold.co/50x50/BFE6C6/166534?text=VB",
    },
    time: "3 hours ago",
    content: (
      <p>
        I chose a wonderful coffee today, I wanted to tell you what product they
        have in stock - it's a latte with coconut 🥥 milk... delicious... it's
        really incredibly tasty!!! 😋
      </p>
    ),
    images: [],
    likes: 6355,
    comments: 18,
    reactions: ["👍", "☕"],
  },
];

// --- CSS Styles ---

// function StyleSheet() {
//   const styles = `
//     /* --- Global & App --- */
//     body {
//       margin: 0;
//       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//       background-color: #f3f4f6;
//       color: #1f2937;
//     }

//     .app-container {
//       background-color: #f3f4f6;
//       min-height: 100vh;
//       padding: 2rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-sizing: border-box;
//     }

//     @media (max-width: 768px) {
//       .app-container {
//         padding: 1rem;
//       }
//     }

//     .dashboard-container {
//       background-color: #ffffff;
//       border-radius: 1.5rem;
//       box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//       width: 100%;
//       max-width: 1536px;
//       height: 90vh;
//       overflow: hidden;
//       display: flex;
//       flex-direction: column;
//     }

//     @media (min-width: 1024px) {
//       .dashboard-container {
//         flex-direction: row;
//       }
//     }

//     /* --- Sidebar --- */
//     .sidebar {
//       width: 100%;
//       height: 100%;
//       background-color: #f8f9fa; /* bg-gray-50/50 */
//       border-right: 1px solid #e5e7eb;
//       display: none; /* hidden */
//       flex-direction: column;
//     }

//     @media (min-width: 1024px) {
//       .sidebar {
//         display: flex;
//         width: 25%;
//       }
//     }
//     @media (min-width: 1280px) {
//       .sidebar {
//         width: 20%;
//       }
//     }

//     .sidebar-profile {
//       display: flex;
//       align-items: center;
//       padding: 1rem;
//     }
//     .sidebar-profile img {
//       width: 4rem;
//       height: 4rem;
//       border-radius: 9999px;
//       border: 4px solid white;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//       margin-right: 0.75rem;
//     }
//     .sidebar-profile div {
//       overflow: hidden;
//     }
//     .sidebar-profile h2 {
//       font-weight: 700;
//       font-size: 1.125rem;
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//     .sidebar-profile p {
//       color: #6b7280;
//       font-size: 0.875rem;
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }

//     .sidebar-nav {
//       flex: 1;
//       margin-top: 2rem;
//       display: flex;
//       flex-direction: column;
//       gap: 0.5rem;
//       overflow-y: auto;
//     }
//     .nav-item {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 0.75rem;
//       margin: 0 0.5rem;
//       border-radius: 0.75rem;
//       transition: all 0.2s;
//       color: #4b5563;
//       text-decoration: none;
//     }
//     .nav-item:hover {
//       background-color: #e5e7eb;
//     }
//     .nav-item.active {
//       background-color: #111827;
//       color: white;
//       box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//     }
//     .nav-item-content {
//       display: flex;
//       align-items: center;
//       gap: 0.75rem;
//     }
//     .nav-item-content svg {
//       width: 1.25rem;
//       height: 1.25rem;
//       flex-shrink: 0;
//     }
//     .nav-item-content span {
//       font-weight: 500;
//     }
//     .nav-item-count {
//       background-color: #ec4899;
//       color: white;
//       font-size: 0.75rem;
//       font-weight: 700;
//       border-radius: 9999px;
//       width: 1.25rem;
//       height: 1.25rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-shrink: 0;
//     }

//     .download-card-container {
//       padding: 1rem;
//     }
//     .download-card {
//       background-image: linear-gradient(to bottom right, #a78bfa, #6366f1);
//       color: white;
//       padding: 1.5rem;
//       border-radius: 1rem;
//       text-align: center;
//       position: relative;
//       overflow: hidden;
//     }
//     .download-card-qr {
//       width: 4rem;
//       height: 4rem;
//       background-color: rgba(255, 255, 255, 0.3);
//       border-radius: 0.5rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       margin: 0 auto;
//       padding: 0.5rem;
//       box-sizing: border-box;
//     }
//     .download-card-qr-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 0.25rem;
//     }
//     .download-card-qr-box {
//       width: 1.5rem;
//       height: 1.5rem;
//       background-color: white;
//       border-radius: 0.25rem;
//     }
//     .download-card h3 {
//       font-weight: 700;
//       margin-top: 1rem;
//       margin-bottom: 0;
//     }
//     .download-card p {
//       font-size: 0.875rem;
//       opacity: 0.8;
//       margin-top: 0.25rem;
//     }

//     /* --- Main Feed --- */
//     .main-feed-container {
//       width: 100%;
//       background-color: #f8f9fa; /* bg-gray-50/50 */
//       height: 100%;
//       overflow-y: auto;
//     }
//     @media (min-width: 1024px) {
//       .main-feed-container {
//         width: 50%;
//       }
//     }
//     @media (min-width: 1280px) {
//       .main-feed-container {
//         width: 60%;
//       }
//     }
//     .main-feed {
//        padding: 2rem;
//     }
//     @media (max-width: 768px) {
//       .main-feed {
//         padding: 1rem;
//       }
//     }

//     .feed-header {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 1.5rem;
//     }
//     .feed-header h2 {
//       font-size: 1.875rem;
//       font-weight: 700;
//       margin: 0;
//     }
//     .feed-header-nav {
//       display: flex;
//       align-items: center;
//       gap: 1rem;
//       color: #6b7280;
//       font-weight: 500;
//     }
//     .feed-header-nav a {
//       text-decoration: none;
//       color: inherit;
//     }
//     .feed-header-nav a:hover {
//       color: #111827;
//     }
//     .feed-header-nav a.active {
//       color: #111827;
//       border-bottom: 2px solid #111827;
//       padding-bottom: 0.25rem;
//     }

//     /* --- Post Composer --- */
//     .post-composer {
//       background-color: white;
//       border-radius: 1rem;
//       box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//       padding: 1.5rem;
//       margin-bottom: 1.5rem;
//       box-sizing: border-box;
//     }
//     .post-composer-input-area {
//       display: flex;
//       align-items: center;
//       gap: 0.75rem;
//     }
//     .post-composer-input-area img {
//       width: 3rem;
//       height: 3rem;
//       border-radius: 9999px;
//     }
//     .post-composer-input-area input {
//       flex: 1;
//       background-color: #f3f4f6;
//       border: none;
//       border-radius: 0.75rem;
//       padding: 0.75rem;
//       font-size: 1rem;
//     }
//     .post-composer-input-area input:focus {
//       outline: none;
//       box-shadow: 0 0 0 2px #3b82f6;
//     }
//     .post-composer-actions {
//       display: flex;
//       flex-wrap: wrap;
//       align-items: center;
//       justify-content: space-between;
//       margin-top: 1rem;
//       padding-top: 1rem;
//       border-top: 1px solid #e5e7eb;
//       gap: 0.5rem;
//     }
//     .post-composer-buttons {
//       display: flex;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 1rem;
//       color: #6b7280;
//     }
//     .post-composer-buttons button {
//       display: flex;
//       align-items: center;
//       gap: 0.25rem;
//       background: none;
//       border: none;
//       cursor: pointer;
//       font-size: 0.9rem;
//       font-weight: 500;
//       color: #6b7280;
//     }
//     .post-composer-buttons button:hover {
//       color: #3b82f6; /* default hover */
//     }
//     /* Specific hovers */
//     .post-composer-buttons button.hover-green:hover { color: #22c55e; }
//     .post-composer-buttons button.hover-red:hover { color: #ef4444; }

//     .post-composer-submit-area {
//       display: flex;
//       align-items: center;
//       gap: 0.75rem;
//     }
//     .post-composer-submit-area button {
//       border: none;
//       cursor: pointer;
//       border-radius: 0.5rem;
//       padding: 0.375rem 0.75rem;
//       display: flex;
//       align-items: center;
//       gap: 0.25rem;
//       font-weight: 500;
//       font-size: 0.875rem;
//     }
//     .post-composer-privacy-btn {
//       background-color: #f3f4f6;
//       color: #6b7280;
//     }
//     .post-composer-privacy-btn:hover {
//       background-color: #e5e7eb;
//     }
//     .post-composer-send-btn {
//       background-color: #111827;
//       color: white;
//       padding: 0.375rem 1.25rem;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     }
//     .post-composer-send-btn:hover {
//       background-color: #374151;
//     }

//     /* --- Feed Post --- */
//     .feed-post {
//       background-color: white;
//       border-radius: 1rem;
//       box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//       padding: 1.5rem;
//       margin-bottom: 1.5rem;
//       box-sizing: border-box;
//     }
//     .feed-post-header {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 1rem;
//     }
//     .feed-post-author {
//       display: flex;
//       align-items: center;
//       gap: 0.75rem;
//       overflow: hidden;
//     }
//     .feed-post-author img {
//       width: 3rem;
//       height: 3rem;
//       border-radius: 9999px;
//       flex-shrink: 0;
//     }
//     .feed-post-author div {
//       overflow: hidden;
//     }
//     .feed-post-author h4 {
//       font-weight: 700;
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//     .feed-post-author p {
//       color: #6b7280;
//       font-size: 0.875rem;
//       margin: 0;
//     }
//     .feed-post-menu-btn {
//       background: none;
//       border: none;
//       cursor: pointer;
//       color: #9ca3af;
//       flex-shrink: 0;
//     }
//     .feed-post-menu-btn:hover {
//       color: #4b5563;
//     }
//     .feed-post-content {
//       color: #374151;
//       margin-bottom: 1rem;
//       line-height: 1.5;
//       word-wrap: break-word;
//     }
//     .feed-post-content p { margin: 0; }
//     .post-content-mention {
//       color: #3b82f6;
//       font-weight: 600;
//     }
//     .feed-post-images {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 0.5rem;
//       margin-bottom: 1rem;
//     }
//     .feed-post-images img {
//       border-radius: 0.5rem;
//       object-fit: cover;
//       width: 100%;
//     }
//     .feed-post-images img:nth-child(1) { aspect-ratio: 1/1; }
//     .feed-post-images img:nth-child(2) { aspect-ratio: 1/1; }
//     .feed-post-images img:nth-child(3) {
//       grid-column: span 2 / span 2;
//       grid-row: span 2 / span 2;
//       height: 100%;
//     }

//     .feed-post-actions {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       color: #6b7280;
//     }
//     .feed-post-stats {
//       display: flex;
//       align-items: center;
//       gap: 1.5rem;
//     }
//     .feed-post-stats button {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//       background: none;
//       border: none;
//       cursor: pointer;
//       font-weight: 500;
//       color: #6b7280;
//       font-size: 0.875rem;
//     }
//     .feed-post-stats button:hover {
//       color: #ec4899; /* pink */
//     }
//     .feed-post-stats button:nth-child(2):hover {
//       color: #3b82f6; /* blue */
//     }
//     .feed-post-reactions {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//     }
//     .feed-post-reactions span {
//       font-size: 1.25rem;
//       background-color: #f3f4f6;
//       border-radius: 9999px;
//       padding: 0.25rem;
//     }

//     /* --- Right Sidebar --- */
//     .right-sidebar-container {
//       width: 100%;
//       height: 100%;
//       background-color: #ffffff;
//       border-left: 1px solid #e5e7eb;
//       display: none; /* hidden */
//     }
//     @media (min-width: 1024px) {
//       .right-sidebar-container {
//         display: block;
//         width: 25%;
//       }
//     }
//     @media (min-width: 1280px) {
//       .right-sidebar-container {
//         width: 20%;
//       }
//     }
//     .right-sidebar {
//       height: 100%;
//       overflow-y: auto;
//       padding: 2rem;
//       display: flex;
//       flex-direction: column;
//       gap: 2rem;
//       box-sizing: border-box;
//     }
//     @media (max-width: 768px) {
//       .right-sidebar {
//         padding: 1rem;
//       }
//     }
//     .right-sidebar section h3 {
//       font-size: 1.25rem;
//       font-weight: 700;
//       margin: 0 0 1rem 0;
//     }

//     /* Stories */
//     .stories-container {
//       display: flex;
//       gap: 1rem;
//       overflow-x: auto;
//       padding-bottom: 0.5rem;
//     }
//     .story-card {
//       width: 7rem;
//       height: 10rem;
//       border-radius: 1rem;
//       position: relative;
//       overflow: hidden;
//       box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//       flex-shrink: 0;
//     }
//     .story-card img.story-image {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//     .story-card-overlay {
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
//     }
//     .story-card-author {
//       position: absolute;
//       bottom: 0.5rem;
//       left: 0.5rem;
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//     }
//     .story-card-author img {
//       width: 2rem;
//       height: 2rem;
//       border-radius: 9999px;
//       border: 2px solid white;
//     }
//     .story-card-author span {
//       color: white;
//       font-size: 0.75rem;
//       font-weight: 600;
//     }
//     .add-story-card {
//       width: 7rem;
//       height: 10rem;
//       border-radius: 1rem;
//       background-color: #f3f4f6;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       color: #6b7280;
//       flex-shrink: 0;
//     }
//     .add-story-button {
//       width: 3rem;
//       height: 3rem;
//       border-radius: 9999px;
//       background-color: white;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//       margin-bottom: 0.5rem;
//       color: #3b82f6;
//     }
//     .add-story-card span {
//       font-size: 0.875rem;
//       font-weight: 500;
//     }

//     /* Suggestions */
//     .suggestions-header {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 1rem;
//     }
//     .suggestions-header h3 {
//       margin: 0;
//     }
//     .suggestions-header a {
//       font-size: 0.875rem;
//       color: #6b7280;
//       text-decoration: none;
//     }
//     .suggestions-header a:hover {
//       color: #111827;
//     }
//     .suggestions-list {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//     }
//     .suggestion-item {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }
//     .suggestion-item-profile {
//       display: flex;
//       align-items: center;
//       gap: 0.75rem;
//       overflow: hidden;
//     }
//     .suggestion-item-profile img {
//       width: 3rem;
//       height: 3rem;
//       border-radius: 9999px;
//       flex-shrink: 0;
//     }
//     .suggestion-item-profile div {
//       overflow: hidden;
//     }
//     .suggestion-item-profile h4 {
//       font-weight: 600;
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//     .suggestion-item-profile p {
//       color: #6b7280;
//       font-size: 0.875rem;
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//     .follow-button {
//       background-color: #111827;
//       color: white;
//       font-size: 0.875rem;
//       font-weight: 600;
//       padding: 0.375rem 1rem;
//       border-radius: 0.5rem;
//       border: none;
//       cursor: pointer;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//       flex-shrink: 0;
//     }
//     .follow-button:hover {
//       background-color: #374151;
//     }

//     /* Recommendations */
//     .recommendations-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 1rem;
//     }
//     .recommendation-card {
//       padding: 1rem;
//       border-radius: 1rem;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 0.5rem;
//     }
//     .recommendation-card-icon {
//       width: 3rem;
//       height: 3rem;
//       border-radius: 9999px;
//       background-color: white;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//     }
//     .recommendation-card span {
//       font-weight: 600;
//       color: #1f2937;
//     }
//     /* Recommendation colors */
//     .rec-color-blue { background-color: #dbeafe; }
//     .rec-icon-blue { color: #3b82f6; }
//     .rec-color-pink { background-color: #fce7f3; }
//     .rec-icon-pink { color: #ec4899; }
//     .rec-color-yellow { background-color: #fef9c3; }
//     .rec-icon-yellow { color: #eab308; }
//     .rec-color-purple { background-color: #e9d5ff; }
//     .rec-icon-purple { color: #a855f7; }

//     /* Mobile View */
//     .mobile-view {
//       width: 100%;
//       height: 100%;
//       overflow-y: auto;
//     }
//     @media (min-width: 1024px) {
//       .mobile-view {
//         display: none;
//       }
//     }
//   `;
//   return <style>{styles}</style>;
// }

// --- Components ---

function Sidebar() {
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
}

function FeedPost({ post }) {
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
}

function PostComposer() {
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
}

function MainFeed() {
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
}

function RightSidebar() {
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
}

// --- Main App Component ---

export default function App() {
  return (
    <>
      <div className="app-container">
        {/* Main Dashboard Container */}
        <div className="dashboard-container">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <Sidebar />
          </aside>

          {/* Main Content Feed */}
          <main className="main-feed-container">
            <MainFeed />
          </main>

          {/* Right Sidebar */}
          <aside className="right-sidebar-container">
            <RightSidebar />
          </aside>

          {/* Mobile View */}
          <div className="mobile-view">
            <MainFeed />
          </div>
        </div>
      </div>
    </>
  );
}
