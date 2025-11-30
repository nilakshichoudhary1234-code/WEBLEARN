import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-purple-100 to-accent dark:from-background dark:via-purple-950/20 dark:to-purple-950/10">
      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/auth">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth">Sign Up</Link>
          </Button>
        </nav>
      </header>

      <main className="flex flex-1 items-center">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Web Dev Quiz Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              Learn. Practice. Excel. Become a Web Developer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/auth">Login / Sign Up</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/modules">Start Learning Modules</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeClash Quizzes. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
