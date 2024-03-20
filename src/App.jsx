import { useState } from "react";
import "./App.css";

import toDosList from "./assets/data.json";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";

function App() {
  const [toDos, setToDos] = useState(toDosList);

  function handleDelete(id) {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
  }

  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <div className="mb-auto">
        <List toDos={toDos} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
