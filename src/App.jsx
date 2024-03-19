import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="mb-auto"></div>
      <Footer />
    </div>
  );
}

export default App;
