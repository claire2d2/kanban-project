import React from "react";

const Footer = () => {
  return (
    <footer className="m-4">
      <hr className="my-3 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="https://github.com/claire2d2/kanban-project"
            target="_blank"
            className="hover:underline"
          >
            https://github.com/claire2d2/kanban-project
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/claireyuansong/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
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
