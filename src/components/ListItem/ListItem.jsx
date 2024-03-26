import React from "react";
import Priority from "../Priority/Priority";
import useToDos from "../../context/useToDos";
import { useDraggable } from "@dnd-kit/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListItem = ({ toDo }) => {
  const { handleDelete } = useToDos();

  const navigate = useNavigate();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: toDo.id,
  });

  console.log(listeners);

  return (
    <div
      className="bg-blue-100 rounded-lg p-3 flex gap-2 justify-between w-full"
      ref={setNodeRef}
      {...listeners}
      draggable="true"
      // onClick={(e) => {
      //   e.preventDefault();
      //   console.log("hello");
      //   navigate(`/items/${toDo.id}`);
      // }}
    >
      <Link to={`/items/${toDo.id}`}>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-lg font-medium">{toDo.title}</h1>
          <p className="text-sm font-light">{toDo.assignee}</p>
        </div>
      </Link>

      <div className="flex items-start gap-2">
        <div className="flex items-start gap-2">
          <Priority toDo={toDo} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
