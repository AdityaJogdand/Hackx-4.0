import { motion, useScroll, useTransform } from "framer-motion";
import logo from '../assets/logo.png';
import f1 from "../assets/f1.png";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const logoY = useTransform(scrollY, [0, 500], [0, -200]);
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const ctaY = useTransform(scrollY, [0, 500], [0, -100]);
  const ctaOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const carY = useTransform(scrollY, [0, 2000], [0, 80]);
  const carScale = useTransform(scrollY, [0, 2000], [1, 3]);
  const redStripY = useTransform(scrollY, [0, 500], [0, 80]);
  const trackY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col mt-[10px]">

      {/* TRACK LINES */}
      <motion.div
        style={{ y: trackY }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        <div className="absolute top-0 left-[10%] w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent -skew-x-12 opacity-30" />
        <div className="absolute top-0 right-[10%] w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent skew-x-12 opacity-30" />
      </motion.div>

      {/* DOT GRID */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-50" />
      </div>

      {/* ================= HACKATHON HUD ================= */}

      {/* TOP LEFT - Time & Teams */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-6 left-6 z-20 hidden md:block"
      >
        <div className="flex gap-2">
          {/* Time Remaining */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 min-w-[140px] mt-10">
            <div className="text-[9px] uppercase tracking-widest text-red-600 font-bold mb-1">Time Left</div>
            <div className="flex items-baseline gap-2">
              <motion.div 
                className="text-5xl font-black text-gray-800 tabular-nums"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(239, 68, 68, 0)',
                    '0 0 8px rgba(239, 68, 68, 0.3)',
                    '0 0 0px rgba(239, 68, 68, 0)'
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                18
              </motion.div>
              <div className="text-sm text-gray-500 mb-2">hrs</div>
            </div>
          </div>
          
          {/* Teams */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 w-24 mt-10">
            <div className="text-[9px] uppercase tracking-widest text-gray-600 font-bold mb-1">Teams</div>
            <div className="text-5xl font-black text-gray-800 text-center">50</div>
          </div>
        </div>
      </motion.div>

      {/* TOP RIGHT - Stage & Progress */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-6 right-6 z-20 hidden md:flex flex-col gap-3 w-[380px]"
      >
        <div className="flex gap-3 mt-10">
          {/* Prizes */}
          <div className="bg-white backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-gray-200 flex-1">
            <div className="text-[9px] uppercase tracking-widest text-red-600 font-bold mb-1">Prizes</div>
            <div className="text-4xl font-black text-gray-800">
              ₹75K
            </div>
          </div>

          {/* Progress Counter */}
          <div className="bg-white backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-gray-200 flex-1">
            <div className="text-[9px] uppercase tracking-widest text-gray-600 font-bold mb-1">Hours</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-gray-900">8</span>
              <span className="text-gray-400 text-lg">/</span>
              <span className="text-gray-500 text-xl">24</span>
            </div>
          </div>
        </div>

        {/* Tech Stack & Metrics */}
        <div className="flex gap-3">
          {/* Active Tech Stack */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 flex-1">
            <div className="flex items-center gap-2 mb-3">
              {/* Code Icon */}
              <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <div className="text-[9px] uppercase tracking-widest text-orange-600 font-bold">Tech</div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {['React', 'Node', 'Python', 'AWS'].map((tech, idx) => (
                <motion.div
                  key={tech}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + idx * 0.1 }}
                >
                  <span className="text-xs text-gray-700 font-medium">{tech}</span>
                  <motion.span
                    className="text-base font-bold text-orange-600"
                    animate={{ color: ['#ea580c', '#f97316', '#ea580c'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    ✓
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coffee & Commits */}
          <div className="flex flex-col gap-3">
            <div className="bg-white backdrop-blur-xl rounded-2xl px-4 py-2 shadow-2xl border border-gray-200">
              <div className="text-[9px] uppercase tracking-widest text-green-600 font-bold">Coffee</div>
              <div className="text-2xl font-black text-gray-800">12</div>
            </div>
            <div className="bg-white backdrop-blur-xl rounded-2xl px-4 py-2 shadow-2xl border border-gray-200">
              <div className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Commits</div>
              <div className="text-2xl font-black text-gray-800">87</div>
            </div>
          </div>
        </div>

        {/* Team Communication */}
        <div className="bg-white backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Communication Header */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-2 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-red-600 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-gray-800 font-bold text-[10px] uppercase tracking-wider">Team Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-[9px] font-mono">LIVE</span>
              <motion.div
                className="w-1.5 h-1.5 bg-red-600 rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
          
          {/* Communication Content */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                TL
              </div>
              <div>
                <div className="text-red-600 text-[9px] font-bold uppercase mb-0.5">Team Lead</div>
                <p className="text-gray-800 text-xs">
                  "API integrated. Frontend sync in 10 mins."
                </p>
              </div>
            </div>
            
            {/* Soundwave */}
            <div className="flex items-center gap-0.5 h-6">
              {[...Array(45)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-full"
                  animate={{
                    height: ['4px', `${Math.random() * 18 + 4}px`, '4px'],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.03,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Build Stats */}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-300 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">Build</span>
                <span className="text-green-600 font-bold">✓ Pass</span>
              </div>
              <div className="w-px h-3 bg-gray-400" />
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">Tests</span>
                <span className="text-yellow-600 font-bold">24/25</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LEFT MIDDLE - Leaderboard */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-20 hidden md:block"
      >
        <div className="bg-white backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-gray-200 w-[320px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-3 py-2 flex items-center justify-between border-b border-gray-300">
            <span className="text-gray-800 font-black text-xs uppercase tracking-wider">Live Leaderboard</span>
            <motion.div
              className="w-2 h-2 bg-red-600 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          {/* Teams List */}
          <div className="p-0">
            {[
              { pos: 1, team: 'CODE WARRIORS', project: 'AI Health Monitor', score: 95, color: 'bg-blue-600', textColor: 'text-blue-600' },
              { pos: 2, team: 'BYTE SQUAD', project: 'Smart Campus', score: 92, color: 'bg-orange-500', textColor: 'text-orange-600' },
              { pos: 3, team: 'TECH TITANS', project: 'Eco Tracker', score: 89, color: 'bg-red-600', textColor: 'text-red-600', highlight: true },
              { pos: 4, team: 'HACK MASTERS', project: 'Social Connect', score: 87, color: 'bg-orange-500', textColor: 'text-orange-600' },
              { pos: 5, team: 'DATA NINJAS', project: 'Finance Bot', score: 85, color: 'bg-red-600', textColor: 'text-red-600' },
              { pos: 6, team: 'DEV LEGENDS', project: 'Learning Hub', score: 82, color: 'bg-teal-500', textColor: 'text-teal-600' },
              { pos: 7, team: 'PIXEL PROS', project: 'Event Planner', score: 80, color: 'bg-teal-500', textColor: 'text-teal-600' },
              { pos: 8, team: 'LOGIC LORDS', project: 'Career Guide', score: 78, color: 'bg-blue-600', textColor: 'text-blue-600' },
              { pos: 9, team: 'BUG HUNTERS', project: 'Food Delivery', score: 75, color: 'bg-green-600', textColor: 'text-green-600' },
              { pos: 10, team: 'SCRIPT KIDS', project: 'Music Stream', score: 72, color: 'bg-pink-600', textColor: 'text-pink-600' },
            ].map((team, idx) => (
              <motion.div
                key={team.pos}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.05 }}
                className={`flex items-center gap-0 border-b border-gray-200 ${
                  team.highlight 
                    ? 'bg-red-100' 
                    : idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'
                }`}
              >
                {/* Position Number */}
                <div className={`w-12 flex items-center justify-center py-3 ${team.highlight ? 'bg-red-200' : 'bg-gray-200'}`}>
                  <span className={`text-lg font-black ${team.highlight ? 'text-red-700' : 'text-gray-700'}`}>
                    {team.pos}
                  </span>
                </div>
                
                {/* Team Color Bar */}
                <div className={`w-1.5 h-12 ${team.color}`} />
                
                {/* Team Info */}
                <div className="flex-1 px-3 py-2">
                  <div className={`text-sm font-bold uppercase tracking-wide ${team.highlight ? 'text-gray-800' : 'text-gray-700'}`}>
                    {team.team}
                  </div>
                  <div className={`text-[10px] uppercase tracking-wider ${team.textColor} font-semibold`}>
                    {team.project}
                  </div>
                </div>
                
                {/* Score */}
                <div className={`px-4 py-2 ${team.highlight ? 'bg-red-600' : 'bg-gray-700'}`}>
                  <div className="text-xl font-black text-white text-center">
                    {team.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= TOP CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-4 md:pt-[20px] mt-8 md:mt-[35px] px-4">

        <motion.img
          src={logo}
          alt="HackX Logo"
          style={{ y: logoY, opacity: logoOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[10vh] md:h-[20vh] max-h-[65px] md:max-h-[125px] mb-3 md:mb-8 object-contain mt-12 md:mt-20"
        />

        <motion.p
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-4"
        >
          Ideas ignited. Code unleashed. Innovation at full throttle.
          <br />
          Welcome to HackX 4.0, where the fastest minds take the podium.
        </motion.p>

        <motion.div
          style={{ y: ctaY, opacity: ctaOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-8 mb-6 md:mb-[30px] flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4"
        >
          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md transition-colors">
            Register Now
          </button>
          <a href="#schedule" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg transition-colors">
              View Schedule
            </button>
          </a>
        </motion.div>
      </div>

      {/* ================= CAR ================= */}

      <div className="relative z-10 mt-8 md:mt-20 flex justify-center items-center h-[35vh] sm:h-[40vh] md:h-[45vh] pl-[5%]">
        <motion.div
          style={{ y: redStripY }}
          className="absolute left-0 w-full h-[40%] md:h-[35%] bg-gradient-to-t from-red-600 to-red-500 bottom-0"
        />

        <motion.img
          src={f1}
          alt="F1 Car"
          style={{ y: carY, scale: carScale }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 w-[95%] sm:w-[90%] md:w-[85%] max-w-5xl object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}