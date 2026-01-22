# Mixpanel Events Documentation

## Overview

This document lists all Mixpanel tracking events implemented across the Starwise landing page. Events are automatically sent to Mixpanel when users interact with various elements on the site.

**Naming Convention**: All event names use `snake_case` format for consistency with analytics best practices.

---

## Event Categories

### 1. Page Views

#### `page_view`

**Description**: Tracks when a user views a page

**Properties**:
- `page` (string): Page path (e.g., `/en`, `/pt`, `/en/waitlist`)
- `url` (string): Full URL of the page
- `timestamp` (string): ISO timestamp of the view

**Location**: Automatically tracked on all pages via `MixpanelPageView` component

**Example**:
```javascript
{
  event: "page_view",
  properties: {
    page: "/en",
    url: "https://starwise.com/en",
    timestamp: "2026-01-21T20:48:22.000Z"
  }
}
```

---

### 2. CTA Interactions

#### `cta_click`

**Description**: Tracks clicks on Call-to-Action buttons

**Properties**:
- `cta_name` (string): Name of the CTA button
- `location` (string): Section where the CTA is located
- `url` (string): Current page URL

**Locations**:
1. **Hero Section**
   - "Join Waitlist" button
   - Store icons (combined Google Play + App Store)

**Examples**:
```javascript
// Join Waitlist button in Hero
{
  event: "cta_click",
  properties: {
    cta_name: "Join Waitlist",
    location: "Hero Section",
    url: "https://starwise.com/en"
  }
}

// Store icons in Hero
{
  event: "cta_click",
  properties: {
    cta_name: "Store Icons",
    location: "Hero Section",
    url: "https://starwise.com/en"
  }
}
```

---

### 3. Download Button Clicks

#### `download_button_click`

**Description**: Tracks clicks on app store download buttons

**Properties**:
- `platform` (string): "Google Play" or "App Store"
- `location` (string): Section where the button is located

**Locations**:
1. **Download Section**
   - Google Play button
   - App Store button
2. **Advanced Capabilities Section**
   - Google Play button
   - App Store button

**Examples**:
```javascript
// Google Play in Download Section
{
  event: "download_button_click",
  properties: {
    platform: "Google Play",
    location: "Download Section"
  }
}

// App Store in Advanced Capabilities
{
  event: "download_button_click",
  properties: {
    platform: "App Store",
    location: "Advanced Capabilities Section"
  }
}
```

---

### 4. Navigation

#### `navigation_click`

**Description**: Tracks clicks on navigation links

**Properties**:
- `link_name` (string): Display name of the link
- `destination` (string): Target URL/path

**Locations**:
1. **Navbar** (Desktop)
   - Benefits
   - Features
   - Pricing
   - Testimonials
   - FAQs
2. **Navbar** (Mobile Menu)
   - Same links as desktop
3. **Footer**
   - All footer navigation links
   - Privacy Policy
   - Terms of Use

**Examples**:
```javascript
// Navbar link click
{
  event: "navigation_click",
  properties: {
    link_name: "Features",
    destination: "/#features"
  }
}

// Footer link click
{
  event: "navigation_click",
  properties: {
    link_name: "Join Waitlist",
    destination: "/waitlist"
  }
}
```

---

### 5. Social Media

#### `social_media_click`

**Description**: Tracks clicks on social media links

**Properties**:
- `platform` (string): Social media platform name
- `location` (string): Where the link was clicked

**Locations**:
1. **Footer**
   - LinkedIn
   - X (Twitter)
   - Instagram

**Example**:
```javascript
{
  event: "social_media_click",
  properties: {
    platform: "Instagram",
    location: "Footer"
  }
}
```

---

### 6. Contact

#### `email_contact_click`

**Description**: Tracks clicks on email contact link

**Properties**:
- `location` (string): Where the link was clicked

**Location**: Footer email button

**Example**:
```javascript
{
  event: "email_contact_click",
  properties: {
    location: "Footer"
  }
}
```

---

### 7. Form Submissions

#### `form_submission`

**Description**: Tracks waitlist form submission attempts and results

**Properties**:
- `form_name` (string): Name of the form
- `status` (string): "attempt", "success", or "error"
- `error_message` (string, optional): Error details if status is "error"

