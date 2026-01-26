import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe({ isOpen, setIsOpen }) {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      const message =
        err?.text ||
        err?.message ||
        "Something went wrong. Please try again later.";
      setError(message);
    } finally {
      setIsSending(false);
    }
  };

  // ✅ If modal is closed, render nothing
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300 backdrop-blur-sm"
      onClick={() => setIsOpen(false)} // ✅ click outside closes modal
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)} // ✅ close modal
          className="absolute right-4 top-4 text-white/60 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full rounded-full py-2 font-semibold transition ${
              isSending
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-indigo-500 to-cyan-400 hover:scale-105"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {error && (
            <p className="text-red-400 text-sm text-center">❌ {error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
