"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'MKS Store',
  description: 'Frontend challenge',
}

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: '100%' }} className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}