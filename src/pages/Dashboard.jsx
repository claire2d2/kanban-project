import React from "react";
import List from "../components/List/List";

const Dashboard = ({ toDos, handleDelete }) => {
  return (
    <div>
      <List toDos={toDos} handleDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
