import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { contentData } from '@/lib/data';
import Link from 'next/link';

export default function ModulesPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Learning Modules
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Choose a category to start learning and quizzing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contentData.map((category) => (
          <Card
            key={category.slug}
            className="flex flex-col transition-all hover:shadow-md hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <category.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="font-headline text-2xl">{category.name}</CardTitle>
                  <CardDescription className="mt-1">{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <div className="flex-grow p-6 pt-0">
              <ul className="space-y-3">
                {category.topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link
                      href={`/modules/${category.slug}/${topic.slug}`}
                      className="block rounded-md p-3 -m-3 hover:bg-accent"
                    >
                      <p className="font-medium text-foreground">{topic.title}</p>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
