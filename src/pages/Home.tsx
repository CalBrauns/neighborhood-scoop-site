import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StringLights from "../components/StringLights";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlights = [
  { emoji: "🍦", name: "Blue Bell Scoops", desc: "Hand-scooped Blue Bell — the only ice cream worth talking about." },
  { emoji: "🍔", name: "Smash Burgers", desc: "Patty melts, bacon cheeseburgers & the legendary 'My Girlfriend's Kinda Hungry' burger." },
  { emoji: "🍟", name: "Churro Fries", desc: "10 different ways. Yes, 10. Come hungry." },
  { emoji: "🍩", name: "Fried Oreos", desc: "Strawberry Banana Nutella. S'mores. Need we say more?" },
  { emoji: "🥤", name: "Frosted Floats", desc: "IBC Root Beer, Mexican Sprite & Dirty Dr Pepper — ice cream included." },
  { emoji: "🧇", name: "Funnel Cake & Beignets", desc: "Fresh, hot, and dusted just right." },
];

const reviews = [
  {
    name: "Courtney C.",
    stars: 5,
    text: "Stopped here for our first meal off the plane and it was something I thought about my entire time in Houston.",
    location: "District Heights, MD",
  },
  {
    name: "Janaya M.",
    stars: 5,
    text: "The menu is huge and might take awhile to decide. Girls were friendly. The golden Oreo sundae — oh so good!!",
    location: "Yuma, AZ",
  },
  {
    name: "April K.",
    stars: 5,
    text: "Amazing burger and fries! The bun was perfectly toasted, came out hot with the cheese already melting.",
    location: "Spring, TX",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        {/* String lights hang from top */}
        <div className="relative z-10 w-full">
          <StringLights bulbs={16} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-24 md:pb-36 text-center">
          {/* Neon sign */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="font-bebas neon-text text-5xl md:text-8xl leading-none">
              The Neighborhood Scoop
            </p>
            <p className="font-bebas text-white/30 text-base md:text-xl tracking-widest mt-1">
              PASADENA, TX
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-8"
          >
            Blue Bell ice cream · smash burgers · churro fries & everything in between.
            Your spot on Strawberry Rd.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="bg-[#CC0000] text-white font-bold px-8 py-4 rounded-sm text-lg hover:bg-[#a80000] transition-all shadow-lg"
            >
              See Our Menu
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white/30 font-bold px-8 py-4 rounded-sm text-lg hover:border-white/70 transition-all"
            >
              Find Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center items-center gap-2"
          >
            <span className="text-[#FFB300]">★★★★★</span>
            <span className="text-white/40 text-sm tracking-wide">4.4 · 208 Yelp reviews</span>
          </motion.div>
        </div>

        {/* Wave to white */}
        <div className="relative">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">What We're Serving</p>
            <h2 className="font-pacifico text-4xl md:text-5xl text-[#111111]">The Good Stuff</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-sm p-6 border border-[#111111]/10 hover:border-[#CC0000]/50 transition-all shadow-sm"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-[#111111] text-base mb-1 uppercase tracking-wide">{item.name}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-[#CC0000] text-white font-bold px-8 py-3 rounded-sm hover:bg-[#a80000] transition-all"
            >
              Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-[#111111] py-16 relative overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">Our Story</p>
            <h2 className="font-pacifico text-4xl text-white mb-4">A Real Neighborhood Joint</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Small diner, giant menu, and a staff that actually remembers your order.
              We've got 8 booths, outdoor seating, arcade machines in the corner,
              and a hand-written menu wall that'll take you a minute to read through —
              but it's worth it.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block bg-[#CC0000] text-white font-bold px-6 py-3 rounded-sm hover:bg-[#a80000] transition-all"
            >
              More About Us →
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-3"
          >
            {["🍦", "🍔", "🕹️", "🍩"].map((e, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center text-6xl rounded-sm"
              >
                {e}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">What People Say</p>
            <h2 className="font-pacifico text-4xl md:text-5xl text-[#111111]">Yelp Loves Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm p-6 border border-[#111111]/10 shadow-sm"
              >
                <div className="text-[#FFB300] text-lg mb-3">{"★".repeat(r.stars)}</div>
                <p className="text-[#111111] leading-relaxed mb-4 italic text-sm">"{r.text}"</p>
                <div>
                  <p className="font-bold text-[#CC0000] text-sm">{r.name}</p>
                  <p className="text-xs text-[#555555]">{r.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours CTA */}
      <section className="bg-[#111111] py-16 relative overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-3">We're Open</p>
            <h2 className="font-pacifico text-4xl text-white mb-6">Come On In</h2>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto text-white/50 text-sm mb-8">
              <span className="text-right pr-3">Mon – Thu</span><span className="text-left">11 AM – 10 PM</span>
              <span className="text-right pr-3">Fri – Sat</span><span className="text-left">11 AM – 11 PM</span>
              <span className="text-right pr-3">Sunday</span><span className="text-left">11 AM – 10 PM</span>
            </div>
            <p className="text-white/30 mb-6 text-sm">2106 Strawberry Rd, Pasadena, TX 77502</p>
            <Link
              to="/contact"
              className="inline-block bg-[#CC0000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a80000] transition-all"
            >
              Get Directions →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
