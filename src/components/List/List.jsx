import React from "react";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";

const List = ({ toDos, handleDelete }) => {
  return (
    <div className="List flex-column p-5">
      {toDos.map((toDo) => {
        return (
          <Link to={`/${toDo.id}`} key={toDo.id}>
            <ListItem key={toDo.id} toDo={toDo} handleDelete={handleDelete} />
          </Link>
        );
      })}
    </div>
  );
};

export default List;
