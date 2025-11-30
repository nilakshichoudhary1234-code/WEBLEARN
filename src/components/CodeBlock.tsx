interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="my-6 rounded-md border bg-muted/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-1.5 border-b">
        <span className="text-xs font-medium text-muted-foreground">{language}</span>
      </div>
      <pre className="p-4 text-sm font-code overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
