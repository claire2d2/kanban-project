import React from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import Priority from "../Priority/Priority";

const ListItem = ({ toDo, handleDelete }) => {
  return (
    <div className="ListItem bg-slate-200 rounded-lg m-5 p-5 flex justify-between">
      <div>
        <h1 className="text-2xl mb-4">{toDo.title}</h1>
        <p className="mb-2">{toDo.description}</p>
        <p>Assignee: {toDo.assignee}</p>
        <p>Status: {toDo.status}</p>
        <p>Created: {toDo.createdDate}</p>
        <p>Due by: {toDo.dueDate}</p>
      </div>
      <div className="flex items-start gap-2">
        <Priority toDo={toDo} />
        <DeleteToDo toDo={toDo} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default ListItem;
