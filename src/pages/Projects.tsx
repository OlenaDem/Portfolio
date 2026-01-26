import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // safety check
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // safety check

    // Set initial canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#+-$&§%<>";
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0);

    const draw = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, "rgba(43,16,85,0.05)"); // from
      gradient.addColorStop(0.5, "rgba(27,31,92,0.05)"); // via
      gradient.addColorStop(1, "rgba(9,13,43,0.05)"); // to

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00eaff";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas for Matrix effect */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 px-6 ">
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center">
          My Projects
        </h1>

        {/* Example project cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {["Project Surf School", "Project", "Project"].map((proj, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md bg-linear-to-br from-indigo-500/10 to-cyan-500/10 shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300"
            >
              <h3 className="text-xl font-semibold">{proj}</h3>
              <p className="text-white/60 mt-2 text-sm">
                Description of {proj}. Technologies used: React, JS, HTML, CSS.
              </p>
            </div>
          ))}
        </div>
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
    </div>
  );
}
