import React, { useState } from "react";

const AddColumn = ({ columns, setColumns }) => {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColumn = title;

    setColumns([...columns, newColumn]);
  };

  return (
    <form action="" className="bg-slate-200">
      <label htmlFor="title">
        <input type="text" id="title" value={title} onChange={handleTitle} />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddColumn;
