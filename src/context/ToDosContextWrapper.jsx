import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDosList from "../assets/data.json";

export const ToDosContext = createContext();

function ToDosContextWrapper({ children }) {
  const navigate = useNavigate();
  const [toDos, setToDos] = useState(ToDosList);

  function handleDelete(id) {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    navigate("/");
    setToDos(filteredToDos);
    console.log(filteredToDos);
  }

  function addListItem(newToDo) {
    setToDos([...toDos, newToDo]);
    console.log(toDos);
  }

  return (
    <ToDosContext.Provider
      value={{ toDos, handleDelete, addListItem, setToDos }}
    >
      {children}
    </ToDosContext.Provider>
  );
}

export default ToDosContextWrapper;
