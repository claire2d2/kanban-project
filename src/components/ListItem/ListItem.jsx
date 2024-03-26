import Priority from "../Priority/Priority";

const ListItem = ({ toDo }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(toDo));
  };

  return (
    <div
      className="bg-blue-100 rounded-lg p-3 flex gap-2 justify-between w-full"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-lg font-medium">{toDo.title}</h1>
        <p className="text-sm font-light">{toDo.assignee}</p>
      </div>
      <div className="flex items-start gap-2">
        <div className="flex items-start gap-2">
          <Priority toDo={toDo} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