**Location**: Waitlist page (`/waitlist`)

**Examples**:
```javascript
// Submission attempt
{
  event: "form_submission",
  properties: {
    form_name: "Waitlist",
    status: "attempt"
  }
}

// Successful submission
{
  event: "form_submission",
  properties: {
    form_name: "Waitlist",
    status: "success"
  }
}

// Failed submission
{
  event: "form_submission",
  properties: {
    form_name: "Waitlist",
    status: "error",
    error_message: "Invalid email format"
  }
}
```

---

### 8. Language Changes

#### `language_change`

**Description**: Tracks when users change the site language

**Properties**:
- `from_language` (string): Previous language code
- `to_language` (string): New language code

**Location**: Language selector (Navbar)

**Example**:
```javascript
{
  event: "language_change",
  properties: {
    from_language: "en",
    to_language: "pt"
  }
}
```

---

## Quick Reference Table

| Event Name | Description | Key Properties |
|------------|-------------|----------------|
| `page_view` | Page viewed | `page`, `url`, `timestamp` |
| `cta_click` | CTA button clicked | `cta_name`, `location`, `url` |
| `download_button_click` | Download button clicked | `platform`, `location` |
| `navigation_click` | Navigation link clicked | `link_name`, `destination` |
| `social_media_click` | Social media link clicked | `platform`, `location` |
| `email_contact_click` | Email contact clicked | `location` |
| `form_submission` | Form submitted | `form_name`, `status`, `error_message?` |
| `language_change` | Language changed | `from_language`, `to_language` |

---

## Implementation Details

### Helper Methods

All events are tracked using helper methods from `/lib/mixpanel.ts`:

```typescript
Mixpanel.trackPageView(pageName)
Mixpanel.trackCTAClick(ctaName, location)
Mixpanel.trackDownloadClick(platform, location)
Mixpanel.trackNavigation(linkName, destination)
Mixpanel.trackSocialClick(platform, location)
Mixpanel.trackFormSubmission(formName, status, errorMessage?)
Mixpanel.trackLanguageChange(fromLanguage, toLanguage)
Mixpanel.track(eventName, properties) // For custom events
```

### Component Integration

| Component | Events Tracked | Count |
|-----------|----------------|-------|
| `MixpanelPageView.tsx` | `page_view` | Auto |
| `Hero.tsx` | `cta_click` | 2 |
| `Download.tsx` | `download_button_click` | 2 |
| `AdvancedCapabilities.tsx` | `download_button_click` | 2 |
| `Navbar.tsx` | `navigation_click` | 5 |
| `Footer.tsx` | `navigation_click`, `social_media_click`, `email_contact_click` | 9 |
| **Total** | | **20+** |

---

## Testing

To verify events are being tracked:

1. **Open Mixpanel Dashboard**
   - Navigate to your project
   - Go to "Events" or "Live View"

2. **Perform Actions**
   - Click various buttons and links
   - Navigate between pages
   - Change language

3. **Verify Events**
   - Check that events appear in real-time
   - Verify event names are in `snake_case`
   - Confirm properties are correct

---

## Best Practices

### Event Naming
- ✅ Use `snake_case` for event names
- ✅ Use descriptive, action-based names
- ✅ Keep names concise but clear

### Property Naming
- ✅ Use `snake_case` for property keys
- ✅ Use consistent property names across events
- ✅ Include context (location, platform, etc.)

### Implementation
- ✅ Use helper methods for consistency
- ✅ Track user intent, not just clicks
- ✅ Include relevant context in properties

---

## Configuration

Events are configured via environment variables in `.env.local`:

```bash
NEXT_PUBLIC_MIXPANEL_TOKEN=your_token_here
```

- Events only fire if token is set
- Debug mode enabled in development
- Uses localStorage for persistence

---

## Future Enhancements

Potential events to add:

- [ ] `form_submission` - Waitlist form tracking
- [ ] `language_change` - Language selector tracking
- [ ] `pricing_plan_view` - Pricing interaction tracking
- [ ] `scroll_depth` - Page engagement tracking
- [ ] `video_play` - Video interaction tracking (if applicable)
