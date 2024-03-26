import React from "react";

const Priority = ({ toDo }) => {
  let style =
    "bg-green-100 text-green-800 font-medium px-2 py-0.5 text-xs rounded-full";
  if (toDo.priority === "High") {
    style =
      "bg-red-100 text-red-800 font-medium px-2.5 py-0.5 text-xs rounded-full";
  } else if (toDo.priority === "Medium") {
    style =
      "bg-yellow-100 text-yellow-800 font-medium px-2.5 py-0.5 text-xs rounded-full";
  }
  return <span className={style}>{toDo.priority}</span>;
};

export default Priority;
