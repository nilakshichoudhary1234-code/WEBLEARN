
import { contentData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface SubmodulePageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function SubmodulePage({ params }: SubmodulePageProps) {
  const category = contentData.find((c) => c.slug === params.category);
  const topic = category?.topics.find((t) => t.slug === params.slug);

  if (!category || !topic) {
    notFound();
  }

  const { title, content, codeSnippet, output, learningObjectives } = topic;

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 md:px-6">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-2 capitalize">
          {category.name}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-headline">
          {title}
        </h1>
      </div>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground">{content}</p>
        
        {learningObjectives && learningObjectives.length > 0 && (
          <div className="my-8 rounded-lg border bg-card p-6 glass-card">
            <h2 className="text-2xl font-semibold mt-0 mb-4 font-headline text-foreground">Learning Objectives</h2>
            <ul className="space-y-3">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground/90">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <h2 className="text-2xl font-semibold mt-8 font-headline">Example</h2>
        <CodeBlock code={codeSnippet.code} language={codeSnippet.language} />

        {output && (
          <>
            <h3 className="text-xl font-semibold mt-6 font-headline">Output Preview</h3>
            <div className="rounded-md border bg-card p-4 text-sm text-card-foreground italic">
              {output}
            </div>
          </>
        )}
      </article>

      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href={`/quiz/${category.slug}/${topic.slug}`}>
            <Rocket className="mr-2 h-5 w-5" />
            Start Quiz
          </Link>
        </Button>
      </div>
    </div>
  );
}
