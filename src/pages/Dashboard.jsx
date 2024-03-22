import React from "react";
import Column from "../components/Column/Column";

const Dashboard = ({ toDos, handleDelete }) => {
  return (
    <div className="flex">
      <Column toDos={toDos} handleDelete={handleDelete} statusType="To Do" />
      <Column
        toDos={toDos}
        handleDelete={handleDelete}
        statusType="In Progress"
      />
      <Column toDos={toDos} handleDelete={handleDelete} statusType="Done" />
      <div>+</div>
    </div>
  );
};

export default Dashboard;
