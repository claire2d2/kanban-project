import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import useToDos from "../../context/useToDos";

const List = ({ statusType, setListEmpty, handleDeleteColumn }) => {
  const { toDos } = useToDos();
  const filteredToDos = toDos.filter((toDo) => toDo.status === statusType);

  // if list is empty, set state of listEmpty to true and make Delete Column button appear
  if (filteredToDos.length === 0) {
    return (
      <button
        onClick={() => handleDeleteColumn()}
        className="bg-red-400 text-white hover:bg-red-500 hover:text-red-50 font-medium py-1.5 px-5 mt-6 w-fit m-auto rounded"
      >
        Delete Column
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredToDos.map((toDo) => {
        return (
          <Link to={`/items/${toDo.id}`} key={toDo.id}>
            <ListItem toDo={toDo} />
          </Link>
        );
      })}
    </div>
  );
};

export default List;
