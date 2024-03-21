import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>This is not the item you are looking for...</p>
      <Link to="/">
        <button>Go back to dashboard</button>
      </Link>
    </div>
  );
};

export default NotFound;
