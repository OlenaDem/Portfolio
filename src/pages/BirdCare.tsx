import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BirdCare() {
  const navigate = useNavigate();

  const screenshots = [
    "/screenshots/birdcare_1.png",
    "/screenshots/birdcare_2.png",
    "/screenshots/birdcare_3.png",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bird<span className="text-cyan-400">Care</span>
        </h1>

        <div className="mt-6 flex flex-col items-center gap-4">
          <span className="text-7xl md:text-9xl animate-pulse">🏗️</span>

          <p className="max-w-3xl text-white/70 text-lg">
            This project is currently under construction.
            <br />
            More details will be added soon.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-xl font-semibold mb-2">⚙️ Planned Features</h3>
            <ul className="text-white/70 text-sm list-disc list-inside text-left">
              <li>Bird species database</li>
              <li>Care guides & tips</li>
              <li>Interactive bird gallery</li>
              <li>Search & filters</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-xl font-semibold mb-2">🛠 Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["React", "TypeScript", "Tailwind", "API", "Vite"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Screenshots (BIGGER like SurfSchool) */}
        <h2 className="text-3xl font-semibold mt-20 mb-10">
          Project <span className="text-indigo-400">Screenshots</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {screenshots.map((img, i) => (
            <div
              key={i}
              className="w-full rounded-2xl overflow-hidden border border-white/20 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.4)] cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt="BirdCare screenshot"
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
            <img
              src={selectedImg}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95%] max-h-[95%] rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Back Button */}
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
