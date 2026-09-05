import type { Metadata } from 'next';
import React from 'react';
import '../css/style.css';

export const metadata: Metadata = {
  title: "Mahishadal Gayeswari Girls' High School (H.S.) | Official Portal",
  description: "Official web portal of Mahishadal Gayeswari Girls' High School (H.S.), Purba Medinipur, West Bengal. Estd. 1945. Affiliated to WBBSE & WBCHSE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
