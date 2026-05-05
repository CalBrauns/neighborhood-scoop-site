export default function StringLights({ bulbs = 14 }: { bulbs?: number }) {
  const w = 1400;
  const step = w / bulbs;

  const wirePath = Array.from({ length: bulbs - 1 }, (_, i) => {
    const x1 = (i + 0.5) * step;
    const x2 = (i + 1.5) * step;
    const cx = (x1 + x2) / 2;
    return `M${x1},18 Q${cx},36 ${x2},18`;
  }).join(" ");

  return (
    <div className="w-full pointer-events-none select-none">
      <svg
        width="100%"
        viewBox={`0 0 ${w} 80`}
        style={{ display: "block", height: "auto" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bulbG" cx="38%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="50%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF8F00" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal top wire */}
        <line x1="0" y1="6" x2={w} y2="6" stroke="#333" strokeWidth="2.5" />

        {/* Sag wires */}
        <path d={wirePath} stroke="#444" strokeWidth="1.5" fill="none" />

        {/* Bulbs */}
        {Array.from({ length: bulbs }, (_, i) => {
          const x = (i + 0.5) * step;
          return (
            <g key={i} transform={`translate(${x}, 18)`} filter="url(#glow)">
              <rect x="-5" y="0" width="10" height="7" rx="2" fill="#555" />
              <line x1="0" y1="7" x2="0" y2="13" stroke="#555" strokeWidth="2" />
              <ellipse cx="0" cy="25" rx="11" ry="14" fill="url(#bulbG)" opacity="0.92" />
              <ellipse cx="0" cy="37" rx="4" ry="3" fill="#FFB300" opacity="0.7" />
              <ellipse cx="-4" cy="19" rx="4" ry="5" fill="rgba(255,255,255,0.45)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
