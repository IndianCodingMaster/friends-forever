import Demo from "./components/demo";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";
import RightSidebar from "./components/RightSidebar";
const App = () => {
  return (
    <>
      <div className="app-container">
        {/* Main Dashboard Container */}
        <div className="dashboard-container">
          {/* Left Sidebar */}
          <aside className="">
            <LeftSidebar />
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
          {/* <div className="mobile-view">
            <MainFeed />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default App;
