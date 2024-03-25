import React, { useState } from "react";
import Column from "../components/Column/Column";
import AddColumn from "../components/AddColumn/AddColumn";

// default state for the columns
const columnsDefault = [
  {
    label: "To Do",
    id: crypto.randomUUID(),
  },
  { label: "In Progress", id: crypto.randomUUID() },
  { label: "Done", id: crypto.randomUUID() },
];
const Dashboard = () => {
  // declaring useState for the columns (useful for adding and deleting columns)
  const [columns, setColumns] = useState(columnsDefault);

  return (
    <div
      className="flex overflow-x-scroll overflow-y-hidden absolute top-70 w-screen p-2"
      style={{ height: "calc(100vh - 120px)" }}
    >
      {columns.map((col) => {
        return (
          <Column
            statusType={col.label}
            key={col.id}
            columns={columns}
            setColumns={setColumns}
          />
        );
      })}
      <AddColumn columns={columns} setColumns={setColumns} />
    </div>
  );
};

export default Dashboard;
