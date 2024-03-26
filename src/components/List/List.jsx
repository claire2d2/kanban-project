import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import useToDos from "../../context/useToDos";

const List = ({ statusType, setListEmpty, handleDeleteColumn }) => {
  const { toDos } = useToDos();
  const filteredToDos = toDos.filter((toDo) => toDo.status === statusType);

  // if list is empty, set state of listEmpty to true and make Delete Column button appear
  if (filteredToDos.length === 0) {
    setListEmpty(true);
    return <button onClick={() => handleDeleteColumn()}>Delete Column</button>;
  }
  return (
    <div className="flex flex-col gap-2">
      {filteredToDos.map((toDo) => {
        return <ListItem key={toDo.id} toDo={toDo} />;
      })}
    </div>
  );
};

export default List;
