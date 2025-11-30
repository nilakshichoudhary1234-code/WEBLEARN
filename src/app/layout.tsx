import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


const fontCode = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
});

export const metadata: Metadata = {
  title: 'Debug Your Brain: The Ultimate Web Dev Quiz',
  description: 'Sharpen your web dev skills. One quiz at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', fontBody.variable, fontHeadline.variable, fontCode.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
