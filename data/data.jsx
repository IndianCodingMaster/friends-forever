import {
  ChefHat,
  ImageIcon,
  MessageSquare,
  Mountain,
  Music,
  Newspaper,
  Palette,
  Settings,
  User,
  Users,
} from "lucide-react";

export const userProfile = {
  name: "Bogdan Nikitin",
  handle: "@nikitinteam",
  avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=BN",
};

export const navItems = [
  { name: "News Feed", icon: Newspaper, active: true, count: 0 },
  { name: "Messages", icon: MessageSquare, active: false, count: 6 },
  { name: "Forums", icon: Users, active: false, count: 0 },
  { name: "Friends", icon: User, active: false, count: 3 },
  { name: "Media", icon: ImageIcon, active: false, count: 0 },
  { name: "Settings", icon: Settings, active: false, count: 0 },
];

export const stories = [
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

export const suggestions = [
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

export const recommendations = [
  { id: 1, name: "UI/UX", icon: Palette, color: "blue" },
  { id: 2, name: "Music", icon: Music, color: "pink" },
  { id: 3, name: "Cooking", icon: ChefHat, color: "yellow" },
  { id: 4, name: "Hiking", icon: Mountain, color: "purple" },
];

export const feedPosts = [
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
        <span className="post-content-mention">Silena</span>,
        <span className="post-content-mention">Olya</span> and
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
