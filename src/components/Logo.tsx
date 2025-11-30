import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg font-bold">
      <BrainCircuit className="h-6 w-6 text-primary" />
      <span className="font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent-foreground">Debug Your Brain</span>
    </Link>
  );
}
