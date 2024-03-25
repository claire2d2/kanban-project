import React, { useState } from "react";
import Column from "../components/Column/Column";
import useToDos from "../context/useToDos";
import AddColumn from "../components/AddColumn/AddColumn";

const Dashboard = () => {
  const [columns, setColumns] = useState(["To Do", "In Progress", "Done"]);
  const { toDos, handleDelete } = useToDos();

  return (
    <div
      className="flex overflow-x-scroll overflow-y-hidden absolute top-70 w-screen p-2"
      style={{ height: "calc(100vh - 120px)" }}
    >
      {columns.map((col) => {
        return <Column statusType={col} key={col} />;
      })}
      {/* <Column statusType="To Do" />
      <Column statusType="In Progress" />
      <Column statusType="Done" /> */}
      <button>Add column</button>
      <AddColumn columns={columns} setColumns={setColumns} />
    </div>
  );
};

export default Dashboard;
