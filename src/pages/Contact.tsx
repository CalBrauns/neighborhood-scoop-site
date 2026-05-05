import { motion } from "framer-motion";
import StringLights from "../components/StringLights";

const hours = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday", time: "11:00 AM – 11:00 PM" },
  { day: "Sunday", time: "11:00 AM – 10:00 PM" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Contact() {
  return (
    <>
      <section className="bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        <div className="relative z-10 w-full">
          <StringLights bulbs={16} />
        </div>
        <div className="relative z-10 text-center pb-16 px-4">
          <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-3">Pasadena, TX</p>
          <h1 className="font-pacifico text-5xl text-white mb-3">Find Us</h1>
          <p className="text-white/50 text-base font-semibold">
            We're right here in Pasadena — come see us!
          </p>
        </div>
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">Location</p>
            <h2 className="font-pacifico text-3xl text-[#111111] mb-6">Come Hungry</h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-bold text-[#111111] text-sm uppercase tracking-wide">Address</p>
                  <p className="text-[#555555] mt-1">2106 Strawberry Rd<br />Pasadena, TX 77502</p>
                  <a
                    href="https://maps.google.com/?q=2106+Strawberry+Rd+Pasadena+TX+77502"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#CC0000] font-bold text-sm hover:underline mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-bold text-[#111111] text-sm uppercase tracking-wide">Phone</p>
                  <a href="tel:8779583286" className="text-[#555555] hover:text-[#CC0000] transition-colors mt-1 block">
                    (877) 958-3286
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-xl">🛵</span>
                <div>
                  <p className="font-bold text-[#111111] text-sm uppercase tracking-wide">Options</p>
                  <p className="text-[#555555] text-sm mt-1">Dine in · Take out · Delivery · Reservations · Wheelchair accessible</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden border-2 border-[#111111]/10">
              <iframe
                title="The Neighborhood Scoop location"
                src="https://maps.google.com/maps?q=2106+Strawberry+Rd+Pasadena+TX+77502&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-2">Schedule</p>
            <h2 className="font-pacifico text-3xl text-[#111111] mb-6">Hours</h2>
            <div className="border border-[#111111]/10 overflow-hidden">
              {hours.map((h, i) => {
                const isToday = h.day === today;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between px-6 py-3 ${
                      i !== hours.length - 1 ? "border-b border-[#111111]/10" : ""
                    } ${isToday ? "bg-[#CC0000] text-white" : "text-[#111111]"}`}
                  >
                    <span className={`font-bold text-sm ${isToday ? "text-white" : ""}`}>
                      {h.day} {isToday && "← Today"}
                    </span>
                    <span className={`text-sm ${isToday ? "text-white/90" : "text-[#555555]"}`}>{h.time}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-[#111111] p-6 relative overflow-hidden">
              <div className="absolute inset-0 checkerboard" />
              <div className="relative z-10">
                <p className="font-pacifico text-xl text-white mb-2">Not fast food — fresh food.</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  We make everything to order. There's a sign on the wall about it and we mean it.
                  Come ready to sit down, maybe play some Connect 4, and enjoy the wait.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
