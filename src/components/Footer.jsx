import React from "react";
import { Instagram, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="relative bg-[#0b0f19] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* MAIN CONTENT - CENTER ALIGNED */}
        <div className="space-y-6 mb-6 text-center">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">
              Hack<span className="text-red-500">X</span>
            </h2>
            <p className="text-sm text-white/60">
              24-hour innovation hackathon
            </p>
          </div>

          {/* ADDRESS WITH MAP */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs uppercase tracking-wider text-white/50 mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Plot No. 2, near Pethpada Metro Station, Pethapada, Sector 33, Kharghar, Navi Mumbai, Maharashtra 410210
            </p>
            <div className="rounded-lg overflow-hidden border border-white/10 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8941279594384!2d73.0751631!3d19.0646147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1fa2d330e2b%3A0xfb8df77eb24acba7!2sSVKM's%20NMIMS!5e0!3m2!1sen!2sin!4v1735557000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HackX Location"
              ></iframe>
            </div>
          </div>

          {/* CONTACTS ROW */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/50 mb-3">Contact</h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/70">
              <div>
                <p className="text-white font-medium">Aditya Jogdand</p>
                <a href="tel:+918591282986" className="hover:text-red-500 transition-colors">
                  +91 85912 82986
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Brammhi Shinde</p>
                <a href="tel:+918369135917" className="hover:text-red-500 transition-colors">
                  +91 83691 35917
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Vamshi Shetty</p>
                <a href="tel:+917400390628" className="hover:text-red-500 transition-colors">
                  +91 74003 90628
                </a>
              </div>
            </div>
          </div>

          {/* COMMUNITY ROW */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/50 mb-3">Community</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://www.instagram.com/gdg.nmims"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>GDGOC NMIMS</span>
              </a>
              <a
                href="https://www.instagram.com/ieee.nmimsnavimumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>IEEE NMIMS</span>
              </a>
              <a
                href="https://www.instagram.com/developers.club.itm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>DSC ITM</span>
              </a>
              <a
                href="https://www.linkedin.com/company/hackx-nmims-navi-mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>HackX LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;