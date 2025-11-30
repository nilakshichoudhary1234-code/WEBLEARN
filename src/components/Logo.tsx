import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00FFFF', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M8.5 7C5.5 8.5 5.5 15.5 8.5 17M13 5.5C13 5.5 13.0672 5.06023 13.5 5C13.9328 4.93977 14.5 5.5 14.5 5.5C15.5 6 15.5 7 15.5 7C15.5 8.5 14 9.5 13.5 10C13 10.5 12 11 12 12.5C12 13.5 13 14 13 14.5M13 18.5V19"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logo-glow)"
        />
      </svg>

      <span className="text-lg font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
        Debug Your Brain
      </span>
    </Link>
  );
}
