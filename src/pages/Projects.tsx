import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "Project Surf School",
      path: "/projects/surfschool",
      stacks: ["JS", "React", "CSS", "Vite"],
    },
    {
      title: "Project Dancing Apparel",
      path: "/projects/dancing-apparel",
      stacks: ["React", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Project Bird Care",
      path: "/projects/bird-care",
      stacks: ["React", "Tailwind CSS", "Node.js"],
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#+-$&§%<>";
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(0);

    const draw = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );

      gradient.addColorStop(0, "rgba(43,16,85,0.05)");
      gradient.addColorStop(0.5, "rgba(27,31,92,0.05)");
      gradient.addColorStop(1, "rgba(9,13,43,0.05)");

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

    const interval = window.setInterval(draw, 50);

    const handleResize = () => {
      setCanvasSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 px-6">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6 z-10">
          <NavLink
            to="/"
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition cursor-pointer"
          >
            Front-End Developer
          </NavLink>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center">
          My Projects
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {projects.map((proj, i) => (
            <div
              key={i}
              onClick={() => navigate(proj.path)}
              className="p-6 cursor-pointer bg-white/10 border border-white/20 rounded-2xl
                         backdrop-blur-md bg-linear-to-br from-indigo-500/10 to-cyan-500/10
                         shadow-[0_0_35px_rgba(99,102,241,0.45)]
                         hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]
                         hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-white/60 mt-2 text-sm">
                Description of {proj.title}. Technologies used:{" "}
                {proj.stacks.join(", ")}
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
