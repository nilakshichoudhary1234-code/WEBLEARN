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
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Learning Modules
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
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
              className="border rounded-lg bg-card"
            >
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <category.icon className="h-10 w-10 text-primary flex-shrink-0" />
                  <div className="flex-grow text-left">
                    <h2 className="font-headline text-2xl">{category.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <Progress value={progressValue} className="h-2 w-full" />
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
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
