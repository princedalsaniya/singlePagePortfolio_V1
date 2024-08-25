import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prince Dalsaniya | Dev Portfolio',
  description: 'Developer single Page Portfolio of Prince Dalsaniya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
