// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DocumentGenerator from "./pages/services/DocumentGenerator";
import CarrierComparison from "./pages/services/CarrierComparison";
import ShipmentTracker from "./pages/services/ShipmentTracker";
import ResolveQueries from "./pages/services/ResolveQueries";

//hey its me
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/services/document-generator" element={<DocumentGenerator />} />
          <Route path="/services/carrier-comparison" element={<CarrierComparison />} />
          <Route path="/services/shipment-tracker" element={<ShipmentTracker />} />
          <Route path="/services/resolve-queries" element={<ResolveQueries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
