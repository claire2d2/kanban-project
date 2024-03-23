import React from "react";
import List from "../List/List";
import { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";

const Column = ({ toDos, handleDelete, statusType }) => {
  const filteredToDos = toDos.filter((toDo) => toDo.status === statusType);
  const [list, setList] = useState(filteredToDos);
  const addListItem = (newToDo) => {
    setList([...list, newToDo]);
    console.log(list);
  };

  return (
    <div className="bg-blue-50 rounded-md m-2 p-3 w-80 flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{statusType}</h1>
      <hr />
      {/* <AddToDo
        statusType={statusType}
        filteredToDos={filteredToDos}
        addListItem={addListItem}
      /> */}
      <List
        filteredToDos={list}
        handleDelete={handleDelete}
        statusType={statusType}
      />
    </div>
  );
};

export default Column;
