// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logo from "/public/images/logo.png"; // Update the path based on your project structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Amazon SMB" className="logo-image" />
        </div>
        <ul className="navbar-menu">
          <li><span>Company</span></li>
          <li><span>Solutions</span></li>
          <li><span>Products</span></li>
          <li className="navbar-dropdown">
            <span>Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/document-generator">Document Generator</Link></li>
              <li><Link to="/services/carrier-comparison">Carrier Comparison</Link></li>
              <li><Link to="/services/shipment-tracker">Shipment Tracker</Link></li>
              <li><Link to="/services/resolve-queries">Resolve Queries</Link></li>
            </ul>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
