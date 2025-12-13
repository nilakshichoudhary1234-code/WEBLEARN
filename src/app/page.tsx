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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const leaderboardHighlights = [
  { rank: 1, avatar: '/avatars/01.png', username: 'lexie', score: 980, progress: 98 },
  { rank: 2, avatar: '/avatars/02.png', username: 'ryan', score: 950, progress: 95 },
  { rank: 3, avatar: '/avatars/03.png', username: 'cameron', score: 920, progress: 92 },
];

const featureBadges = [
  { icon: BarChart, text: 'Weekly & Monthly Leaderboards' },
  { icon: Award, text: 'Unlock Mastery Badges' },
  { icon: CheckCircle, text: 'Boost with Streak Multipliers' },
  { icon: Trophy, text: 'Join the Hall of Fame' },
]

const faqs = [
  {
    question: 'What topics does the platform cover?',
    answer: 'We cover HTML, CSS, and JavaScript fundamentals through over 500 interactive coding quizzes. Our curriculum is structured into beginner, intermediate, and advanced levels to guide you from the basics to mastery.'
  },
  {
    question: 'Is it free to use?',
    answer: 'Yes! All core quizzes and learning modules are completely free to use. We plan to introduce a premium tier in the future that will unlock advanced challenges, detailed analytics, and an ad-free experience.'
  },
  {
    question: 'How are points calculated?',
    answer: 'Your score is a combination of question difficulty, completion speed, and accuracy. Answering correctly on the first try yields the most points. Plus, maintain a consistent practice routine to activate streak multipliers that can boost your score up to 5x!'
  },
  {
    question: 'Can I use it on mobile?',
    answer: 'Absolutely. The platform is fully responsive and designed to work perfectly on laptops, tablets, and phones. Your progress is synced across all devices so you can learn anywhere, anytime.'
  },
  {
    question: 'Do I need coding experience?',
    answer: 'Not at all! Our platform is perfect for absolute beginners, but also provides a challenge for intermediate developers looking to sharpen their skills. You can start with the basics and unlock more advanced topics as you improve.'
  },
  {
    question: 'How often are leaderboards reset?',
    answer: 'We have both weekly and monthly competitions to give everyone a chance to compete for the top spot. Your all-time best scores are recorded in the Hall of Fame, which tracks lifetime achievements.'
  },
  {
    question: 'Are explanations provided for answers?',
    answer: 'Yes. After every question, you get instant feedback along with detailed explanations of the code, best practices, and common pitfalls. Our goal is to help you understand the \'why\' behind the answer.'
  }
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

      {/* Leaderboard Section */}
      <section className="w-full py-24 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-purple-950/40 via-background to-background p-8 md:p-12" style={{
            backgroundImage: 'linear-gradient(to bottom right, hsl(278 80% 10% / 0.4) 0%, hsl(0 0% 4%) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")'
          }}>
             <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10"></div>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Climb the Leaderboard
                </h2>
                <p className="text-lg text-muted-foreground">
                  Earn points by crushing HTML, CSS, and JavaScript quizzes. Compete on weekly leaderboards, unlock mastery badges, and claim your spot in the Hall of Fame.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {featureBadges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-sm border-secondary/30 bg-secondary/10 text-secondary">
                      <badge.icon className="mr-2 h-4 w-4" />
                      {badge.text}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative space-y-4">
                {leaderboardHighlights.map((player) => (
                  <div key={player.rank} className="glass-card flex items-center gap-4 p-4 transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.2)]">
                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full font-bold text-xl", {
                      'bg-yellow-400/20 text-yellow-300 ring-2 ring-yellow-400/50': player.rank === 1,
                      'bg-gray-400/20 text-gray-300': player.rank === 2,
                      'bg-yellow-600/20 text-yellow-500': player.rank === 3,
                    })}>
                      {player.rank}
                    </div>
                    <Avatar>
                       <AvatarImage src={`https://i.pravatar.cc/40?u=${player.username}`} alt={player.username} />
                      <AvatarFallback>{player.username.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-medium text-foreground">{player.username}</p>
                      <Progress value={player.progress} className="h-1.5 mt-1" />
                    </div>
                    <div className="font-mono text-lg font-bold text-secondary">
                      {player.score}pts
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <div className="glass-card group transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]">
                  <AccordionTrigger className="p-6 text-left font-headline text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
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
