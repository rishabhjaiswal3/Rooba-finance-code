import logo from "./logo.svg";
import "./App.css";
import DrawerAndAppbar from "./components/drawer/Drawer.jsx";
import Dashboard from "./pages/Dashboard";
import React from "react";

function App() {
  return (
    <div className="App">
      <DrawerAndAppbar />
      <Dashboard />
    </div>
  );
}

export default App;
