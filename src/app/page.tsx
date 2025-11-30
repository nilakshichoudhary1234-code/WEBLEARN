import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code, CheckSquare, Clock } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BarChart, Menu } from 'lucide-react';

const CodeSnippet = ({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) => (
  <div
    className={`absolute rounded-lg border border-white/10 bg-black/30 p-4 text-sm shadow-lg backdrop-blur-md ${className}`}
  >
    <div className="mb-2 flex items-center justify-between">
      <span className="text-xs font-medium text-gray-400">{language}</span>
      <div className="flex gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
    </div>
    <pre className="font-code text-white">
      <code>{code}</code>
    </pre>
  </div>
);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Grid and Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-white font-headline"
        >
          DEV QUIZ
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/leaderboard" className="hidden sm:block">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Leaderboard
            </Button>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/auth">Login</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/auth">Sign Up</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/leaderboard">Leaderboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <CodeSnippet
          code={`const greet = () => {\n  console.log("Hello!");\n}`}
          language="javascript"
          className="top-[15%] left-[10%] rotate-[-8deg]"
        />
        <CodeSnippet
          code={`.card {\n  border-radius: 1rem;\n}`}
          language="css"
          className="top-[30%] right-[8%] rotate-[10deg]"
        />
        <CodeSnippet
          code={`<h1>Title</h1>\n<p>Text</p>`}
          language="html"
          className="bottom-[20%] left-[12%] rotate-[5deg]"
        />
      </div>

      <main className="z-10 mt-20 flex flex-1 items-center justify-center p-4">
        <div className="relative w-full max-w-2xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-green-400 opacity-50 blur-xl"></div>
          <Card className="relative rounded-2xl border-white/10 bg-gray-900/80 shadow-2xl backdrop-blur-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
                Web Dev Quiz Challenge
              </CardTitle>
              <CardDescription className="mt-4 text-lg text-gray-300 md:text-xl">
                Test your knowledge and conquer the code!
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="h-4 w-4" />
                <span>10 Questions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckSquare className="h-4 w-4" />
                <span>Multiple Choice</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>~15 Minutes</span>
              </div>
            </CardContent>
            <CardFooter className="mt-8 flex justify-center">
              <Button
                size="lg"
                asChild
                className="h-14 w-full max-w-xs rounded-full bg-green-500 text-lg font-bold text-black shadow-lg shadow-green-500/20 transition-all hover:bg-green-400 hover:shadow-green-400/30 sm:w-auto"
              >
                <Link href="/modules">START QUIZ</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="absolute bottom-0 z-20 py-6 px-4 md:px-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DEV QUIZ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
