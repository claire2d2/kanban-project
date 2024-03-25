import React from "react";
import Priority from "../Priority/Priority";
import { Link } from "react-router-dom";
import useToDos from "../../context/useToDos";

const ListItem = ({ toDo }) => {
  const { handleDelete } = useToDos();
  return (
    <div className="bg-blue-100 rounded-lg p-3 flex gap-2 justify-between w-72">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-lg font-medium">{toDo.title}</h1>
        <p className="text-sm font-light">{toDo.assignee}</p>
        <Priority toDo={toDo} />
      </div>
      <div className="flex items-start gap-2">
        <div className="flex items-start gap-2">
          <Link to="/">
            <button onClick={() => handleDelete(toDo.id)}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
