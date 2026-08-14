import "./App.css";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import ReportItem from "./pages/ReportItem";
import BrowseItems from "./pages/BrowseItems";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Report Lost Item */}
        <Route
          path="/report-lost"
          element={<ReportItem type="lost" />}
        />

        {/* Report Found Item */}
        <Route
          path="/report-found"
          element={<ReportItem type="found" />}
        />

        <Route
  path="/browse"
  element={<BrowseItems />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;