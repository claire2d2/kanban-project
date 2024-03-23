import React from "react";
import ListItem from "../components/ListItem/ListItem";
import DeleteToDo from "../components/DeleteToDo/DeleteToDo";
import Priority from "../components/Priority/Priority";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetails = ({ toDos, handleDelete }) => {
  let { itemId } = useParams();
  const currentToDo = toDos.find((toDo) => toDo.id === itemId);

  return (
    <div>
      <div className="bg-blue-100 rounded-lg m-5 p-5 flex justify-between">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-3 items-center justify-center">
            <h1 className="text-2xl">{currentToDo.title}</h1>
            <Priority toDo={currentToDo} />
          </div>
          <p>{currentToDo.description}</p>
          <p>Assignee: {currentToDo.assignee}</p>
          <p>Status: {currentToDo.status}</p>
          <p>Created: {currentToDo.createdDate}</p>
          <p>Due by: {currentToDo.dueDate}</p>
        </div>
        <div className="flex items-start gap-2">
          <Link to="/">
            <DeleteToDo toDo={currentToDo} handleDelete={handleDelete} />
          </Link>
          {/* rajouter back button */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
