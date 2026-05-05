import { Link } from "react-router-dom";
import Macaron from "./Macaron";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Macaron size={28} />
            <p className="font-pacifico text-2xl text-white">The Neighborhood Scoop</p>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            Blue Bell scoops, smash burgers, churro fries & more — right here
            in Pasadena, TX.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#CC0000] tracking-widest text-xs uppercase mb-3">Hours</p>
          <ul className="text-sm text-white/70 space-y-1">
            <li className="flex justify-between"><span>Mon – Thu</span><span>11 AM – 10 PM</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>11 AM – 11 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>11 AM – 10 PM</span></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-[#CC0000] tracking-widest text-xs uppercase mb-3">Find Us</p>
          <p className="text-sm text-white/70 leading-relaxed">
            2106 Strawberry Rd<br />
            Pasadena, TX 77502<br />
            <a href="tel:8779583286" className="text-[#CC0000] hover:underline mt-1 block">
              (877) 958-3286
            </a>
          </p>
          <div className="flex gap-3 mt-3">
            <Link to="/menu" className="text-sm text-white/50 hover:text-white transition-colors">Menu</Link>
            <Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} The Neighborhood Scoop · Pasadena, TX
      </div>
    </footer>
  );
}
