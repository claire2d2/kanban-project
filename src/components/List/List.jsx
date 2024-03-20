import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ toDos, handleDelete }) => {
  return (
    <div className="List flex-column p-5">
      {toDos.map((toDo) => {
        return (
          <ListItem key={toDo.id} toDo={toDo} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default List;
