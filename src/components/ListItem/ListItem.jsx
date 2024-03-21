import React from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import Priority from "../Priority/Priority";
import { Link } from "react-router-dom";

const ListItem = ({ toDo, handleDelete }) => {
  return (
    <div className="ListItem bg-slate-200 rounded-lg m-5 p-5 flex justify-between">
      <div>
        <h1 className="text-2xl mb-4">{toDo.title}</h1>
        <p>Assignee: {toDo.assignee}</p>
        <p>Status: {toDo.status}</p>
      </div>
      <div className="flex items-start gap-2">
        <Priority toDo={toDo} />
        <Link to="/">
          <DeleteToDo toDo={toDo} handleDelete={handleDelete} />
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
