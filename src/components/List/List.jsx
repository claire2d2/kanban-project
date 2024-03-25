import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import useToDos from "../../context/useToDos";

const List = ({ statusType }) => {
  const { toDos } = useToDos();

  return (
    <div className="flex flex-col gap-2">
      {toDos
        .filter((toDo) => toDo.status === statusType)
        .map((toDo) => {
          return (
            <Link to={`/items/${toDo.id}`} key={toDo.id}>
              <ListItem key={toDo.id} toDo={toDo} />
            </Link>
          );
        })}
    </div>
  );
};

export default List;
