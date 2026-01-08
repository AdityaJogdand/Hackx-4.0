import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/* ===== ASSETS ===== */
import helmet from "../assets/helmet.png";

import codecrafter from "../assets/codecrafter.png";
import cosmeon from "../assets/cosmeon.png";
import xyz from "../assets/xyz.png";

export default function Pastsponsor() {
  const containerRef = useRef(null);

  /* ================= LENIS SMOOTH SCROLL ================= */
  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    initLenis();
    return () => lenis?.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  /* ================= TRANSFORMS ================= */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#ffffff", "#0b0b0c"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#000000", "#ffffff"]
  );

  const helmetY = useTransform(scrollYProgress, [0, 1], [400, -300]);
  const helmetScale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1.2]);

  return (
    <motion.section
      id="pastsponsor"
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      className="relative min-h-screen py-32 overflow-hidden selection:bg-orange-500/30"
    >
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <header className="mb-32 text-center md:text-left">
          <motion.div style={{ color: textColor }}>
            <p className="text-orange-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">
              Our Partners
            </p>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9]">
              Our <br />
              <span className="text-orange-500 italic">Sponsors</span>
            </h2>
          </motion.div>
        </header>

        {/* ================= TIERS ================= */}
        <div className="flex flex-col gap-28">
          {/* POWERED BY */}
          <div className="flex flex-col items-center">
            <motion.p
              style={{ color: textColor }}
              className="text-[11px] uppercase tracking-[0.4em] font-black mb-10 text-orange-500"
            >
              Powered By
            </motion.p>
            <TierItem src={codecrafter} size="h-20 md:h-28" delay={0.1} />
          </div>

          {/* HIRING PARTNER (BIGGER) */}
          <div className="flex flex-col items-center">
            <motion.p
              style={{ color: textColor }}
              className="text-[11px] uppercase tracking-[0.4em] font-black mb-10 text-orange-500"
            >
              Hiring Partner
            </motion.p>
            <TierItem src={cosmeon} size="h-40 md:h-44" delay={0.2} />
          </div>

          {/* DOMAIN PARTNER */}
          <div className="flex flex-col items-center">
            <motion.p
              style={{ color: textColor }}
              className="text-[11px] uppercase tracking-[0.4em] font-black mb-10 text-orange-500"
            >
              Domain Partner
            </motion.p>
            <TierItem src={xyz} size="h-20 md:h-28" delay={0.3} />
          </div>
        </div>
      </div>

      {/* ================= BACKGROUND HELMET ================= */}
      <motion.div
        style={{ y: helmetY, scale: helmetScale, x: "-50%" }}
        className="hidden md:block absolute bottom-[-20%] left-1/2 pointer-events-none -z-0 opacity-20"
      >
        <img
          src={helmet}
          alt=""
          className="w-[1200px] object-contain"
        />
      </motion.div>
    </motion.section>
  );
}

/* ================= LOGO ITEM ================= */

function TierItem({ src, size, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.08 }}
      className={`relative flex items-center justify-center ${size}`}
    >
      <img
        src={src}
        alt="Sponsor Logo"
        className="h-full w-auto object-contain"
      />

      {/* subtle glow */}
      <div className="absolute -inset-6 bg-orange-500/5 rounded-full blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
