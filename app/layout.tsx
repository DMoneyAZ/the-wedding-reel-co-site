import './globals.css';

export const metadata = {
  title: 'The Wedding Reel Co.',
  description: 'Luxury wedding cinematography in Arizona & destinations worldwide.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
