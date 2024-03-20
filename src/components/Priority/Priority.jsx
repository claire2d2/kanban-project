import React from "react";

const Priority = ({ toDo }) => {
  let style =
    "bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300";
  if (toDo.priority === "High") {
    style =
      "bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300";
  } else if (toDo.priority === "Medium") {
    style =
      "bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300";
  }
  return <span className={style}>{toDo.priority}</span>;
};

export default Priority;
