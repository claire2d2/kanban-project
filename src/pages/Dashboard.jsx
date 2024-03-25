import React from "react";
import Column from "../components/Column/Column";
import useToDos from "../context/useToDos";

const Dashboard = () => {
  const { toDos, handleDelete } = useToDos();
  return (
    <div
      className="flex overflow-x-scroll overflow-y-hidden absolute top-70 w-screen p-2"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <Column statusType="To Do" />
      <Column statusType="In Progress" />
      <Column statusType="Done" />
      <Column statusType="Done" />
      <Column statusType="Done" />
      <Column statusType="Done" />
    </div>
  );
};

export default Dashboard;
