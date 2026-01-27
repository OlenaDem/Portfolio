import { useNavigate } from "react-router-dom";

export default function DancingApparel() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 py-20 flex justify-center">
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 
                     px-6 py-2 font-semibold 
                     shadow-[0_0_20px_rgba(56,189,248,0.8)] 
                     hover:scale-105 transition mt-20"
      >
        ← Back
      </button>
    </section>
  );
}
