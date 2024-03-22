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
    <div className="m-2 bg-black ">
      <h1 className="text-white">{statusType}</h1>
      {/* // ! form is here! */}
      <div className="bg-blue-100 m-5">
        <AddToDo
          statusType={statusType}
          filteredToDos={filteredToDos}
          addListItem={addListItem}
        />
        {/* //! form ends here */}
      </div>
      <List
        filteredToDos={list}
        handleDelete={handleDelete}
        statusType={statusType}
      />
    </div>
  );
};

export default Column;
