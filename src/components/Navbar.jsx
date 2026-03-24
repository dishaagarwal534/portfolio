import "../styles/navbar.css";

function Navbar({ toggleSidebar, isOpen }) {
  return (
    <div className={`top-navbar ${isOpen ? "nav-open" : "nav-closed"}`}>

      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

    </div>
  );
}

export default Navbar;