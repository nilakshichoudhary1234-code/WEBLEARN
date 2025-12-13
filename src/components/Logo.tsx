import Link from 'next/link';
import { HelpCircle, Code } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <Code className="h-8 w-8 text-primary/80 transition-colors group-hover:text-primary" />
        <HelpCircle className="absolute h-5 w-5 text-secondary transition-transform group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 3px hsl(var(--secondary)))' }} />
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Web Dev Quiz
      </span>
    </Link>
  );
}
