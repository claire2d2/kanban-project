import "./App.css";
import Layout from "./pages/Layout";

// import pages
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col max-h-screen">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
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
