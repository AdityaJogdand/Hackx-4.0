export default function RulesRegulations() {
  const rules = [
    "Teams must consist of 2-4 members.",
    "Projects must be built entirely during the hackathon.",
    "All materials in the Hackathon submission, including software, code, images, and videos, must comply with Intellectual Property Laws and are original.",
    "Use of pre-existing libraries, APIs, and frameworks is allowed, but pre-built projects are not permitted.",
    "A Refundable registration fee of ₹500 per team is required for participation.",
    "Participants must bring their own laptops, chargers, and essential devices.",
    "Judging will be based on creativity, technical implementation, practicality, and presentation.",
    "All submissions must include project code, a demo, and documentation.",
    "Participants must maintain a respectful and collaborative environment throughout the event.",
    "Harassment or inappropriate behavior will result in disqualification.",
    "Equal contribution from all team members is mandatory.",
    "Team presence is required for the kickoff, midway check-ins, mentorship rounds I & II, and final presentations.",
    "The organizers reserve the right to disqualify any team for inappropriate behavior or rule violations.",
    "The final decision will be given by the judges and will be binding.",
    "The venue gates will be closed from 10:00 PM on February 28th, 2025 to 8:00 AM on March 1st, 2025. No entry or exit will be permitted during this time frame.",
    "In case of any queries, reach out to the POCs."
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-16 px-4">
      {/* Racing stripes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600">
            Rules & Regulations
          </h1>
          <div className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-teal-500 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {rule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated speed lines */}
      <div className="absolute bottom-32 left-0 w-full opacity-10 pointer-events-none">
        <div className="flex justify-center gap-2">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-teal-500 animate-slide-slow" />
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-teal-500 animate-slide-medium" />
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-teal-500 animate-slide-fast" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideSlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes slideMedium {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes slideFast {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        .animate-slide-slow {
          animation: slideSlow 3s ease-in-out infinite;
        }

        .animate-slide-medium {
          animation: slideMedium 2.5s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .animate-slide-fast {
          animation: slideFast 2s ease-in-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}