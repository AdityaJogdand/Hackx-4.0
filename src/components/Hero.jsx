import logo from "../assets/logo.png";
import f1 from "../assets/f1.png";
import LightPillar from "./LightPillar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Strong Parallax transforms
  const logoY = useTransform(scrollY, [0, 500], [0, -200]);
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const ctaY = useTransform(scrollY, [0, 500], [0, -100]);
  const ctaOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const carY = useTransform(scrollY, [0, 500], [0, 80]);
  const carScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const redStripY = useTransform(scrollY, [0, 500], [0, 80]);
  const trackY = useTransform(scrollY, [0, 500], [0, -80]);
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col mt-[10px]">

      {/* LIGHT PILLAR BACKGROUND */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <LightPillar />
      </motion.div>

      {/* RACING TRACK LINES - Animated */}
      <motion.div 
        style={{ y: trackY }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        {/* Diagonal track lines */}
        <div className="absolute top-0 left-[10%] w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -skew-x-12 opacity-30"></div>
        <div className="absolute top-0 right-[10%] w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent transform skew-x-12 opacity-30"></div>
      </motion.div>

      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-50"></div>
      </div>

      {/* TOP CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-4 md:pt-[20px] mt-8 md:mt-[35px] px-4">

        {/* LOGO (PARALLAX HEADER) */}
        <motion.img
          src={logo}
          alt="HackX Logo"
          style={{ y: logoY, opacity: logoOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[10vh] md:h-[20vh] max-h-[65px] md:max-h-[125px] mb-3 md:mb-8 object-contain mt-12 md:mt-20"
        />

        {/* SUBTEXT (PARALLAX SUBHEADER) */}
        <motion.p
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-4"
        >
          Engines primed. Lights out. Innovation at full throttle.
          <br />
          Welcome to HackX 4.0, where the fastest ideas take the podium.
        </motion.p>

        {/* CTA BUTTONS (PARALLAX CARD) */}
        <motion.div
          style={{ y: ctaY, opacity: ctaOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 md:mt-8 mb-6 md:mb-[30px] flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4"
        >
          <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 transition shadow-md text-sm md:text-base w-full sm:w-auto">
            Register Now
          </button>
          <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition shadow-lg text-sm md:text-base w-full sm:w-auto">
            Contact us
          </button>
        </motion.div>
      </div>

      {/* F1 CAR + RED STRIP */}
      <div className="relative z-10 mt-8 md:mt-20 flex justify-center items-end h-[35vh] sm:h-[40vh] md:h-[45vh]">
        {/* RED STRIPE WITH GRADIENT */}
        <motion.div 
          style={{ y: redStripY }}
          className="absolute left-0 w-full h-[40%] md:h-[35%] bg-gradient-to-t from-red-600 to-red-500 z-0"
        ></motion.div>

        {/* F1 CAR */}
        <motion.img
          src={f1}
          alt="F1 Car"
          style={{ y: carY, scale: carScale }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative z-10 w-[95%] sm:w-[90%] md:w-[85%] max-w-5xl object-contain drop-shadow-2xl"
        />
      </div>

    </section>
  );
}