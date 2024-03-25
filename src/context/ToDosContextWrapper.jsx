import { createContext, useState } from "react";
import ToDosList from "../assets/data.json";

export const ToDosContext = createContext();

function ToDosContextWrapper({ children }) {
  const [toDos, setToDos] = useState(ToDosList);

  function handleDelete(id) {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
    console.log(filteredToDos);
  }

  function addListItem(newToDo) {
    setToDos([...toDos, newToDo]);
    console.log(toDos);
  }

  return (
    <ToDosContext.Provider value={{ toDos, handleDelete, addListItem }}>
      {children}
    </ToDosContext.Provider>
  );
}

export default ToDosContextWrapper;
