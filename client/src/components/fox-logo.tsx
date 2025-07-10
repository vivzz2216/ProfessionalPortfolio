export default function FoxLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fox Head */}
      <path
        d="M50 25 L30 15 L25 35 L35 45 L25 55 L30 75 L50 85 L70 75 L75 55 L65 45 L75 35 L70 15 L50 25 Z"
        fill="url(#foxGradient)"
        stroke="#fff"
        strokeWidth="1"
      />
      
      {/* Fox Ears */}
      <path
        d="M35 30 L25 15 L30 25 L35 30 Z"
        fill="url(#foxGradient)"
        stroke="#fff"
        strokeWidth="1"
      />
      <path
        d="M65 30 L75 15 L70 25 L65 30 Z"
        fill="url(#foxGradient)"
        stroke="#fff"
        strokeWidth="1"
      />
      
      {/* Fox Eyes */}
      <circle cx="42" cy="40" r="3" fill="#fff" />
      <circle cx="58" cy="40" r="3" fill="#fff" />
      <circle cx="42" cy="40" r="1.5" fill="#000" />
      <circle cx="58" cy="40" r="1.5" fill="#000" />
      
      {/* Fox Nose */}
      <path
        d="M50 48 L47 52 L53 52 L50 48 Z"
        fill="#000"
      />
      
      {/* Fox Mouth */}
      <path
        d="M50 52 Q45 58 40 55 Q50 62 60 55 Q55 58 50 52"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="foxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  );
}