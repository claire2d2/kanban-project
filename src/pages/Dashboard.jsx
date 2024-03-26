import { useState } from "react";
import Column from "../components/Column/Column";
import AddColumn from "../components/AddColumn/AddColumn";
import useToDos from "../context/useToDos";

// default state for the columns
const columnsDefault = [
  { label: "To Do", id: crypto.randomUUID() },
  { label: "In Progress", id: crypto.randomUUID() },
  { label: "Done", id: crypto.randomUUID() },
];

const Dashboard = () => {
  // declaring useState for the columns (useful for adding and deleting columns)
  const [columns, setColumns] = useState(columnsDefault);

  console.log(columns);

  const { setToDos, toDos } = useToDos();

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  function handleOnDrop(e, statusType) {
    e.preventDefault();
    // transform json in javascript object and assign it to variable
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    // update dropped item status
    setToDos((toDos) =>
      toDos.map((toDo) => {
        if (toDo.id === data.id) {
          return { ...toDo, status: statusType };
        } else {
          return toDo;
        }
      })
    );
  }

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
            columnId={col.id}
            handleOnDrop={handleOnDrop}
            handleOnDragOver={handleOnDragOver}
          />
        );
      })}
      <AddColumn columns={columns} setColumns={setColumns} />
    </div>
  );
};

export default Dashboard;
