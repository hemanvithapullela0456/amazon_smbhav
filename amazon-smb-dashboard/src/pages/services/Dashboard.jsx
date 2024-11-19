import React from 'react';
import './Dashboard.css';
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
//hi

const Dashboard = () => {
  return (
    
<IconContext.Provider value={{ color: "black", size: "1em", className: "global-class-name" }}>
    <div className="app">
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          
          <div className="welcome-message">
            <FaUser/>
            Welcome back, User!
          </div> 
          
          <div className="user-id">USER ID: 20034567</div>

          <div className="menu-container">
            <ul className="menu">
              <li className="menu-item highlighted">Dashboard</li>
              <li className="menu-item">Shipment</li>
              <li className="menu-item">Analysis</li>
              <li className="menu-item">History</li>
              <li className="menu-item">Notifications</li>
            </ul>
          </div>

          <div className="recent-trips-container">
            <div className="recent-trips">
              <h3>Recent Trips</h3>
              <p className="highlighted-trip">Delivery to Port A</p>
              <p>Delivered to Port B</p>
              <p>Delivered to Port C</p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard">
          <h2>Dashboard</h2>
          <div className="map-container">
            <p>Map goes here</p>
          </div>

          {/* Seller Details */}
          <div className="seller-details">
            <h3>Seller Details</h3>
            <div className="ravi-label">RAVI098789</div>
            <div className="details-grid">
              <div>Parcels Paid: $27K</div>
              <div>Date of Arrival: 28.10.2024</div>
              <div>Status: Delivered</div>
              <div>Type of Parcels: Chemicals</div>
            </div>
          </div>

          {/* Metrics */}
          <div className="metrics">
            {renderMetric("Parcel Weight", "540 KG")}
            {renderMetric("Operational Costs", "$40K")}
            {renderMetric("Transit Time", "7 days")}
            {renderMetric("Fuel Efficiency", "789 L")}
            {renderMetric("CO2 Emissions", "0.54 tonn")}
            {renderMetric("Risk Assessment", "32%")}
          </div>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
};

// Render individual metric cards
const renderMetric = (title, value) => (
  <div className="metrics-card" key={title}>
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

export default Dashboard;
