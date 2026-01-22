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
            mixpanel.track('page_view', {
                page: pageName,
                url: window.location.href,
                timestamp: new Date().toISOString(),
            });
        }
    },

    // Track CTA button clicks
    trackCTAClick: (ctaName: string, location: string) => {
        if (token) {
            mixpanel.track('cta_click', {
                cta_name: ctaName,
                location: location,
                url: window.location.href,
            });
        }
    },

    // Track navigation events
    trackNavigation: (linkName: string, destination: string) => {
        if (token) {
            mixpanel.track('navigation_click', {
                link_name: linkName,
                destination: destination,
            });
        }
    },

    // Track social media clicks
    trackSocialClick: (platform: string, location: string) => {
        if (token) {
            mixpanel.track('social_media_click', {
                platform: platform,
                location: location,
            });
        }
    },

    // Track form submissions
    trackFormSubmission: (formName: string, status: 'attempt' | 'success' | 'error', errorMessage?: string) => {
        if (token) {
            mixpanel.track('form_submission', {
                form_name: formName,
                status: status,
                error_message: errorMessage,
            });
        }
    },

    // Track download button clicks
    trackDownloadClick: (platform: 'Google Play' | 'App Store', location: string) => {
        if (token) {
            mixpanel.track('download_button_click', {
                platform: platform,
                location: location,
            });
        }
    },

    // Track language changes
    trackLanguageChange: (fromLanguage: string, toLanguage: string) => {
        if (token) {
            mixpanel.track('language_change', {
                from_language: fromLanguage,
                to_language: toLanguage,
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
