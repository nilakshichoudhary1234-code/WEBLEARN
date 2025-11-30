import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
      <Terminal className="h-6 w-6" />
      <span className="font-headline">CodeClash Quizzes</span>
    </Link>
  );
}
