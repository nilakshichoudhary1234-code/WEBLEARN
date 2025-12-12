import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { CodeXml, Paintbrush, ArrowRight } from 'lucide-react';
import { JsIcon } from '@/components/JsIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  const laptopImage = PlaceHolderImages.find((img) => img.id === 'laptop-mockup');
  const phoneImage = PlaceHolderImages.find((img) => img.id === 'phone-mockup');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {/* Header */}
      <header className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="text-foreground transition-colors hover:text-secondary">
            Home
          </Link>
          <Link href="/auth" className="text-muted-foreground transition-colors hover:text-secondary">
            Login
          </Link>
          <Link href="/modules" className="text-muted-foreground transition-colors hover:text-secondary">
            Modules
          </Link>
          <Link href="/quiz/html/introduction-to-html" className="text-muted-foreground transition-colors hover:text-secondary">
            Quiz
          </Link>
          <Link href="/leaderboard" className="text-muted-foreground transition-colors hover:text-secondary">
            Leaderboard
          </Link>
        </nav>
        <Button variant="ghost" asChild>
          <Link href="/auth">Get Started</Link>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center pt-40">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-background"
        >
          <div 
            className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[hsl(var(--primary)/0.2)] opacity-50 blur-[80px]"
          ></div>
           <div 
            className="absolute bottom-auto left-0 right-auto top-auto h-[500px] w-[500px] -translate-y-[10%] rounded-full bg-[hsl(var(--secondary)/0.2)] opacity-50 blur-[80px]"
          ></div>
        </div>

        <div className="relative z-10">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Debug Your Brain
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            The Ultimate Web Dev Quiz
          </p>
          <div className="mt-10">
            <Button size="lg" className="neon-glow-button" asChild>
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
            <Card key={module.name} className="glass-card group relative overflow-hidden transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]">
               <div className="absolute -inset-px rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100" style={{
                background: `radial-gradient(400px at 50% 100%, hsl(var(--primary) / 0.1), transparent 80%)`
              }}></div>
              <CardHeader className="relative">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
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

      {/* Play Anywhere Section */}
      <section className="w-full py-24 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl glass-card">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-950/50"></div>
            <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:gap-16">
              <div className="relative flex h-full min-h-[300px] w-full items-center justify-center md:min-h-[450px]">
                {/* Devices with glows */}
                <div className="absolute inset-0 -m-4 rounded-full bg-primary/20 blur-3xl"></div>
                <div className="absolute inset-8 -m-4 rounded-full bg-secondary/20 blur-3xl"></div>
                
                {/* Laptop */}
                {laptopImage && (
                  <div className="relative w-full max-w-lg" style={{ filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.3))' }}>
                     <Image
                      src={laptopImage.imageUrl}
                      alt={laptopImage.description}
                      width={1200}
                      height={750}
                      className="relative rounded-t-lg border-4 border-gray-700"
                      data-ai-hint={laptopImage.imageHint}
                    />
                     <div className="h-4 w-full rounded-b-lg bg-gray-800"></div>
                  </div>
                )}
                
                {/* Phone */}
                {phoneImage && (
                  <div className="absolute -bottom-8 right-0 w-1/3 max-w-[150px] sm:-bottom-12 sm:right-8 sm:w-1/4" style={{ filter: 'drop-shadow(0 15px 15px rgb(0 0 0 / 0.4))' }}>
                    <Image
                      src={phoneImage.imageUrl}
                      alt={phoneImage.description}
                      width={300}
                      height={600}
                      className="relative rounded-xl border-4 border-gray-700"
                      data-ai-hint={phoneImage.imageHint}
                    />
                  </div>
                )}
              </div>
              <div className="relative z-10 space-y-6 text-center md:text-left">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Play anywhere, anytime
                </h2>
                <p className="text-lg text-gray-300 md:text-xl">
                  Our platform is built mobile-first, allowing you to strengthen your development skills on the go. The experience is seamless across smartphone, tablet, and desktop.
                </p>
                <p className="text-lg text-gray-400">
                  With a <span className="text-secondary font-medium">responsive design</span> and smooth performance, you can pick up where you left off, no matter what device you're on. Your progress is always in sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Web Dev Quiz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
