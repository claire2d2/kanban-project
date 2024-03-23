import React from "react";

const Footer = () => {
  return (
    <footer className="border-t absolute bottom-0 w-screen">
      <div className="mx-auto p-4 pl-10 pr-12 flex items-center justify-between">
        <span className="text-sm text-gray-400">
          <a
            href="https://github.com/claire2d2/kanban-project"
            target="_blank"
            className="hover:underline"
          >
            https://github.com/claire2d2/kanban-project
          </a>
        </span>
        <ul className="flex items-center text-sm font-medium text-blue-400">
          <li>
            <a
              href="https://www.linkedin.com/in/claireyuansong/"
              target="_blank"
              className="hover:underline me-6"
            >
              Claire Song
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/simonraphael/"
              target="_blank"
              className="hover:underline"
            >
              Raphaël Simon
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
