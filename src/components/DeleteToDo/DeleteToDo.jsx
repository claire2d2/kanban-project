import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteToDo = ({ toDo, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0.5 px-2.5 rounded"
      onClick={() => handleDelete(toDo.id)}
    >
      Delete
    </button>
  );
};

export default DeleteToDo;
