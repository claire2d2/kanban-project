import React from "react";
import List from "../List/List";
import useToDos from "../../context/useToDos";
import AddToDo from "../AddToDo/AddToDo";

const Column = ({ statusType }) => {
  return (
    <div className="bg-blue-50 rounded-md m-2 p-3 w-80 flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{statusType}</h1>
      <hr />
      {/* <AddToDo statusType={statusType} /> */}
      <List statusType={statusType} />
    </div>
  );
};

export default Column;
