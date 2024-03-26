import React from "react";
import { useState } from "react";
import useToDos from "../../context/useToDos";

const AddToDo = ({ statusType, hidden }) => {
  const { addListItem } = useToDos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState(null);

  const handleTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleDescription = (e) => {
    setDescription(e.currentTarget.value);
  };

  const handleAssignee = (e) => {
    setAssignee(e.currentTarget.value);
  };

  const handleDueDate = (e) => {
    setDueDate(e.currentTarget.value);
  };

  const handlePriority = (e) => {
    setPriority(e.currentTarget.value);
  };

  // check if input is valid
  const [errorMessage, setErrorMessage] = useState("");

  const validInput = () => {
    if (!title || !description || !assignee || !dueDate || !priority) {
      return false;
    }
    return true;
  };

  // function to handle form behaviour
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validInput()) {
      setErrorMessage("Please input all fields");
      return;
    }

    setErrorMessage("");
    const newToDo = {
      id: crypto.randomUUID(),
      title,
      description,
      assignee,
      status: statusType,
      priority,
      createdDate: new Date().toISOString().split("T")[0],
      dueDate,
    };
    addListItem(newToDo);
    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setAssignee("");
    setDueBy(null);
    setPriority(null);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 p-2 rounded-lg bg-blue-200"
      hidden={hidden}
    >
      <div className="flex flex-col justify-between">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="title"
          className="rounded px-1"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          className="rounded px-1"
          value={description}
          onChange={handleDescription}
        />
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          id="assignee"
          className="rounded px-1"
          value={assignee}
          onChange={handleAssignee}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="dueBy">Due by</label>
        <input
          type="date"
          id="dueBy"
          className="rounded px-1"
          min={new Date().toISOString().split("T")[0]}
          value={dueDate}
          onChange={handleDueDate}
        />
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          className="rounded px-1"
          value={priority}
          onChange={handlePriority}
        >
          <option value="" disabled>
            Select a priority
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <p>Created on {new Date().toISOString().split("T")[0]}</p>
      <button className="bg-blue-500 rounded h-10 text-white font-medium">
        Add
      </button>
      <p>{errorMessage}</p>
    </form>
  );
};

export default AddToDo;
