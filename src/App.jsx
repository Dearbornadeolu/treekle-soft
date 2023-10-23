import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "../src/comp/About";
import Services from "./comp/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  );
}

export default App;
