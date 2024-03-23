import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteToDo = ({ toDo, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-500 text-white hover:bg-blue-700 hover:text-blue-50 font-medium py-0.5 px-2 rounded"
      onClick={() => handleDelete(toDo.id)}
    >
      Delete
    </button>
  );
};

export default DeleteToDo;
