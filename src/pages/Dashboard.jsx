import React from "react";
import Column from "../components/Column/Column";

const Dashboard = ({ toDos, handleDelete }) => {
  return (
    <div
      className="flex overflow-x-scroll overflow-y-hidden absolute top-70 w-screen p-2"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <Column toDos={toDos} handleDelete={handleDelete} statusType="To Do" />
      <Column
        toDos={toDos}
        handleDelete={handleDelete}
        statusType="In Progress"
      />
      <Column toDos={toDos} handleDelete={handleDelete} statusType="Done" />
      <Column toDos={toDos} handleDelete={handleDelete} statusType="Done" />
      <Column toDos={toDos} handleDelete={handleDelete} statusType="Done" />
      <Column toDos={toDos} handleDelete={handleDelete} statusType="Done" />
    </div>
  );
};

export default Dashboard;
