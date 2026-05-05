import { motion } from "framer-motion";
import StringLights from "../components/StringLights";

const vibes = [
  { emoji: "🕹️", label: "Arcade machines" },
  { emoji: "🪑", label: "8 cozy booths" },
  { emoji: "☀️", label: "Outdoor seating" },
  { emoji: "🎮", label: "Connect 4 while you wait" },
  { emoji: "📋", label: "Giant hand-written menu wall" },
  { emoji: "👨‍👩‍👧", label: "Great for groups & kids" },
];

export default function About() {
  return (
    <>
      <section className="bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        <div className="relative z-10 w-full">
          <StringLights bulbs={16} />
        </div>
        <div className="relative z-10 text-center pb-16 px-4">
          <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-3">Pasadena, TX</p>
          <h1 className="font-pacifico text-5xl text-white mb-3">Our Story</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            A local gem on Strawberry Rd — where the ice cream is real, the burgers are serious, and the vibes are always good.
          </p>
        </div>
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">Who We Are</p>
              <h2 className="font-pacifico text-4xl text-[#111111] mb-4">Your Neighborhood Spot</h2>
              <p className="text-[#555555] leading-relaxed text-lg">
                The Neighborhood Scoop started simple — hand-scooped Blue Bell ice cream,
                made-to-order burgers, and a whole lot of heart. We're a small diner with
                big flavor, right here in Pasadena on Strawberry Rd.
              </p>
              <p className="text-[#555555] leading-relaxed text-lg mt-4">
                People drive from across Houston to get here. First-timers off the plane
                find us on Yelp and come back before their trip is over. We're not fast food —
                we're the real thing, made fresh, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-sm p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 checkerboard" />
              <div className="relative z-10">
                <p className="font-pacifico text-6xl text-white mb-1">4.4</p>
                <p className="text-[#FFB300] text-2xl mb-1">★★★★★</p>
                <p className="text-white/60 font-bold text-base">208 Yelp Reviews</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/50 italic text-sm leading-relaxed">
                    "You can tell it's a local hot spot and its reputation speaks for itself."
                  </p>
                  <p className="text-[#CC0000] font-bold mt-2 text-sm">— Courtney C., Yelp Elite</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vibe grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase text-center mb-2">Inside</p>
            <h2 className="font-pacifico text-3xl text-[#111111] text-center mb-8">The Vibe</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {vibes.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-sm p-5 text-center border border-[#111111]/10 hover:border-[#CC0000]/40 transition-all"
                >
                  <div className="text-4xl mb-2">{v.emoji}</div>
                  <p className="font-bold text-[#111111] text-xs uppercase tracking-wide">{v.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
