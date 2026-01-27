import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import SurfSchool from "./pages/SurfSchool";
import DancingApparel from "./pages/DancingApparel";
import BirdCare from "./pages/BirdCare";

export default function App() {
  return (
    <div className="bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/surfschool" element={<SurfSchool />} />
        <Route path="/projects/dancing-apparel" element={<DancingApparel />} />
        <Route path="/projects/bird-care" element={<BirdCare />} />
      </Routes>
    </div>
  );
}
