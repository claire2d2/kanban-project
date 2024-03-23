import React from "react";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const List = ({ filteredToDos, handleDelete, statusType }) => {
  return (
    <div className="flex flex-col gap-2 overflow-x-scroll">
      {filteredToDos.map((toDo) => {
        return (
          <Link to={`/items/${toDo.id}`} key={toDo.id}>
            <ListItem key={toDo.id} toDo={toDo} handleDelete={handleDelete} />
          </Link>
        );
      })}
    </div>
  );
};

export default List;
