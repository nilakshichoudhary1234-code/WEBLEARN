import Link from 'next/link';

const CustomLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g style={{ filter: 'url(#glow)' }}>
      <path d="M10 15.5l-3-3 3-3" stroke="url(#grad1)" />
      <path d="M14 15.5l3-3-3-3" stroke="url(#grad1)" />
      <path
        d="M13 6.5l-2 11"
        stroke="hsl(var(--secondary))"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
      />
    </g>
    <path
      d="M12 18a6 6 0 0 0-6-6"
      stroke="hsl(var(--primary) / 0.5)"
      strokeWidth="1"
      strokeDasharray="2 2"
    />
    <path
      d="M12 6a6 6 0 0 1 6 6"
      stroke="hsl(var(--secondary) / 0.5)"
      strokeWidth="1"
      strokeDasharray="2 2"
    />
  </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <CustomLogoIcon className="h-full w-full text-primary/80 transition-all duration-300 group-hover:scale-110" />
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Web Dev Quiz
      </span>
    </Link>
  );
}
