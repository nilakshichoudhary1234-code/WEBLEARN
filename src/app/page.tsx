import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { CodeXml, Paintbrush, ArrowRight, CheckCircle, Trophy, BarChart, Clock, MonitorSmartphone, Code, Check, Award } from 'lucide-react';
import { JsIcon } from '@/components/JsIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

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

const benefits = [
    { text: 'Practice HTML, CSS, and JavaScript with real code-based questions.' },
    { text: 'Get instant feedback and explanations after every quiz.' },
    { text: 'Track your progress, unlock levels, and stay motivated.' },
    { text: 'Learn at your own pace with short, focused quiz sessions.' },
    { text: 'Build strong fundamentals for projects and interviews.' },
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

       {/* Intro Section */}
       <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute -right-32 -bottom-16 h-96 w-96 rounded-full bg-secondary/10 blur-[100px]"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Learn Web Development Through Interactive Quizzes
            </h2>
            <p className="text-lg text-muted-foreground">
              Practice and master HTML, CSS, and JavaScript through bite-sized, gamified quizzes designed to reinforce your learning and build confidence.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="glass-card w-full max-w-lg p-6 transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center justify-between pb-4">
                  <Badge variant="secondary">HTML</Badge>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4 text-yellow-400" />
                      <span className="font-mono text-muted-foreground">150pts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span className="font-mono text-muted-foreground">00:18</span>
                    </div>
                  </div>
              </div>
              <div className="mb-4 rounded-md border bg-muted/50 p-4">
                <pre className="text-sm font-code text-white"><code>&lt;button <span className="text-blue-400">onClick</span>="<span className="text-green-400">showAlert()</span>"&gt;Click Me&lt;/button&gt;</code></pre>
              </div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Which attribute triggers a JavaScript function on click?</h3>
              <div className="space-y-3">
                <div className="rounded-md border border-input p-3 text-left text-sm text-muted-foreground">onclick</div>
                <div className="rounded-md border-2 border-secondary bg-secondary/10 p-3 text-left text-sm text-secondary-foreground ring-4 ring-secondary/20">onClick</div>
                <div className="rounded-md border border-input p-3 text-left text-sm text-muted-foreground">on-click</div>
                <div className="rounded-md border border-input p-3 text-left text-sm text-muted-foreground">clickEvent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Play Anywhere Section */}
      <section className="w-full py-24 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-black/80 border border-slate-800 shadow-2xl" style={{
            backgroundImage: 'linear-gradient(to bottom right, hsl(222 47% 11%) 0%, hsl(0 0% 4%) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")'
          }}>
            <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:gap-16">
              <div className="relative flex h-full min-h-[300px] w-full items-center justify-center md:min-h-[450px]">
                {/* Laptop */}
                {laptopImage && (
                  <div className="relative w-full max-w-lg" style={{ filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.5))' }}>
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
                  <div className="absolute -bottom-8 right-0 w-1/3 max-w-[150px] sm:-bottom-12 sm:right-8 sm:w-1/4" style={{ filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.5))' }}>
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
                  Our mobile-first design ensures a seamless responsive experience—master web dev quizzes on laptop or phone for anytime brain debugging.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Badge variant="outline" className="text-sm border-secondary/30 bg-secondary/10 text-secondary">
                    <MonitorSmartphone className="mr-2 h-4 w-4" />
                    Responsive interface
                  </Badge>
                  <Badge variant="outline" className="text-sm border-secondary/30 bg-secondary/10 text-secondary">
                    <Code className="mr-2 h-4 w-4" />
                    Code-focused quizzes
                  </Badge>
                  <Badge variant="outline" className="text-sm border-secondary/30 bg-secondary/10 text-secondary">
                    <Award className="mr-2 h-4 w-4" />
                    Progress tracking
                  </Badge>
                  <Badge variant="outline" className="text-sm border-secondary/30 bg-secondary/10 text-secondary">
                    <Trophy className="mr-2 h-4 w-4" />
                    Leaderboard
                  </Badge>
                </div>
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
