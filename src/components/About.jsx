import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import tyre from "../assets/tyre.png";

export default function Past() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const TYRE_SIZE = 900;
  const hackxImages = [null, null, null, null, null]; // Placeholder for 5 images

  /* ================= MOBILE DETECTION ================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= AUTO IMAGE SWITCH ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % hackxImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* ================= LENIS SCROLL ================= */
  useEffect(() => {
    let lenisInstance;

    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenisInstance.raf(time);

        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          const start = windowHeight;
          const end = -rect.height;
          const current = rect.top;

          const progress = Math.max(
            0,
            Math.min(1, (start - current) / (start - end))
          );

          setScrollProgress(progress);
        }

        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    return () => lenisInstance?.destroy();
  }, []);

  /* ================= TYRE ANIMATION ================= */
  const tyreX = isMobile ? 0 : (1 - scrollProgress) * TYRE_SIZE;
  const tyreRotate = scrollProgress * (isMobile ? 360 : 720);
  const tyreY = isMobile ? scrollProgress * 80 : 0;
  const tyreScale = isMobile ? 0.9 + scrollProgress * 0.15 : 1;

  return (
    <section
      id="past"
      ref={sectionRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >
      {/* ================= CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-20 h-full w-full
          pr-0 md:pr-[720px] lg:pr-[900px]
          flex
          items-start md:items-center
          justify-center
          pt-16 md:pt-0
        "
      >
        <div className="max-w-5xl w-full px-6 md:px-16">
          <div className="relative">
            {/* Top racing stripe */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600 origin-left"
            />

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 md:-top-8 md:-left-8 w-12 md:w-16 h-12 md:h-16 border-l-4 border-t-4 border-blue-600" />
            <div className="absolute bottom-0 right-0 md:-bottom-8 md:-right-8 w-12 md:w-16 h-12 md:h-16 border-r-4 border-b-4 border-blue-600" />

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-10 md:p-12 shadow-2xl"
              style={{
                clipPath: isMobile
                  ? "none"
                  : "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-blue-600" />
                <span className="text-xs tracking-[0.4em] text-blue-600 font-black uppercase">
                  Start your Engine
                </span>
                <div className="w-12 h-[2px] bg-blue-600" />
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 mb-4 tracking-tighter leading-none">
                HACKX 4.0
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-2xl md:text-3xl font-black text-black tracking-tight">
                  24 HOUR SPRINT
                </div>
                <div className="flex-1 h-[1px] bg-gray-500" />
              </div>

              <p className="text-black text-base md:text-lg leading-relaxed max-w-xl font-semibold mb-10">
                Elite student teams compete in a high-octane 24-hour innovation
                race, pushing technological boundaries at maximum velocity.
              </p>

              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <TelemetryStat label="DRIVERS" value="200+" unit="PARTICIPANTS" />
                <TelemetryStat label="DURATION" value="24H" unit="CONTINUOUS" />
                <TelemetryStat label="PRIZE" value="₹75K" unit="POOL" />
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-gray-600 tracking-wider">
                  P{currentImageIndex + 1}
                </span>
              </div>
            </motion.div>

            {/* Bottom checkered strip */}
            <div className="absolute -bottom-3 left-8 right-8 h-3 flex">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "bg-blue-900"
                      : "bg-white border border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= TYRE ================= */}
      <motion.img
        src={tyre}
        alt="Rolling Tyre"
        style={{
          x: tyreX,
          y: tyreY,
          rotate: tyreRotate,
          scale: tyreScale,
        }}
        className="
          absolute
          left-1/2
          md:left-auto
          md:right-0
          bottom-[-80px]
          md:top-1/2
          -translate-x-1/2
          md:translate-x-0
          md:-translate-y-1/2
          w-[260px] h-[260px]
          md:w-[700px] md:h-[700px]
          lg:w-[900px] lg:h-[900px]
          object-contain
          z-10
          pointer-events-none
        "
      />

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      </div>
    </section>
  );
}

/* ================= TELEMETRY STAT ================= */
function TelemetryStat({ label, value, unit }) {
  return (
    <div className="relative border-l-2 border-blue-600 pl-3 md:pl-4">
      <div className="text-[9px] md:text-[10px] tracking-[0.3em] font-black text-gray-700 mb-1">
        {label}
      </div>
      <div className="text-2xl md:text-4xl font-black text-blue-600 leading-none mb-1">
        {value}
      </div>
      <div className="text-[8px] md:text-[9px] tracking-widest text-gray-700 uppercase font-black">
        {unit}
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-0 top-0 w-[2px] bg-blue-600 origin-top"
      />
    </div>
  );
}