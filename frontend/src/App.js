import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Homepage/Home"; // Import Home component
import StoreSelection from "./components/StoreSelection"; // Import StoreSelection component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Delivery Services Authentication</h1>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Store Selection Route */}
          <Route path="/store-selection" element={<StoreSelection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;