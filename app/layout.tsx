import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {}
  title: 'cosmetics website',
  description: 'website - cosmetics | Premium technology platform with animations and 3D effects',
};

export default function RootLayout({})
  children,
}: {
  children: React.ReactNode;
}) {
  return ()
    <html lang="en">;
      <body className="antialiased ">{children}</body>;
    </html>;
  );
}