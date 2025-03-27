import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Auth/Login"; // Import the Login component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Delivery Services</h1>
        <Login /> {/* Add the Login component here */}
      </header>
    </div>
  );
}

export default App;
