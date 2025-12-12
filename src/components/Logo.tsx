import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors">
        <div className="flex flex-col items-center gap-1">
          <div className="h-1.5 w-4 rounded-full bg-gradient-to-r from-primary to-secondary transition-all"></div>
          <div className="h-1.5 w-3 rounded-full bg-gradient-to-r from-primary to-secondary transition-all"></div>
          <div className="h-1.5 w-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all"></div>
        </div>
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Debug Your Brain
      </span>
    </Link>
  );
}
