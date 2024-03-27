import "./App.css";
import Layout from "./pages/Layout";

// import pages
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// default state for the columns
const columnsDefault = [
  { label: "To Do", id: crypto.randomUUID() },
  { label: "In Progress", id: crypto.randomUUID() },
  { label: "Done", id: crypto.randomUUID() },
];

function App() {
  // declaring useState for the columns (useful for adding and deleting columns)
  const [columns, setColumns] = useState(columnsDefault);

  return (
    <div className="App flex flex-col max-h-screen">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Dashboard
                  columnsDefault={columnsDefault}
                  columns={columns}
                  setColumns={setColumns}
                />
              }
            />
            <Route path="items/:itemId" element={<ItemDetails />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
