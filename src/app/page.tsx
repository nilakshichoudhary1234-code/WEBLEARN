import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { CodeXml, Paintbrush, ArrowRight } from 'lucide-react';
import { JsIcon } from '@/components/JsIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const modules = [
  {
    name: 'HTML',
    icon: CodeXml,
    href: '/modules/html',
  },
  {
    name: 'CSS',
    icon: Paintbrush,
    href: '/modules/css',
  },
  {
    name: 'JavaScript',
    icon: JsIcon,
    href: '/modules/javascript',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="glowing-underline">
            Home
          </Link>
          <Link href="/auth" className="glowing-underline text-muted-foreground hover:text-foreground">
            Login
          </Link>
          <Link href="/modules" className="glowing-underline text-muted-foreground hover:text-foreground">
            Modules
          </Link>
          <Link href="/quiz/html/introduction-to-html" className="glowing-underline text-muted-foreground hover:text-foreground">
            Quiz
          </Link>
          <Link href="/leaderboard" className="glowing-underline text-muted-foreground hover:text-foreground">
            Leaderboard
          </Link>
        </nav>
        <Button variant="ghost" asChild>
          <Link href="/auth">Get Started</Link>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-background"
        >
          <div 
            className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[hsl(var(--primary)/0.5)] opacity-50 blur-[80px]"
          ></div>
        </div>

        <div className="relative z-10">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Build. Learn. Deploy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            The ultimate quiz platform to test and sharpen your web development skills.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.6)] hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-shadow">
              <Link href="/modules">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="relative z-10 mt-24 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.name} className="group relative overflow-hidden rounded-xl border-border/30 bg-card/60 backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <div className="absolute -inset-px rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100" style={{
                background: 'radial-gradient(400px at 50% 100%, hsl(var(--primary) / 0.15), transparent 80%)'
              }}></div>
              <CardHeader className="relative">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <module.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-center font-headline text-2xl text-foreground">
                  {module.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-center text-muted-foreground">
                  Master the fundamentals and advanced concepts of {module.name}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Web Dev Quiz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
