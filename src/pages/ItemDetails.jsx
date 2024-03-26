import { useParams } from "react-router-dom";

// import DeleteToDo from "../components/DeleteToDo/DeleteToDo";
import Priority from "../components/Priority/Priority";
import useToDos from "../context/useToDos";

const ItemDetails = () => {
  const { toDos, handleDelete } = useToDos();
  let params = useParams();
  const currentToDo = toDos.find((toDo) => toDo.id === params.itemId);

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
          <button
            onClick={() => {
              handleDelete(currentToDo.id);
            }}
            className="bg-red-500 text-red-50 hover:bg-red-600 hover:text-red-100 px-2 py-0.5 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
