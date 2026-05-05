import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StringLights from "../components/StringLights";

const categories = [
  {
    id: "ice-cream",
    label: "Ice Cream",
    emoji: "🍦",
    items: [
      { name: "Single Scoop", desc: "Hand-scooped Blue Bell — your choice of flavor", price: "" },
      { name: "Double Scoop", desc: "Two scoops, double the happiness", price: "" },
      { name: "Banana Split", desc: "The classic done right", price: "" },
      { name: "Oreo Dream Sundae", desc: "Oreo crumbles, hot fudge, whipped cream", price: "" },
      { name: "Caramel Pecan Dream", desc: "Rich, creamy, loaded with pecans", price: "" },
      { name: "Golden Oreo Sundae", desc: "A fan favorite — sweet golden Oreos on Blue Bell", price: "" },
      { name: "Strawberry Cheesecake Açaí Bowl", desc: "Cheesecake bits, granola, strawberries, honey drizzle", price: "" },
    ],
  },
  {
    id: "floats",
    label: "Floats & Shakes",
    emoji: "🥤",
    items: [
      { name: "IBC Root Beer Float", desc: "Bottled IBC Root Beer over your choice of ice cream, whipped cream & cherry", price: "" },
      { name: "Mexican Sprite Float", desc: "Bottled Mexican Sprite, ice cream, whipped cream & cherry", price: "" },
      { name: "Dirty Dr Pepper", desc: "A Texas staple — sweet, fizzy, refreshing", price: "" },
      { name: "Strawberry Vanilla Soda", desc: "House-made float, light and refreshing", price: "" },
      { name: "Blue Bell Milkshake", desc: "Thick, creamy, made with real Blue Bell", price: "" },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    emoji: "🍔",
    items: [
      { name: "Patty Melt", desc: "A Pasadena classic — melty, toasty, perfect", price: "" },
      { name: "Single Bacon Cheeseburger", desc: "Crispy bacon, melted cheese, all the fixings", price: "" },
      { name: "Double Cheeseburger", desc: "Two patties, double cheese, maximum burger", price: "" },
      { name: "My Girlfriend's Kinda Hungry Burger", desc: "The big one — you know the vibes", price: "" },
      { name: "Rodeo Burger", desc: "BBQ sauce, onion rings, the works", price: "" },
      { name: "Patty Melt with Chili", desc: "Patty melt topped with homemade chili", price: "" },
      { name: "Chicken Tenders", desc: "Crispy, golden, classic", price: "" },
      { name: "Gyros", desc: "A surprising menu gem worth ordering", price: "" },
    ],
  },
  {
    id: "sweets",
    label: "Sweets & Sides",
    emoji: "🍩",
    items: [
      { name: "Churro Fries — 10 Ways", desc: "10 different toppings and styles — ask your server what's good today", price: "" },
      { name: "Fried Oreos", desc: "Classic, S'mores, Strawberry Banana Nutella — choose your style", price: "" },
      { name: "Funnel Cake", desc: "Fresh, hot, dusted with powdered sugar", price: "" },
      { name: "Beignets", desc: "New Orleans-style, light and airy", price: "" },
      { name: "5pc Homemade Mozzarella Sticks", desc: "\"Some of the best\" — Alexa C., Baton Rouge", price: "" },
      { name: "Sweet Potato Fries", desc: "Crispy, sweet, perfect alongside any burger", price: "" },
      { name: "Chili Cheese Fries", desc: "Smothered and ready", price: "" },
      { name: "Spicy Cheese Curds", desc: "A crowd favorite — can't stop at one", price: "" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("ice-cream");

  return (
    <>
      {/* Header */}
      <section className="bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 checkerboard" />
        <div className="relative z-10 w-full">
          <StringLights bulbs={16} />
        </div>
        <div className="relative z-10 text-center pb-16 px-4">
          <p className="text-[#CC0000] font-bold tracking-widest text-xs uppercase mb-3">Pasadena, TX</p>
          <h1 className="font-pacifico text-5xl text-white mb-3">Our Menu</h1>
          <p className="text-white/50 text-base font-semibold max-w-lg mx-auto">
            Blue Bell scoops · smash burgers · churro fries · and so much more
          </p>
        </div>
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 rounded-sm font-bold text-sm tracking-wide transition-all ${
                  active === cat.id
                    ? "bg-[#CC0000] text-white"
                    : "bg-white text-[#111111] border border-[#111111]/20 hover:border-[#CC0000]"
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Items */}
          <AnimatePresence mode="wait">
            {categories
              .filter((c) => c.id === active)
              .map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-sm p-5 border border-[#111111]/10 hover:border-[#CC0000]/40 transition-all"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-[#111111] text-sm uppercase tracking-wide">{item.name}</h3>
                          {item.price && (
                            <span className="text-[#CC0000] font-bold whitespace-nowrap">{item.price}</span>
                          )}
                        </div>
                        <p className="text-[#555555] text-sm mt-1 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          <p className="text-center text-[#555555]/50 text-xs mt-10 uppercase tracking-widest">
            Menu items may vary · Come in and check the wall — it's part of the experience
          </p>
        </div>
      </section>
    </>
  );
}
