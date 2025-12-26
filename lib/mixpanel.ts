import mixpanel from 'mixpanel-browser';

// Mixpanel configuration
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let mixpanelInitialized = false;

// Initialize Mixpanel on client side
const initMixpanel = () => {
  if (mixpanelInitialized) return;

  if (typeof window === 'undefined') {
    console.log('[Mixpanel] Cannot initialize on server side');
    return;
  }

  if (!MIXPANEL_TOKEN) {
    console.error('[Mixpanel] Token not found. Make sure NEXT_PUBLIC_MIXPANEL_TOKEN is set in .env.local');
    return;
  }

  console.log('[Mixpanel] Initializing with token:', MIXPANEL_TOKEN);

  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true, // Always debug for now
    track_pageview: false,
    persistence: 'localStorage',
  });

  mixpanelInitialized = true;
  console.log('[Mixpanel] Initialized successfully');
};

// Analytics wrapper - ready to use when you want to emit events
export const analytics = {
  // Track page views
  trackPageView: (pageName: string) => {
    initMixpanel();
    if (!mixpanelInitialized) {
      console.error('[Mixpanel] Not initialized, cannot track page view');
      return;
    }
    console.log('[Mixpanel] Tracking page view:', pageName);
    mixpanel.track('Page View', { page: pageName });
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
