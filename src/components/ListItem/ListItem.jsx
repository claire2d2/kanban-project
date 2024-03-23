import React from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import Priority from "../Priority/Priority";
import { Link } from "react-router-dom";

const ListItem = ({ toDo, handleDelete }) => {
  return (
    <div className="bg-blue-100 rounded-lg p-3 flex gap-2 justify-between w-72">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-lg font-medium">{toDo.title}</h1>
        <p className="text-sm font-light">{toDo.assignee}</p>
        <Priority toDo={toDo} />
      </div>
      <div className="flex items-start gap-2">
        <Link to="/">
          <DeleteToDo toDo={toDo} handleDelete={handleDelete} />
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
