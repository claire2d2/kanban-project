import { useState } from "react";
import "./App.css";

import toDosList from "./assets/data.json";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// import pages
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  const [toDos, setToDos] = useState(toDosList);

  function handleDelete(id) {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
  }

  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="pages mb-auto">
        <Routes>
          <Route
            path="/"
            element={<Dashboard toDos={toDos} handleDelete={handleDelete} />}
          />
          <Route
            path="/:itemId"
            element={<ItemDetails toDos={toDos} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
