import { useState } from "react";
import "./App.css";

// import context and data
import toDosList from "./assets/data.json";
import useToDos from "./context/useToDos";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// import pages
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col max-h-screen">
      <NavBar />
      <div className="pages" style={{ height: "calc(100vh - 120px)" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/items/:itemId" element={<ItemDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
