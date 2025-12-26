'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/mixpanel';

export default function Home() {
  useEffect(() => {
    analytics.trackPageView('Home');
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Starwise Landing Page</h1>
    </main>
  );
}
