import mixpanel from 'mixpanel-browser';

// Mixpanel configuration
// To enable: Add NEXT_PUBLIC_MIXPANEL_TOKEN to your .env.local file

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let mixpanelInitialized = false;

// Initialize Mixpanel (only if token is provided)
if (MIXPANEL_TOKEN && typeof window !== 'undefined') {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: false, // We'll track manually when ready
    persistence: 'localStorage',
  });
  mixpanelInitialized = true;
}

// Analytics wrapper - ready to use when you want to emit events
export const analytics = {
  // Track page views
  trackPageView: (pageName: string) => {
    if (!mixpanelInitialized) return;
    // mixpanel.track('Page View', { page: pageName });
  },

  // Track custom events
  track: (eventName: string, properties?: Record<string, any>) => {
    if (!mixpanelInitialized) return;
    // mixpanel.track(eventName, properties);
  },

  // Identify user
  identify: (userId: string) => {
    if (!mixpanelInitialized) return;
    // mixpanel.identify(userId);
  },

  // Set user properties
  setUserProperties: (properties: Record<string, any>) => {
    if (!mixpanelInitialized) return;
    // mixpanel.people.set(properties);
  },

  // Reset user (e.g., on logout)
  reset: () => {
    if (!mixpanelInitialized) return;
    // mixpanel.reset();
  },
};

export default analytics;
