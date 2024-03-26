import React, { useState } from "react";
import Column from "../components/Column/Column";
import AddColumn from "../components/AddColumn/AddColumn";
import { DndContext } from "@dnd-kit/core";
import useToDos from "../context/useToDos";

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

  const { setToDos, toDos } = useToDos();

  function handleDragEnd(e) {
    console.log(e);
    const { active: cell, over: column } = e;

    const foundCol = columns.find((col) => col.id === column.id);
    console.log(foundCol);
    // const foundCell = toDos.find((todo) => todo.id === cell.id);
    // console.log(foundCell);
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === cell.id) {
          const copy = { ...todo, status: foundCol.label };
          return copy;
        } else {
          return todo;
        }
      });
    });
    // if (over && over.includes(active.id)) {

    // }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
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
              id={col.id}
            />
          );
        })}
        <AddColumn columns={columns} setColumns={setColumns} />
      </div>
    </DndContext>
  );
};

export default Dashboard;
