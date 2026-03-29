import React from "react";

const AnimatedAvatar = ({ size = 240 }) => (
  <div className="relative mx-auto select-none" style={{ width: size, height: size }}>

    {/* Slow-rotating dashed ring */}
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ animation: "slowSpin 28s linear infinite" }}
      viewBox="0 0 240 240"
    >
      <circle
        cx="120" cy="120" r="115"
        fill="none"
        stroke="#E8630A"
        strokeWidth="1.5"
        strokeDasharray="6 11"
        opacity="0.4"
      />
    </svg>

    {/* Soft glow behind avatar */}
    <div
      className="absolute rounded-full bg-[#E8630A]/10"
      style={{ inset: 14 }}
    />

    {/* Floating illustrated avatar */}
    <div
      className="absolute"
      style={{ inset: 14, animation: "avatarFloat 5s ease-in-out infinite" }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        <defs>
          <radialGradient id="av-bg" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF4EE" />
            <stop offset="100%" stopColor="#FDDFC8" />
          </radialGradient>
          <clipPath id="av-clip">
            <circle cx="100" cy="100" r="98" />
          </clipPath>
        </defs>

        {/* Background */}
        <circle cx="100" cy="100" r="98" fill="url(#av-bg)" />
        <circle cx="100" cy="100" r="98" fill="none" stroke="#FDDFC8" strokeWidth="2" />

        {/* Shirt */}
        <path
          d="M22 200 C22 164 58 153 100 153 C142 153 178 164 178 200 Z"
          fill="#0F172A"
          clipPath="url(#av-clip)"
        />

        {/* Neck */}
        <rect x="89" y="147" width="22" height="13" rx="7" fill="#C4844A" />

        {/* Head */}
        <ellipse cx="100" cy="107" rx="44" ry="50" fill="#C4844A" />

        {/* Ears */}
        <ellipse cx="57"  cy="107" rx="9"  ry="14" fill="#C4844A" />
        <ellipse cx="143" cy="107" rx="9"  ry="14" fill="#C4844A" />
        <ellipse cx="57.5" cy="107" rx="5" ry="8"  fill="#B0703C" />
        <ellipse cx="142.5" cy="107" rx="5" ry="8" fill="#B0703C" />

        {/* Hair */}
        <path d="M57 88 C59 50 141 50 143 88 C140 63 100 57 60 66 Z" fill="#111111" />
        <ellipse cx="100" cy="61" rx="44" ry="13" fill="#111111" />
        <path d="M57 88 C52 97 50 116 54 130 L61 122 Z" fill="#111111" />
        <path d="M143 88 C148 97 150 116 146 130 L139 122 Z" fill="#111111" />

        {/* Eyebrows */}
        <path d="M78 86 Q88 81 98 84"  stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M102 84 Q112 81 122 86" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Eye whites */}
        <ellipse cx="86"  cy="100" rx="9" ry="9.5" fill="white" />
        <ellipse cx="114" cy="100" rx="9" ry="9.5" fill="white" />
        {/* Pupils */}
        <circle cx="86"  cy="100" r="6" fill="#111111" />
        <circle cx="114" cy="100" r="6" fill="#111111" />
        {/* Shine */}
        <circle cx="88.5"  cy="97.5" r="2" fill="white" />
        <circle cx="116.5" cy="97.5" r="2" fill="white" />

        {/* Nose */}
        <path d="M96 116 Q100 122 104 116" stroke="#A06030" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M84 130 Q100 142 116 130" stroke="#8B4020" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>

    {/* Floating "Available" pill */}
    <div
      className="absolute -bottom-1 -right-2 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E5E2DB] rounded-full shadow-md"
      style={{ animation: "avatarFloat 5s ease-in-out infinite 0.6s" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
      <span className="text-[11px] font-semibold text-[#111111]">Available</span>
    </div>
  </div>
);

export default AnimatedAvatar;
