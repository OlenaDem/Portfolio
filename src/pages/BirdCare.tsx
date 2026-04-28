import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const techStack = ["React", "TypeScript", "Tailwind CSS", "Vite"];

const features = [
  "Bird species database",
  "Care guides & tips",
  "Interactive bird gallery",
  "Search & filters",
];

const screenshots = [
  "/screenshots/BirdCare_1.png",
  "/screenshots/BirdCare_2.png",
  "/screenshots/BirdCare_3.png",
  "/screenshots/BirdCare_4.png",
  "/screenshots/BirdCare_5.png",
];

export default function BirdCare() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <div className="w-full text-left mb-4">
          <NavLink
            to="/"
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition"
          >
            Web and Software Developer
          </NavLink>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Bird<span className="text-cyan-400">Care</span>
        </h1>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-10">
          Frontend Web Application
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 text-left shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_45px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-cyan-400" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Features</h2>
            </div>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 border border-purple-400/20 p-6 text-left shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_45px_rgba(168,85,247,0.2)] transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-purple-400" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-purple-400">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6 self-start">Screenshots</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {screenshots.map((img, i) => (
            <div
              key={i}
              className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.3)] cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt="BirdCare screenshot" className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-50"
              >
                ✕
              </button>
              <img
                src={selectedImg}
                alt="BirdCare screenshot enlarged"
                onClick={(e) => e.stopPropagation()}
                className="max-w-[95vw] max-h-[95vh] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.8)] hover:scale-105 transition mt-14"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}
