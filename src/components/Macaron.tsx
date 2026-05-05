export default function Macaron({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 40 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom shell */}
      <ellipse cx="20" cy="22" rx="16" ry="7" fill="#f9a8c9" />
      {/* Bottom shell edge bumps */}
      <ellipse cx="20" cy="22" rx="16" ry="7" fill="none" stroke="#f472b6" strokeWidth="0.5" />
      {/* Filling */}
      <rect x="5" y="14" width="30" height="5" rx="2" fill="#fde68a" />
      {/* Top shell */}
      <ellipse cx="20" cy="13" rx="16" ry="7" fill="#f9a8c9" />
      {/* Top shell highlight */}
      <ellipse cx="14" cy="10" rx="5" ry="2.5" fill="rgba(255,255,255,0.35)" />
      {/* Tiny dots on top shell for texture */}
      <circle cx="22" cy="12" r="0.8" fill="#f472b6" opacity="0.5" />
      <circle cx="18" cy="14" r="0.6" fill="#f472b6" opacity="0.4" />
      <circle cx="25" cy="14" r="0.6" fill="#f472b6" opacity="0.4" />
    </svg>
  );
}
