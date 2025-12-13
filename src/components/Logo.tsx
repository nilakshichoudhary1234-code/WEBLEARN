import Link from 'next/link';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeadline = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const CustomLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
    </defs>
    <circle
      cx="20"
      cy="20"
      r="18"
      fill="none"
      stroke="url(#logoGrad)"
      strokeWidth="2"
    />
    <text
      x="50%"
      y="65%"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontSize="18"
      fontWeight="700"
      fill="url(#logoGrad)"
    >
      W
    </text>
  </svg>
);

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <CustomLogoIcon className="h-full w-full text-primary/80 transition-all duration-300 group-hover:scale-110" />
      </div>
      <span
        className={cn(
          'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
          fontHeadline.variable
        )}
        style={{ letterSpacing: '-0.03em' }}
      >
        WEBLEARN
      </span>
    </Link>
  );
}
