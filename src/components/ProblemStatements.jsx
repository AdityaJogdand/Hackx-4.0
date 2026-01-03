export default function ProblemStatements() {
  return (
    <div
      id="problems"
      className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-4"
    >
      {/* Racing stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="px-4 text-5xl md:text-7xl font-black uppercase italic tracking-tight md:tracking-tighter
                       text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600">
          Coming Soon
        </h1>

        <p className="mt-4 text-zinc-400 text-sm md:text-base tracking-widest uppercase font-bold animate-fade-in delay-200">
          Problem Statements Will Be Revealed
        </p>

        {/* Sliding loading line */}
        <div className="mt-8 w-64 h-1 mx-auto bg-zinc-200 rounded-full overflow-hidden">
          <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-slide" />
        </div>
      </div>

      {/* ================= ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(400%);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-slide {
            animation: slide 1.5s ease-in-out infinite;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  );
}