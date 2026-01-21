'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Mixpanel from '@/lib/mixpanel';

export default function MixpanelPageView() {
    const pathname = usePathname();

    useEffect(() => {
        // Track page view when component mounts or pathname changes
        Mixpanel.trackPageView(pathname);
    }, [pathname]);

    return null; // This component doesn't render anything
}
