import React, { useState } from 'react';
import './ShipmentTracker.css';

const ShipmentTracker = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Toggle chatbot visibility
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="shipment-tracker">
            {/* Left Sidebar for Chatbot */}
            <div className="left-sidebar">
                <h1>Shipment Tracker & Live Updates</h1>
                {/* Chatbot Icon */}
                <img
                    src="/images/chatbot.png"
                    alt="Chatbot Icon"
                    className="chatbot-icon"
                    onClick={toggleChat}
                />

                {/* Chatbox (Visible when isChatOpen is true) */}
                {isChatOpen && (
                    <div className="chat-box">
                        <div className="chat-header">
                            <h3>Alexa</h3>
                            <button className="close-chat" onClick={toggleChat}>✖</button>
                        </div>
                        <div className="chat-message">
                            <p>Hi there 👋 How can I help you today?</p>
                            <p className="chat-note">
                                By chatting, you consent to this chat being recorded and stored according to our 
                                <a href="#">privacy policy</a>.
                            </p>
                        </div>
                        <div className="chat-buttons">
                            <button>Connect me to sales.</button>
                            <button>I want a quote.</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Grid */}
            <div className="main-content">
                {/* Map Section */}
                <div className="map-section">
                    <img src="/images/ShipmentTracker.png" alt="Shipment Tracker Map" className="map-image" />
                </div>

                {/* Alerts Section */}
                <div className="alert-box">
                    <h2>Safety Alerts</h2>
                    <p>⚠️ A severe storm is expected to impact the Indian Ocean region, bringing heavy rain, strong winds, and rough seas.</p>
                </div>

                {/* Time Left Section */}
                <div className="time-left">
                    <h2>Time Left</h2>
                    <p className="time">12:39:90 HRS</p>
                </div>

                {/* Updates Section */}
                <div className="update-box">
                    <h2>Notifications</h2>
                    <p>⚠️ Shipment #12345 has been rerouted to avoid the storm, expected to cross Port Kalinga next.</p>
                </div>
            </div>
        </div>
    );
};

export default ShipmentTracker;
