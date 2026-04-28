import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        404
      </h1>
      <p className="mt-4 text-white/60 text-lg">Page not found</p>
      <NavLink
        to="/"
        className="mt-8 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.8)] hover:scale-105 transition"
      >
        ← Back to Home
      </NavLink>
    </section>
  );
}
