import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <BrainCircuit className="h-8 w-8 text-primary/80 transition-colors group-hover:text-primary" />
        <span 
          className="absolute text-secondary font-bold text-lg transition-transform group-hover:scale-110" 
          style={{ filter: 'drop-shadow(0 0 3px hsl(var(--secondary)))' }}
        >?</span>
      </div>
      <span className="text-lg font-bold font-headline text-foreground">
        Debug Your Brain
      </span>
    </Link>
  );
}
