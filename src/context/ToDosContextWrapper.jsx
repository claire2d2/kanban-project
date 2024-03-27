import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDosList from "../assets/data.json";

export const ToDosContext = createContext();

function ToDosContextWrapper({ children }) {
  const navigate = useNavigate();
  const [toDos, setToDos] = useState(ToDosList);

  // default state for the columns
  const columnsDefault = [
    { label: "To Do", id: crypto.randomUUID() },
    { label: "In Progress", id: crypto.randomUUID() },
    { label: "Done", id: crypto.randomUUID() },
  ];

  // declaring useState for the columns (useful for adding and deleting columns)
  const [columns, setColumns] = useState(columnsDefault);

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
      value={{
        toDos,
        setToDos,
        handleDelete,
        addListItem,
        columns,
        setColumns,
        columnsDefault,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
}

export default ToDosContextWrapper;
