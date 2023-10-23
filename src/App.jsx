import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "../src/comp/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
