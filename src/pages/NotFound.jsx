import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div
        className="flex flex-col gap-12 justify-center items-center m-10"
        style={{ height: "calc(100vh - 250px)" }}
      >
        <p>This is not the item you are looking for...</p>
        <Link to="/">
          <button className="bg-blue-500 text-white hover:bg-blue-700 hover:text-blue-50 font-medium py-1.5 px-2 rounded">
            Go back to dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
