import { useState } from "react";

const AddColumn = ({ columns, setColumns }) => {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const validInput = () => {
    if (!title) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // format with label (statusType) and random ID to match default state
    const newColumn = {
      label: title,
      id: crypto.randomUUID(),
    };

    if (!validInput()) {
      setErrorMessage("Please input a title");
      return;
    }
    // add new Column to the columns array
    setColumns([...columns, newColumn]);

    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
  };

  return (
    <form
      action=""
      className="bg-blue-50 rounded-md m-2 p-3 min-w-80 flex flex-col gap-10 items-center"
    >
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          className="text-2xl font-semibold rounded px-2"
          value={title}
          onChange={handleTitle}
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white hover:bg-blue-600 hover:text-blue-50 font-medium py-1.5 px-5 rounded"
      >
        Add
      </button>
      <p>{errorMessage}</p>
    </form>
  );
};

export default AddColumn;
