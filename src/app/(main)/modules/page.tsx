import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { contentData } from '@/lib/data';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

export default function ModulesPage() {
  // TODO: Replace with actual user progress data
  const userProgress = {
    html: 3,
    css: 6,
    javascript: 1,
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground">
          EXPLORE WEBLEARN
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a category to start learning and quizzing.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {contentData.map((category) => {
          const progressValue =
            ((userProgress[category.slug] || 0) / category.topics.length) * 100;

          return (
            <AccordionItem
              key={category.slug}
              value={category.slug}
              className="border-none"
            >
              <div className="glass-card group transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]">
                <AccordionTrigger className="p-6 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
                        <category.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <h2 className="font-headline text-2xl">{category.name}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <Progress value={progressValue} className="h-2 w-full bg-muted" />
                        <span className="text-xs text-muted-foreground font-mono">
                          {Math.round(progressValue)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <ul className="space-y-3 -mx-3">
                    {category.topics.map((topic) => (
                      <li key={topic.slug}>
                        <Link
                          href={`/modules/${category.slug}/${topic.slug}`}
                          className="block rounded-md p-3 hover:bg-accent"
                        >
                          <p className="font-medium text-foreground">
                            {topic.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {topic.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
