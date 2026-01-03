import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemStatements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      id="problems"
      ref={ref}
      className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-4"
    >
      {/* Racing stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

      {/* ================= CENTER CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h2 className="px-4 text-4xl md:text-6xl font-black uppercase italic tracking-tight md:tracking-tighter
                       text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 mb-8">
          Problem Statements
        </h2>
        
        <h1 className="px-4 text-5xl md:text-7xl font-black uppercase tracking-wide text-gray-700">
          Coming Soon
        </h1>

        {/* Sliding loading line */}
        <div className="mt-8 w-64 h-1 mx-auto bg-zinc-200 rounded-full overflow-hidden">
          <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-slide" />
        </div>
      </motion.div>

      {/* ================= ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(400%);
            }
          }

          .animate-slide {
            animation: slide 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}