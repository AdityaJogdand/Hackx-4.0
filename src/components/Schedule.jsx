import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, Flag, Zap, Coffee, ShieldCheck, ChevronRight } from "lucide-react";
import { useRef } from "react";

const scheduleData = [
  { time: "Feb 28, 8:30 AM", event: "Reporting", details: "Initial scrutineering and paddock entry.", strategy: "Full tank, hard tires.", status: "CHECK_IN", icon: <MapPin size={24} /> },
  { time: "Feb 28, 9:00 AM", event: "Registrations begins", details: "Driver registration and livery collection.", strategy: "Aero setup optimization.", status: "OFFICIALS", icon: <ShieldCheck size={24} /> },
  { time: "Feb 28, 10:30 AM", event: "Opening Ceremony", details: "Formation lap before green flag.", strategy: "System diagnostics complete.", status: "FORMATION", icon: <Zap size={24} /> },
  { time: "Feb 28, 12:00 PM", event: "Hackathon starts", details: "Green flag! The 24-hour race begins.", strategy: "ERS enabled. Maximum energy deployment.", status: "RACING", icon: <Flag size={24} /> },
  { time: "Feb 28, 5:00 PM", event: "High Tea", details: "Afternoon refreshment break.", strategy: "Fuel and tire management.", status: "REFRESH", icon: <Coffee size={24} /> },
  { time: "Feb 28, 7:00 PM", event: "Mentorship round I", details: "Mid-race pit stop for strategy tuning.", strategy: "Data telemetry analysis.", status: "PIT_STOP", icon: <Zap size={24} /> },
  { time: "Feb 28, 8:00 PM", event: "Dinner", details: "Evening fuel stop.", strategy: "Energy replenishment.", status: "DINNER", icon: <Coffee size={24} /> },
  { time: "Feb 29, 8:30 AM", event: "Breakfast", details: "Morning energy boost.", strategy: "Fresh tires, new strategy.", status: "BREAKFAST", icon: <Coffee size={24} /> },
  { time: "Feb 29, 9:00 AM", event: "Mentorship round II", details: "Final sector adjustment.", strategy: "Push for the fastest lap.", status: "FINAL_STINT", icon: <Zap size={24} /> },
  { time: "Feb 29, 12:00 PM", event: "Hackathon ends", details: "Final lap completed. Submissions closed.", strategy: "Cool down lap.", status: "FINISH", icon: <Flag size={24} /> },
  { time: "Feb 29, 12:15 PM", event: "Lunch", details: "Post-race refreshment.", strategy: "Recovery mode.", status: "LUNCH", icon: <Coffee size={24} /> },
  { time: "Feb 29, 1:00 PM", event: "Evaluation Begins", details: "Technical inspection and judging.", strategy: "Stewards review.", status: "JUDGING", icon: <ShieldCheck size={24} /> },
  { time: "Feb 29, 4:00 PM", event: "Results & Closing ceremony", details: "The checkered flag. Podium celebration.", strategy: "Victory lap.", status: "PODIUM", icon: <Flag size={24} /> },
];

export default function Schedule() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="schedule" className="bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-teal-600" />
            <span className="text-teal-600 font-black uppercase tracking-[0.3em] text-xs">Technical Itinerary</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-black uppercase leading-none">
            Circuit <span className="text-teal-600">Timeline</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Technical Line (The Track) - Updated to Teal */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-100 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-emerald-400 to-teal-600 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
            />
          </div>

          <div className="space-y-32 relative">
            {scheduleData.map((item, i) => (
              <ScheduleItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex items-center justify-between md:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Time Badge */}
      <div className={`hidden md:block w-full text-zinc-300 font-bold italic text-3xl md:text-4xl tracking-tight ${isEven ? 'text-right' : 'text-left'}`}>
        {item.time}
      </div>

      {/* Center Icon Node - Updated to Teal/Black */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          whileInView={{ scale: [0, 1.2, 1], rotate: [0, -10, 0] }}
          className="w-10 h-10 md:w-14 md:h-14 bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 rounded-sm transform skew-x-[-10deg] shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className="w-full ml-16 md:ml-0">
        <div className="group bg-zinc-50 hover:bg-zinc-950 transition-all duration-500 p-6 md:p-8 border-l-4 border-teal-600 relative overflow-hidden shadow-sm hover:shadow-2xl">
          {/* Technical Data Overlay */}
          <div className="absolute top-2 right-4 font-mono text-[9px] text-zinc-300 group-hover:text-emerald-900 transition-colors uppercase tracking-widest">
            {item.status} // 0x{index}A
          </div>

          <div className="mb-4">
            <span className="md:hidden block text-teal-600 font-black italic text-2xl mb-2">{item.time}</span>
            <h3 className="text-2xl font-black text-black group-hover:text-white uppercase italic tracking-tight transition-colors">
              {item.event}
            </h3>
          </div>

          <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed mb-6 transition-colors">
            {item.details}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 group-hover:border-zinc-800 transition-colors">
            <div className="p-2 bg-emerald-50 group-hover:bg-emerald-900/30 text-emerald-600 rounded">
              <ChevronRight size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Energy Strategy</p>
              <p className="text-xs font-bold text-black group-hover:text-emerald-400 transition-colors uppercase italic">{item.strategy}</p>
            </div>
          </div>

          {/* Decorative Teal Corner */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-600/5 group-hover:bg-emerald-500/10 transform rotate-45 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}