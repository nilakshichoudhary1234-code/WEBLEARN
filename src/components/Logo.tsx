import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/20 border border-secondary/50 group-hover:bg-secondary/30 transition-colors">
        <div className="flex flex-col gap-1">
          <div className="h-1 w-4 rounded-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
          <div className="h-1 w-4 rounded-full bg-secondary/80 group-hover:bg-secondary transition-colors"></div>
        </div>
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Web Dev Quiz
      </span>
    </Link>
  );
}
