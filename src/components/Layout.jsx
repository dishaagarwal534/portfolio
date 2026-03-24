import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/layout.css";
import { useState } from "react";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app-container ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      
      <Sidebar />

      <div className="main-section">
        <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen}/>

        <div className="content">
          <div className="content-wrapper">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;