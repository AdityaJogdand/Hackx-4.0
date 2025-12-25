import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f19] text-white overflow-hidden">
      
      {/* TOP BORDER ACCENT */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-black tracking-tight">
            Hack<span className="text-orange-500">X</span>
          </h2>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
            A 24-hour hackathon where innovation meets execution.
            Build fast. Think bold. Ship smarter.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["About", "Tracks", "Schedule", "Sponsors", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="text-white/70 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Get in Touch
          </h3>
          <p className="text-sm text-white/70 mb-2">
            NMIMS Navi Mumbai
          </p>
          <p className="text-sm text-white/70 mb-2">
            hackx@nmims.edu
          </p>
          <p className="text-sm text-white/70">
            +91 85912 82986
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <span>© {new Date().getFullYear()} HackX. All rights reserved.</span>
          <span className="tracking-wide">
            Built with ⚡ by Team HackX
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
