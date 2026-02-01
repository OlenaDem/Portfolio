import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function SurfSchool() {
  const navigate = useNavigate();
  const screenshots = [
    "/screenshots/SurfSchool_4.png",
    "/screenshots/SurfSchool_3.png",
    "/screenshots/SurfSchool_5.png",
    "/screenshots/SurfSchool_1.png",
    "/screenshots/SurfSchool_2.png",
    "/screenshots/SurfSchool_6.png",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <div className="w-full text-left mb-4">
          <NavLink
            to="/"
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition cursor-pointer"
          >
            Front-End Developer
          </NavLink>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Surf<span className="text-cyan-400">School</span>
        </h1>

        <p className="max-w-3xl text-white/70 text-lg">
          SurfSchool, clean UI, and responsive design.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-xl font-semibold mb-2">⚙️ Features</h3>
            <ul className="text-white/70 text-sm list-disc list-inside text-left">
              <li>Responsive design</li>
              <li>Modern UI/UX</li>
              <li>Project showcase</li>
              <li>Interactive components</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-xl font-semibold mb-2">🛠 Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["React", "JavaScript", "HTML", "CSS", "Vite"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots FULL WIDTH */}
        <h2 className="text-3xl font-semibold mt-20 mb-10">
          Project <span className="text-indigo-400">Screenshots</span>
        </h2>

        <div className="grid grid-cols-2 gap-10 w-full">
          {screenshots.map((img, i) => (
            <div
              key={i}
              className="w-full rounded-2xl overflow-hidden border border-white/20 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.4)] cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt="SurfSchool screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-50"
              >
                ✕
              </button>

              <img
                src={selectedImg}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                className="max-w-[95vw] max-h-[95vh] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 
                     px-6 py-2 font-semibold 
                     shadow-[0_0_20px_rgba(56,189,248,0.8)] 
                     hover:scale-105 transition mt-20"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}
