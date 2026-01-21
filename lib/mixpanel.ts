import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (token) {
    mixpanel.init(token, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: false, // We'll track manually for more control
        persistence: 'localStorage',
    });
}

export const Mixpanel = {
    // Track page views
    trackPageView: (pageName: string) => {
        if (token) {
            mixpanel.track('Page View', {
                page: pageName,
                url: window.location.href,
                timestamp: new Date().toISOString(),
            });
        }
    },

    // Track custom events
    track: (eventName: string, properties?: Record<string, any>) => {
        if (token) {
            mixpanel.track(eventName, properties);
        }
    },

    // Identify users
    identify: (userId: string) => {
        if (token) {
            mixpanel.identify(userId);
        }
    },

    // Set user properties
    setPeople: (properties: Record<string, any>) => {
        if (token) {
            mixpanel.people.set(properties);
        }
    },
};

export default Mixpanel;
