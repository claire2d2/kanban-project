import React from "react";
import List from "../List/List";
import { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";

const Column = ({ statusType, columns, setColumns }) => {
  const [hidden, setHidden] = useState(false);
  // set useState to define wether to show the Delete Column button
  const [listEmpty, setListEmpty] = useState(false);

  // filtering the Columns array to remove the current column
  const filterColumns = columns.filter((col) => col.label !== statusType);

  // function to remove column that we set in the List component
  const handleDeleteColumn = () => {
    setColumns(filterColumns);
  };

  const showAddToDo = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <div className="bg-blue-50 rounded-md m-2 p-3 min-w-80 flex flex-col gap-2">
      <div className="flex justify-between pr-3">
        <h1 className="text-2xl font-semibold">{statusType}</h1>{" "}
        <button onClick={() => showAddToDo()}>+</button>
      </div>
      <hr />
      {/* <AddToDo statusType={statusType} hidden={hidden} /> */}
      <div className="flex flex-col gap-2 overflow-x-scroll">
        {hidden ? <AddToDo statusType={statusType} /> : null}
        <List
          statusType={statusType}
          setListEmpty={setListEmpty}
          handleDeleteColumn={handleDeleteColumn}
        />
      </div>
    </div>
  );
};

export default Column;
