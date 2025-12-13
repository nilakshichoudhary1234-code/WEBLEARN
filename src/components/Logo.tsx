import Link from 'next/link';

const CustomLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 14V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3L21 10"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g style={{ filter: 'drop-shadow(0 0 4px hsl(var(--secondary)/0.8))' }}>
      <path
        d="M15.5 13.5L18.5 10.5L15.5 7.5"
        stroke="hsl(var(--secondary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <CustomLogoIcon className="h-full w-full text-primary/80 transition-colors group-hover:text-primary" />
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Debug Your Brain
      </span>
    </Link>
  );
}
