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

      {/* ================= WHITE AESTHETIC F1 HUD ================= */}

      {/* TOP LEFT - Speed & Gear Cluster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-6 left-6 z-20 hidden md:block"
      >
        <div className="flex gap-2">
          {/* Speed - Large Display */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 min-w-[140px] mt-10">
            <div className="text-[9px] uppercase tracking-widest text-red-600 font-bold mb-1">Speed</div>
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
                327
              </motion.div>
              <div className="text-sm text-gray-500 mb-2">km/h</div>
            </div>
          </div>
          
          {/* Gear */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 w-20 mt-10">
            <div className="text-[9px] uppercase tracking-widest text-gray-600 font-bold mb-1">Gear</div>
            <div className="text-5xl font-black text-gray-800 text-center">7</div>
          </div>
        </div>
      </motion.div>

      {/* TOP RIGHT - Race Position & Lap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-6 right-6 z-20 hidden md:flex flex-col gap-3 w-[380px]"
      >
        <div className="flex gap-3 mt-10">
          {/* Position */}
          <div className="bg-white backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-gray-200 flex-1">
            <div className="text-[9px] uppercase tracking-widest text-red-600 font-bold mb-1">Position</div>
            <div className="text-4xl font-black text-gray-800">
              P3
            </div>
          </div>

          {/* Lap Counter */}
          <div className="bg-white backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-gray-200 flex-1">
            <div className="text-[9px] uppercase tracking-widest text-gray-600 font-bold mb-1">Lap</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-gray-900">12</span>
              <span className="text-gray-400 text-lg">/</span>
              <span className="text-gray-500 text-xl">24</span>
            </div>
          </div>
        </div>

        {/* Tire & ERS Info */}
        <div className="flex gap-3">
          {/* Tire Temps - Compact Grid */}
          <div className="bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 flex-1">
            <div className="flex items-center gap-2 mb-3">
              {/* Tire Icon */}
              <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
              <div className="text-[9px] uppercase tracking-widest text-orange-600 font-bold">Tires</div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {['FL', 'FR', 'RL', 'RR'].map((tire, idx) => (
                <motion.div
                  key={tire}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + idx * 0.1 }}
                >
                  <span className="text-[9px] text-gray-600 w-5">{tire}</span>
                  <motion.span
                    className="text-base font-bold text-orange-600"
                    animate={{ color: ['#ea580c', '#f97316', '#ea580c'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {85 + idx * 2}°
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ERS & Fuel */}
          <div className="flex flex-col gap-3">
            <div className="bg-white backdrop-blur-xl rounded-2xl px-4 py-2 shadow-2xl border border-gray-200">
              <div className="text-[9px] uppercase tracking-widest text-green-600 font-bold">ERS</div>
              <div className="text-2xl font-black text-gray-800">75%</div>
            </div>
            <div className="bg-white backdrop-blur-xl rounded-2xl px-4 py-2 shadow-2xl border border-gray-200">
              <div className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Fuel</div>
              <div className="text-2xl font-black text-gray-800">42%</div>
            </div>
          </div>
        </div>

        {/* Team Radio */}
        <div className="bg-white backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Radio Header */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-2 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-red-600 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-gray-800 font-bold text-[10px] uppercase tracking-wider">Radio</span>
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
          
          {/* Radio Content */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                EN
              </div>
              <div>
                <div className="text-red-600 text-[9px] font-bold uppercase mb-0.5">Engineer</div>
                <p className="text-gray-800 text-xs">
                  "Push now. Full throttle."
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

            {/* Race Stats */}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-300 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">S2</span>
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div className="w-px h-3 bg-gray-400" />
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">Gap</span>
                <span className="text-yellow-600 font-bold">+1.2s</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LEFT MIDDLE - Race Standings */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-20 hidden md:block"
      >
        <div className="bg-white backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-gray-200 w-[320px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-3 py-2 flex items-center justify-between border-b border-gray-300">
            <span className="text-gray-800 font-black text-xs uppercase tracking-wider">Live Standings</span>
            <motion.div
              className="w-2 h-2 bg-red-600 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          {/* Positions List */}
          <div className="p-0">
            {[
              { pos: 1, driver: 'VERSTAPPEN', team: 'Red Bull Racing', points: 467, color: 'bg-blue-600', textColor: 'text-blue-600' },
              { pos: 2, driver: 'NORRIS', team: 'McLaren', points: 374, color: 'bg-orange-500', textColor: 'text-orange-600' },
              { pos: 3, driver: 'LECLERC', team: 'Ferrari', points: 356, color: 'bg-red-600', textColor: 'text-red-600', highlight: true },
              { pos: 4, driver: 'PIASTRI', team: 'McLaren', points: 292, color: 'bg-orange-500', textColor: 'text-orange-600' },
              { pos: 5, driver: 'SAINZ', team: 'Ferrari', points: 290, color: 'bg-red-600', textColor: 'text-red-600' },
              { pos: 6, driver: 'RUSSELL', team: 'Mercedes', points: 245, color: 'bg-teal-500', textColor: 'text-teal-600' },
              { pos: 7, driver: 'HAMILTON', team: 'Mercedes', points: 223, color: 'bg-teal-500', textColor: 'text-teal-600' },
              { pos: 8, driver: 'PEREZ', team: 'Red Bull Racing', points: 152, color: 'bg-blue-600', textColor: 'text-blue-600' },
              { pos: 9, driver: 'ALONSO', team: 'Aston Martin', points: 70, color: 'bg-green-600', textColor: 'text-green-600' },
              { pos: 10, driver: 'GASLY', team: 'Alpine', points: 42, color: 'bg-pink-600', textColor: 'text-pink-600' },
            ].map((driver, idx) => (
              <motion.div
                key={driver.pos}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.05 }}
                className={`flex items-center gap-0 border-b border-gray-200 ${
                  driver.highlight 
                    ? 'bg-red-100' 
                    : idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'
                }`}
              >
                {/* Position Number */}
                <div className={`w-12 flex items-center justify-center py-3 ${driver.highlight ? 'bg-red-200' : 'bg-gray-200'}`}>
                  <span className={`text-lg font-black ${driver.highlight ? 'text-red-700' : 'text-gray-700'}`}>
                    {driver.pos}
                  </span>
                </div>
                
                {/* Team Color Bar */}
                <div className={`w-1.5 h-12 ${driver.color}`} />
                
                {/* Driver Info */}
                <div className="flex-1 px-3 py-2">
                  <div className={`text-sm font-bold uppercase tracking-wide ${driver.highlight ? 'text-gray-800' : 'text-gray-700'}`}>
                    {driver.driver}
                  </div>
                  <div className={`text-[10px] uppercase tracking-wider ${driver.textColor} font-semibold`}>
                    {driver.team}
                  </div>
                </div>
                
                {/* Points */}
                <div className={`px-4 py-2 ${driver.highlight ? 'bg-red-600' : 'bg-gray-700'}`}>
                  <div className="text-xl font-black text-white text-center">
                    {driver.points}
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
          Engines primed. Lights out. Innovation at full throttle.
          <br />
          Welcome to HackX 4.0, where the fastest ideas take the podium.
        </motion.p>

        <motion.div
          style={{ y: ctaY, opacity: ctaOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-8 mb-6 md:mb-[30px] flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4"
        >
          <button className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md transition-colors">
            Register Now
          </button>
          <button className="px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg transition-colors">
            Contact Us
          </button>
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