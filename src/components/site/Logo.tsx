import { Link } from "@tanstack/react-router";

export function LogoIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <div className={`relative ${className} shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1`}>
      {/* Ambient Brand Glow on hover */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-brand opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-90" />

      {/* Modern High-End Bespoke SVG Monogram */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full drop-shadow-md select-none"
      >
        <defs>
          {/* Main Brand Gradient matching #2563EB -> #7C3AED -> #06B6D4 */}
          <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Glyph High-Contrast White Gradient */}
          <linearGradient id="glyphWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          {/* Subtle Drop Shadow for Glyphs */}
          <filter id="glyphShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Squircle Badge Container with Brand Gradient */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="12"
          fill="url(#brandLogoGrad)"
        />

        {/* Upper Glass Refraction Sheen */}
        <path
          d="M 2.5 14 C 2.5 7.6 7.6 2.5 14 2.5 H 30 C 36.4 2.5 41.5 7.6 41.5 14 C 30 18.5 14 18.5 2.5 14 Z"
          fill="#FFFFFF"
          fillOpacity="0.22"
        />

        {/* Crisp Micro-Border */}
        <rect
          x="2.5"
          y="2.5"
          width="39"
          height="39"
          rx="11.5"
          stroke="#FFFFFF"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Interlocking 'ER' Developer & Automation Monogram */}
        <g filter="url(#glyphShadow)">
          {/* Main Backbone and Outer E/R Arms */}
          <path
            d="M 23.5 32.5 H 13.5 V 11.5 H 22.5"
            stroke="url(#glyphWhite)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* R Loop & E Middle Bar - Interconnected Ribbon */}
          <path
            d="M 13.5 22 H 22.5 C 27.5 22 27.5 11.5 22.5 11.5"
            stroke="url(#glyphWhite)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* R Athletic Forward Kick / Arrow Trajectory */}
          <path
            d="M 21 22 L 29.5 32.5"
            stroke="url(#glyphWhite)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Cyan Automation Trigger / Spark Pulse Node */}
          <circle cx="31.5" cy="11.5" r="2.2" fill="#22D3EE" />
          <circle cx="31.5" cy="11.5" r="1.1" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

export function Logo({
  showSubtitle = false,
  className = "",
}: {
  showSubtitle?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <LogoIcon className="h-10.5 w-10.5 sm:h-11 sm:w-11" />
      <div className="flex flex-col -space-y-0.5">
        <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-foreground">
          Emran <span className="text-gradient">Raj</span>
        </span>
        {showSubtitle ? (
          <span className="text-[10px] font-mono font-medium tracking-widest text-muted-foreground uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            Web & Automation
          </span>
        ) : null}
      </div>
    </Link>
  );
}
