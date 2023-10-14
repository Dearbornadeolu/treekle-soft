import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "../src/comp/About";
import Dashboard from "./comp/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
