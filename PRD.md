# Smart Tourist Safety Monitoring & Incident Response System - PRD

## Project Summary

**Let me confirm my understanding:**

- **Project:** SafeYatra - Smart Tourist Safety System for Northeast India
- **Users:** Tourists visiting Northeast regions + Police/Tourism Officials
- **MVP Features:**
    1. Blockchain-based Digital Tourist ID Generation
    2. Mobile App with Panic Button & Geo-fencing Alerts
    3. Police/Tourism Department Dashboard (real-time monitoring)
- **Timeline:** 12 days (SIH hackathon)
- **Team:** Solo developer, intermediate level
- **Style:** Government-official yet modern, vibrant with cultural warmth

**Does this sound right? Should I proceed with the full PRD?**

---

## Project Information

### Project Title

**SafeYatra - Smart Tourist Safety System**

---

### Project Description

**Short Description:**
SafeYatra is an AI-powered tourist safety platform that provides blockchain-based digital IDs, real-time geo-fencing alerts, panic response, and centralized monitoring for tourists visiting Northeast India.

**Long Description:**

Tourism is a vital economic driver for Northeast India, but ensuring visitor safety in remote and high-risk areas remains challenging. Traditional manual tracking and paper-based identity systems are insufficient for modern safety requirements.

SafeYatra addresses this through a three-pronged digital ecosystem:

**For Tourists:** A mobile application that issues blockchain-verified digital IDs at entry points (airports, hotels, check-posts), provides real-time geo-fencing alerts when entering sensitive zones, and features a one-tap panic button that instantly shares location with police and emergency contacts.

**For Authorities:** A comprehensive dashboard for police and tourism departments offering real-time tourist location heat maps, anomaly detection alerts, digital ID verification, and automated incident response workflows.

**Technical Foundation:** The system leverages blockchain for tamper-proof identity records, AI/ML for behavior analysis and risk prediction, geo-fencing for automated zone-based alerts, and end-to-end encryption for data privacy compliance.

**Expected Impact:**
- Reduce tourist incident response time from hours to minutes
- Provide 24/7 safety monitoring for vulnerable travelers
- Enable data-driven tourism safety policies
- Build tourist confidence in Northeast destinations
- Create tamper-proof audit trail for investigations

**Target Deployment:** Initial rollout across Meghalaya, Arunachal Pradesh, and Sikkim tourist circuits, with plans for Northeast-wide expansion.

---

### Learning Objectives

**Primary Learning Outcomes:**

- **Blockchain Integration:** Implement Polygon/Ethereum for decentralized identity management and immutable record-keeping
- **Geospatial Technologies:** Master React Native geolocation, geo-fencing APIs, and real-time coordinate tracking
- **Real-time Systems:** Build WebSocket-based live location sharing and instant alert dispatch mechanisms
- **Government System Design:** Create secure, compliant, and accessible public sector applications
- **Full-Stack TypeScript:** Develop type-safe applications across mobile, web, and backend layers

**Secondary Learning Outcomes:**

- AI/ML anomaly detection for behavioral pattern analysis
- Multi-tenant authentication (tourists vs officials)
- Multilingual internationalization (i18n) implementation
- Data privacy compliance (encryption, GDPR-style controls)

---

### Technology Stack

**Frontend (Web Dashboard):**

- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5
- **Routing:** React Router v7
- **State Management:** Zustand 5.x (global state) + TanStack Query v5 (server state)
- **Styling:** TailwindCSS v4 + DaisyUI v5.5
- **Maps:** Leaflet.js v1.9 + React-Leaflet v4
- **Charts:** Recharts v2.15
- **Icons:** Google Material Symbols (Rounded variant)
- **Additional Libraries:**
    - date-fns v3 (date handling)
    - react-hook-form v7 + zod v3 (form validation)
    - socket.io-client v4 (real-time updates)

**Mobile App:**

- **Framework:** React Native v0.76 with TypeScript 5
- **Navigation:** React Navigation v7
- **State Management:** Zustand 5.x + TanStack Query v5
- **Styling:** NativeWind v4 (Tailwind for React Native)
- **Maps:** react-native-maps v1.18
- **Geolocation:** @react-native-community/geolocation v3
- **Geofencing:** react-native-geolocation-service v5
- **Push Notifications:** @notifee/react-native v9
- **Blockchain:** ethers.js v6 or web3.js v4
- **Storage:** AsyncStorage + React Native MMKV (encrypted storage)

**Backend:**

- **Runtime:** Node.js v22 LTS
- **Language:** TypeScript 5
- **Framework:** Express.js v5
- **Database:** MongoDB with Mongoose v9
- **Authentication:** JWT (jsonwebtoken v9) + bcrypt v5
- **Blockchain:** ethers.js v6 (Polygon Mumbai testnet for hackathon)
- **Real-time:** Socket.io v4
- **File Storage:** Cloudinary or AWS S3 (for profile photos, documents)
- **Geospatial Queries:** MongoDB geospatial indexes
- **Validation:** Zod v3
- **Email:** Nodemailer v6
- **SMS/Calls:** Twilio API (for emergency alerts)

**Blockchain:**

- **Network:** Polygon Mumbai Testnet (for hackathon - zero gas fees, fast)
- **Smart Contracts:** Solidity v0.8.x
- **Development:** Hardhat v2.22
- **Wallet Integration:** MetaMask SDK or WalletConnect

**DevOps & Deployment:**

- **Hosting:** Vercel (frontend) + Render/Railway (backend)
- **Database:** MongoDB Atlas (free tier)
- **Version Control:** Git + GitHub
- **Environment:** dotenv for config management

---

### MVP Scope

**Phase 1: Core Identity & Safety (Days 1-8)**
**Priority: P0 (Must Have)**

1. **Digital Tourist ID System**
    - Tourist registration form (name, passport/Aadhaar, photo, emergency contacts)
    - Blockchain-based ID generation (mint unique NFT token with tourist data)
    - QR code generation for ID verification
    - ID storage in MongoDB + blockchain hash reference
    - Basic KYC validation (document upload)

2. **Mobile Safety App**
    - Tourist login/authentication (JWT-based)
    - View digital ID with QR code
    - Real-time location tracking (opt-in consent)
    - **Panic Button** - One-tap SOS with automatic location sharing
    - Geo-fencing alerts (push notifications when entering restricted zones)
    - Emergency contacts management
    - Trip itinerary input (optional)
    - Multilingual support (English + Hindi for MVP, structure for 10+ languages)

3. **Police/Tourism Dashboard (Web)**
    - Official login (role-based access control)
    - Real-time map view with tourist location clusters
    - Digital ID verification (scan QR, view blockchain record)
    - Active alerts feed (panic button triggers, geo-fence violations)
    - Tourist search and filter (by name, ID, location, status)
    - Basic incident logging
    - Heat map of high-risk zones

**Phase 2: Enhanced Intelligence (Days 9-11)**
**Priority: P1 (Should Have - Time Permitting)**

4. **AI Anomaly Detection (Basic)**
    - Track tourist movement patterns
    - Flag sudden location changes (>50km in <1hr)
    - Detect prolonged inactivity (no movement for 6+ hours in remote areas)
    - Simple risk scoring algorithm (distance from tourist spots, time of day)

5. **Advanced Dashboard Features**
    - Automated E-FIR generation (pre-filled form for missing tourists)
    - Alert history and timeline view
    - Tourist status updates (safe, investigating, missing)
    - Export reports (CSV/PDF)
    - Push notification system for officials

**Phase 3: Future Enhancements (Post-Hackathon)**
**Priority: P2 (Nice to Have)**

6. **IoT Integration**
    - Smart band/tag support for remote trekking areas
    - Health vitals monitoring (heart rate, SpO2)

7. **Advanced AI**
    - ML model for predictive risk assessment
    - NLP-based sentiment analysis of tourist check-ins
    - Computer vision for document verification

8. **Extended Features**
    - Family/friend live tracking (shared access)
    - Tourist community features (safety tips, reviews)
    - Integration with existing government databases (Crime records, weather alerts)

---

### Target Users / Personas

**Primary Persona: Domestic Tourist (Priya Sharma)**

- **Demographics:**
    - Age: 28-35
    - Location: Delhi, Mumbai, Bangalore (Tier-1 cities)
    - Occupation: Working professional, marketing manager
    - Tech Savviness: High (comfortable with apps, online payments)

- **Goals & Motivations:**
    - Explore Northeast India's natural beauty and culture
    - Feel safe while traveling solo or with friends
    - Quick access to help in emergencies
    - Hassle-free check-ins at tourist spots

- **Pain Points:**
    - Fear of getting lost in remote, unfamiliar areas
    - Language barriers with locals and police
    - Uncertainty about safe vs. risky zones
    - Slow emergency response in hills/forests

- **User Needs:**
    - One-tap panic button for emergencies
    - Clear alerts about restricted areas
    - Confidence that authorities can locate them if needed
    - Simple, intuitive app (works offline in low-network areas)

**Secondary Persona: International Tourist (David Chen)**

- **Demographics:**
    - Age: 40-55
    - Location: USA, UK, Singapore
    - Occupation: Business consultant, adventure enthusiast
    - Tech Savviness: Medium (uses travel apps, Google Maps)

- **Goals & Motivations:**
    - Experience unique cultural destinations
    - Ensure safety in politically sensitive border regions
    - Comply with local regulations easily

- **Pain Points:**
    - Unfamiliar with Indian bureaucracy and police systems
    - Concern about documentation (passport, visa checks)
    - Limited knowledge of local emergency numbers

- **User Needs:**
    - English-first interface with simple instructions
    - Blockchain-verified ID for quick verification at checkpoints
    - Automatic emergency contact alerting (family back home + local police)

**Tertiary Persona: Police Officer (Inspector Rajesh Kumar)**

- **Demographics:**
    - Age: 35-50
    - Location: Shillong, Gangtok, Itanagar (Northeast cities)
    - Occupation: Tourism police officer, law enforcement
    - Tech Savviness: Medium (uses WhatsApp, basic govt portals)

- **Goals & Motivations:**
    - Prevent tourist incidents and improve response time
    - Monitor high-risk areas during peak season
    - Quickly verify tourist identities at checkpoints
    - Coordinate rescue operations efficiently

- **Pain Points:**
    - Manual tracking of tourists is impossible at scale
    - Delayed information about missing persons
    - Difficulty verifying fake IDs/documents
    - Lack of real-time situational awareness

- **User Needs:**
    - Real-time dashboard showing all active tourists in jurisdiction
    - Instant alerts when tourists trigger panic button
    - Quick access to tourist details and emergency contacts
    - Simple interface (no complex training required)

**Quaternary Persona: Tourism Department Official (Ms. Anjali Devi)**

- **Demographics:**
    - Age: 45-60
    - Location: State tourism offices (Guwahati, Imphal)
    - Occupation: Deputy Director, Tourism Safety Division
    - Tech Savviness: Low-Medium (uses email, PowerPoint)

- **Goals & Motivations:**
    - Improve Northeast tourism safety statistics
    - Generate reports for government policy decisions
    - Identify infrastructure gaps (low-connectivity zones, dangerous routes)

- **Pain Points:**
    - No centralized data on tourist movements
    - Incident reports are fragmented across departments
    - Difficult to prove safety improvements to attract tourists

- **User Needs:**
    - High-level analytics dashboard (heat maps, trend graphs)
    - Downloadable reports for presentations
    - Historical data access (month-over-month comparisons)
    - Simple filters (by state, district, tourist type)

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** SafeYatra (सुरक्षित यात्रा)
- *"Yatra" means journey/pilgrimage in Hindi*
- *Conveys: Safe Travel, Protected Journey*

**Brand Personality:**
- **Tone:** Official yet approachable, authoritative but warm
- **Voice:** Reassuring, clear, respectful (addresses diverse Indian audience)
- **Mood:** Trustworthy with cultural vibrancy, modern yet rooted in Northeast heritage

**Brand Values:**
- **Trust & Security** - Tourists' safety is our paramount responsibility, backed by government authority
- **Cultural Respect** - Celebrating Northeast India's diversity through inclusive, multilingual design
- **Innovation for Good** - Leveraging cutting-edge technology (blockchain, AI) to solve real social problems
- **Transparency** - Open data practices, clear privacy policies, tamper-proof records

**Brand Story:**
SafeYatra was born from the vision to make Northeast India's breathtaking destinations accessible without compromising visitor safety. By combining the timeless beauty of the region with modern technology, we create a protective shield around every traveler while respecting their privacy and cultural identity. Our name reflects this mission - every "yatra" (journey) should be "surakshit" (safe).

---

### Logo & Visual Assets

**Logo Specifications:**
- **Primary Logo:** "SafeYatra" wordmark with shield icon incorporating traditional Northeast patterns (Assamese gamosa motifs)
- **Logo Variations:**
    - Full logo (icon + wordmark) for headers
    - Icon-only for mobile app icon and favicons
    - Monochrome version for official documents
    - White version for dark backgrounds
- **Safe Space:** Minimum 20px clear space on all sides
- **Minimum Size:** 120px width (wordmark), 32px (icon-only)
- **File Formats:** SVG (primary), PNG (fallback)

**Imagery Style:**
- **Photography:** Authentic tourist destination shots (Meghalaya's living root bridges, Sikkim monasteries, Arunachal valleys)
- **Illustrations:** Flat, geometric style with warm gradients - representing tourists, officials, maps
- **Icons:** Google Material Symbols - **Rounded variant** (softer, friendlier than Sharp/Outlined)
- **Patterns:** Subtle background patterns inspired by Northeast textiles (Naga shawls, Mizo puan designs) at 5% opacity

---

### Color System (OKLCH)

**Understanding OKLCH:**
OKLCH is a perceptual color space:
- **L (Lightness):** 0-100% (0 = black, 100 = white)
- **C (Chroma):** 0-0.4 (0 = grayscale, higher = more vibrant)
- **H (Hue):** 0-360 degrees (color wheel)

---

#### Primary Brand Color - Trustworthy Saffron
```css
--color-primary: oklch(65% 0.18 45);
--color-primary-content: oklch(98% 0.01 45);
```

**Example:** `oklch(65% 0.18 45)` - Warm saffron orange (inspired by Indian government identity, Buddhist flags of Northeast)
- **Usage:** Primary CTAs (Register, Login, Send Panic Alert), official badges, verification checkmarks
- **Meaning:** Government authority, urgency for safety, cultural warmth
- **Accessibility:** Contrast with base-100: 4.8:1 (AA compliant)

**Color Variations:**
- Lighter: `oklch(78% 0.15 45)` - Hover states, soft backgrounds
- Darker: `oklch(52% 0.20 45)` - Active pressed states, emphasis

---

#### Secondary Brand Color - Serene Green
```css
--color-secondary: oklch(55% 0.16 155);
--color-secondary-content: oklch(98% 0.01 155);
```

**Example:** `oklch(55% 0.16 155)` - Forest green (representing Northeast's lush landscapes)
- **Usage:** Secondary CTAs (View Details, Edit Profile), safe zone indicators on maps, eco-tourism tags
- **Meaning:** Natural beauty, safety (green = go/safe), environmental consciousness
- **Accessibility:** Contrast with base-100: 5.2:1 (AA compliant)

---

#### Accent Color - Alert Red
```css
--color-accent: oklch(58% 0.24 25);
--color-accent-content: oklch(98% 0.01 25);
```

**Example:** `oklch(58% 0.24 25)` - Vibrant alert red
- **Usage:** Panic button (MOST IMPORTANT), danger zone markers, critical alerts, SOS notifications
- **Meaning:** Emergency, immediate action required, life-saving urgency
- **Accessibility:** Contrast with base-100: 5.5:1 (AA+ compliant for critical elements)

**Design Note:** Red is used sparingly and ONLY for genuine emergencies to avoid desensitization.

---

#### Neutral Colors
```css
--color-neutral: oklch(35% 0.02 250);
--color-neutral-content: oklch(95% 0.01 250);
```

**Example:** `oklch(35% 0.02 250)` - Cool dark gray (subtle blue undertone)
- **Usage:** Text on cards, borders, subtle separators, disabled states
- **Meaning:** Professional neutrality, official documentation

---

#### Base Colors (Backgrounds & Surfaces)
```css
--color-base-100: oklch(98% 0.005 80); /* Main background - warm white */
--color-base-200: oklch(94% 0.008 80); /* Cards, panels - light cream */
--color-base-300: oklch(88% 0.01 80); /* Dividers, input borders */
--color-base-content: oklch(22% 0.015 250); /* Primary text - almost black */
```

**Example (Light Theme):**
- Warm, paper-like background (98% lightness) with subtle saffron undertone
- Avoids pure white (#FFFFFF) for reduced eye strain
- Slight warmth makes interface feel welcoming (vs. clinical cold whites)

---

#### Semantic Colors

**Info - Sky Blue:**
```css
--color-info: oklch(62% 0.18 240);
--color-info-content: oklch(98% 0 0);
```
- **Usage:** Info tooltips, help modals, trip itinerary sections, notifications about check-ins

**Success - Safe Green:**
```css
--color-success: oklch(65% 0.17 145);
--color-success-content: oklch(20% 0.05 145);
```
- **Usage:** ID verified checkmarks, successful panic alert sent, tourist marked safe, geo-fence exit (leaving danger zone)

**Warning - Caution Amber:**
```css
--color-warning: oklch(75% 0.16 85);
--color-warning-content: oklch(25% 0.05 85);
```
- **Usage:** Entering restricted zones (geo-fence warning), low battery alerts, weak GPS signal

**Error - Danger Red:**
```css
--color-error: oklch(60% 0.22 25);
--color-error-content: oklch(98% 0 0);
```
- **Usage:** Failed login, invalid ID, panic button confirmation (ARE YOU SURE?), high-risk zone entered

---

### Color Usage Guidelines

**Do's:**
- ✅ Use **primary saffron** for government-official actions (Register ID, Verify, Submit)
- ✅ Use **accent red** ONLY for panic button and life-threatening alerts
- ✅ Use **secondary green** for safe zones on maps and positive safety actions
- ✅ Use **semantic colors consistently** (green = safe, red = danger, amber = caution)
- ✅ Ensure all text meets **WCAG 2.1 AA** (4.5:1 normal text, 3:1 large text)
- ✅ Test colors in bright sunlight (mobile outdoor usage) and low-light (nighttime emergencies)

**Don'ts:**
- ❌ Don't overuse red - reserve for genuine emergencies only
- ❌ Don't use color as the only indicator (add icons + text, e.g., "⚠️ Danger Zone Ahead")
- ❌ Don't use pure black (#000) for text (use base-content `oklch(22% 0.015 250)`)
- ❌ Don't mix more than 3-4 colors in a single screen
- ❌ Don't use low-contrast combinations (tourists may view in harsh sunlight)

---

### Color Accessibility Matrix

| Text Color | Background | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| base-content | base-100 | 7.2:1 | AAA | Body text, descriptions |
| primary-content | primary | 4.9:1 | AA | Primary buttons |
| secondary-content | secondary | 5.3:1 | AA | Secondary buttons |
| accent-content | accent | 5.8:1 | AA | Panic button (critical!) |
| error-content | error | 5.6:1 | AA | Error messages |
| warning-content | warning | 4.7:1 | AA | Warning banners |

**Testing Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- Chrome DevTools Lighthouse Accessibility Audit

---

### Dark Mode Considerations

**Strategy:** NOT IMPLEMENTED IN MVP (12-day constraint)
- **Rationale:** Tourist safety app requires high visibility in daylight (most tourist activity happens daytime)
- **Future:** Add dark mode for officials working night shifts monitoring dashboards

**Planned Dark Theme Colors (Post-Hackathon):**
```css
@plugin "daisyui/theme" {
  name: "safeyatra-dark";
  prefersdark: true;
  color-scheme: "dark";
  
  --color-base-100: oklch(22% 0.02 250); /* Dark navy background */
  --color-base-200: oklch(27% 0.025 250);
  --color-base-300: oklch(32% 0.03 250);
  --color-base-content: oklch(92% 0.01 250); /* Light text */
  
  --color-primary: oklch(68% 0.18 45); /* Slightly brighter saffron */
  --color-accent: oklch(62% 0.24 25); /* Brighter red for visibility */
}
```

---

### Visual Hierarchy & Emphasis

**Color-Based Hierarchy:**
1. **Critical Actions (Panic Button):** Accent red + large size + icon
2. **Primary Actions (Register, Login):** Primary saffron + medium size
3. **Secondary Actions (View Map, Edit):** Secondary green or neutral outline
4. **Tertiary Actions (Cancel, Back):** Ghost or link style

**Text Hierarchy:**
- **Headings:** `text-base-content` (darkest - 100% opacity)
- **Body text:** `text-base-content/85` (85% opacity)
- **Supporting text:** `text-base-content/65` (65% opacity)
- **Disabled text:** `text-base-content/40` (40% opacity)

**Example Color Application:**
```tsx
{/* PANIC BUTTON - Most Critical */}
<button className="btn btn-accent btn-lg w-full shadow-lg">
  <Icon name="emergency" size="lg" />
  SEND PANIC ALERT
</button>

{/* Primary CTA */}
<button className="btn btn-primary">Register Digital ID</button>

{/* Secondary action */}
<button className="btn btn-secondary">View My Location</button>

{/* Tertiary action */}
<button className="btn btn-ghost">Cancel</button>

{/* Text hierarchy */}
<h1 className="text-3xl font-bold text-base-content">Welcome to SafeYatra</h1>
<p className="text-base-content/85">Your safety companion in Northeast India</p>
<span className="text-base-content/65 text-sm">Last updated: 2 mins ago</span>
```

---

## UI/UX Design System

### Design Principles

- **Clarity Over Complexity:** Every screen serves ONE primary purpose (register ID, send alert, view map). No cognitive overload during emergencies.
- **Accessibility First:** WCAG 2.1 AA compliance, large touch targets (min 48px), multilingual support, works on low-end Android phones (50%+ Indian market).
- **Offline-Capable:** Core features (view ID, panic button, last-known location) work without internet. Queue actions for sync when online.
- **Mobile-First:** Tourist app designed for smartphones (primary device while traveling). Dashboard optimized for desktop (officials work on laptops/desktops).
- **Trust Through Design:** Government-official aesthetic with reassuring color palette. Clear data privacy indicators. Never playful or gimmicky.

---

### DaisyUI 5 Theme Configuration

**Complete Theme Definition:**

```css
@plugin "daisyui/theme" {
  name: "safeyatra-light";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  
  /* Base Colors - Warm, paper-like feel */
  --color-base-100: oklch(98% 0.005 80);  /* Main background */
  --color-base-200: oklch(94% 0.008 80);  /* Cards, panels */
  --color-base-300: oklch(88% 0.01 80);   /* Borders */
  --color-base-content: oklch(22% 0.015 250); /* Text */
  
  /* Primary - Trustworthy Saffron */
  --color-primary: oklch(65% 0.18 45);
  --color-primary-content: oklch(98% 0.01 45);
  
  /* Secondary - Serene Green */
  --color-secondary: oklch(55% 0.16 155);
  --color-secondary-content: oklch(98% 0.01 155);
  
  /* Accent - Alert Red */
  --color-accent: oklch(58% 0.24 25);
  --color-accent-content: oklch(98% 0.01 25);
  
  /* Neutral */
  --color-neutral: oklch(35% 0.02 250);
  --color-neutral-content: oklch(95% 0.01 250);
  
  /* Semantic Colors */
  --color-info: oklch(62% 0.18 240);
  --color-info-content: oklch(98% 0 0);
  
  --color-success: oklch(65% 0.17 145);
  --color-success-content: oklch(20% 0.05 145);
  
  --color-warning: oklch(75% 0.16 85);
  --color-warning-content: oklch(25% 0.05 85);
  
  --color-error: oklch(60% 0.22 25);
  --color-error-content: oklch(98% 0 0);
  
  /* Border Radius - Soft, approachable */
  --radius-selector: 0.5rem;  /* Radio buttons, checkboxes */
  --radius-field: 0.75rem;    /* Input fields */
  --radius-box: 1rem;         /* Cards, containers */
  
  /* Sizing - Touch-friendly */
  --size-selector: 1.5rem;    /* Larger tap targets */
  --size-field: 3rem;         /* 48px height inputs */
  
  /* Effects */
  --border: 1px;
  --depth: 3;     /* Moderate shadows for depth */
  --noise: 0;     /* No noise (keeps government aesthetic clean) */
}
```

**Theme Application:**

```tsx
// In your HTML (for web dashboard)
<html data-theme="safeyatra-light" lang="en">

// For React Native (NativeWind config)
// tailwind.config.js
module.exports = {
  daisyui: {
    themes: ["safeyatra-light"]
  }
}

// Using theme colors in components
<button className="btn btn-primary">Register</button>
<div className="card bg-base-100 shadow-lg">Tourist Details</div>
<div className="alert alert-warning">Entering restricted zone</div>
```

---

### Typography

**Google Fonts Integration:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Headings & UI):**
- **Font Family:** Inter (modern, geometric, excellent for UI)
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Usage:** Headings (H1-H6), buttons, navigation labels, dashboard metrics
- **Characteristics:** Highly readable on screens, neutral, professional, supports 200+ languages including Devanagari

**Secondary Font (Body Text):**
- **Font Family:** Noto Sans (Google's multilingual workhorse)
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** Paragraphs, descriptions, form labels, long-form content
- **Characteristics:** Optimized for on-screen reading, supports Devanagari, Bengali, and other Indian scripts seamlessly

**Typography Scale:**

```css
/* Heading Styles */
H1: 36px / 44px - font-weight: 700 (Bold)
    Usage: Page titles (Welcome to SafeYatra)
    
H2: 30px / 38px - font-weight: 600 (Semibold)
    Usage: Section headings (Your Digital ID, Active Alerts)
    
H3: 24px / 32px - font-weight: 600 (Semibold)
    Usage: Card titles, modal headings
    
H4: 20px / 28px - font-weight: 600 (Semibold)
    Usage: Subsection titles, list headers
    
H5: 18px / 26px - font-weight: 500 (Medium)
    Usage: Small section headers, emphasized labels
    
H6: 16px / 24px - font-weight: 500 (Medium)
    Usage: Minor headings, group labels

/* Body Styles */
Body Large: 18px / 28px - font-weight: 400 (Regular)
    Usage: Important body text, introductions
    
Body Regular: 16px / 24px - font-weight: 400 (Regular)
    Usage: Standard body text, descriptions, form fields
    
Body Small: 14px / 20px - font-weight: 400 (Regular)
    Usage: Supporting text, metadata, captions

/* UI Elements */
Button Text: 16px / 24px - font-weight: 600 (Semibold)
    Usage: All button labels (uppercase optional for critical actions)
    
Label: 14px / 20px - font-weight: 500 (Medium)
    Usage: Form labels, input labels
    
Caption: 12px / 16px - font-weight: 400 (Regular)
    Usage: Timestamps, helper text, footnotes
```

**Responsive Typography:**

- **Mobile (<768px):**
    - H1: 28px
    - H2: 24px
    - H3: 20px
    - Body: 16px (minimum for readability on small screens)

- **Tablet (768px - 1279px):**
    - H1: 32px
    - H2: 26px
    - Body: 16px

- **Desktop (≥1280px):**
    - Full scale as defined above

---

### Icons - Google Material Symbols

**Integration:**

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

**Icon Variant:** Rounded (softer, friendlier, less intimidating for diverse tourist demographic)

**Icon Usage:**

| Category | Icon Names | Context |
|----------|-----------|---------|
| **Safety** | emergency, shield, warning, notifications, gpp_good | Panic button, safety status, alerts |
| **Navigation** | home, map, location_on, explore, directions, navigation | Map views, location tracking |
| **Identity** | badge, verified_user, fingerprint, qr_code_2, person | Digital ID, verification |
| **Actions** | add, edit, delete, save, check, refresh, download, upload, share | CRUD operations |
| **Communication** | call, message, mail, chat, notifications, phone_in_talk | Emergency contacts, alerts |
| **User** | person, account_circle, group, login, logout, manage_accounts | User profiles, auth |
| **Status** | check_circle, error, warning, info, help, verified, pending | System feedback |
| **Travel** | flight, hotel, event, schedule, calendar_month | Itinerary, bookings |
| **Dashboard** | dashboard, analytics, bar_chart, pie_chart, trending_up | Admin visualizations |

**Icon Sizes:**

- **Small (16px):** Inline with text, list bullets
- **Medium (20px):** Form field icons, button icons
- **Large (24px):** Navigation icons, section headers
- **XL (32px):** Feature icons, empty states
- **XXL (48px+):** Panic button icon, hero illustrations

**Icon Component (React/React Native):**

```tsx
// Web (React)
interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  ariaLabel?: string;
}

const Icon = ({ name, size = 'md', className = '', ariaLabel }: IconProps) => {
  const sizes = {
    sm: 'text-base',      // 16px
    md: 'text-xl',        // 20px
    lg: 'text-2xl',       // 24px
    xl: 'text-4xl',       // 32px
    xxl: 'text-6xl',      // 48px
  };
  
  return (
    <span
      className={`material-symbols-rounded ${sizes[size]} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {name}
    </span>
  );
};

// Usage:
<Icon name="emergency" size="xxl" ariaLabel="Send panic alert" />
```

---

### Responsive Design

**Breakpoint System (Tailwind):**

```tsx
const breakpoints = {
  sm: '640px',   // Large phones (landscape)
  md: '768px',   // Tablets
  lg: '1024px',  // Small laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large monitors
};
```

**Layout Patterns:**

**Desktop Dashboard (≥1280px):**
- 3-column layout (sidebar navigation | main content | info panel)
- Persistent sidebar with all menu options visible
- Large map view (60% screen width) with real-time data stream
- Multi-chart analytics (2x2 grid)

**Tablet Dashboard (768px - 1279px):**
- 2-column layout (collapsible sidebar | main content)
- Hamburger menu for navigation
- Single-column charts (stacked)
- Touch-optimized controls (min 44px targets)

**Mobile Tourist App (<768px):**
- Single-column stacked layout (all content full-width)
- Bottom tab navigation (Home, Map, ID, Profile)
- Large panic button (fixed at bottom, always visible)
- Card-based UI (easy thumb scrolling)
- Pull-to-refresh for location updates

**Responsive Utilities:**

```tsx
/* Grid Layout - Dashboard */
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Sidebar */}
  <aside className="lg:col-span-1">...</aside>
  {/* Main content */}
  <main className="lg:col-span-2">...</main>
</div>

/* Typography - Responsive headings */
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  SafeYatra Dashboard
</h1>

/* Spacing - Adaptive padding */
<section className="py-6 md:py-10 lg:py-16 px-4 md:px-6 lg:px-8">

/* Visibility - Show/hide based on screen size */
<div className="block md:hidden">
  {/* Mobile-only: Bottom sheet panic button */}
</div>
<div className="hidden md:block">
  {/* Desktop-only: Sidebar panic widget */}
</div>

/* Touch targets - Mobile-friendly buttons */
<button className="btn h-12 md:h-10 lg:h-auto">
  {/* 48px height on mobile (easy to tap) */}
</button>
```

---

### Accessibility Requirements

**WCAG 2.1 AA Compliance Checklist:**

**Perceivable:**

- [x] All images have descriptive alt text (tourist photos, map markers, ID QR codes)
- [x] Color contrast ratio ≥ 4.5:1 for normal text (see color matrix above)
- [x] Color contrast ratio ≥ 3:1 for large text (headings 18pt+)
- [x] Color is NOT the only indicator (geo-fence alerts have icon + text + vibration)
- [x] Text resizable to 200% without horizontal scrolling or loss of content
- [x] Captions/transcripts for any video tutorials (if added post-MVP)

**Operable:**

- [x] All functionality keyboard accessible (Tab, Enter, Esc, Arrow keys)
- [x] No keyboard traps (focus can always move away from any element)
- [x] Focus indicator visible (2px solid outline with `ring-2 ring-primary`)
- [x] Skip navigation link for dashboard (`Skip to main content`)
- [x] Descriptive page titles (`<title>Dashboard - SafeYatra</title>`)
- [x] Logical focus order (top-to-bottom, left-to-right)
- [x] Panic button activatable via Enter/Space (not just click/tap)

**Understandable:**

- [x] Language declared (`<html lang="en">`, `<html lang="hi">` for Hindi)
- [x] Consistent navigation (same menu structure across all pages)
- [x] Input labels and instructions (all form fields labeled, error messages clear)
- [x] Error identification with suggestions ("Invalid Aadhaar format. Must be 12 digits.")
- [x] Confirmation dialogs for destructive actions ("Are you sure you want to cancel registration?")

**Robust:**

- [x] Valid HTML (no parsing errors - use W3C Validator)
- [x] ARIA used correctly:
    - `role="alert"` for panic alerts and geo-fence warnings
    - `aria-live="polite"` for status updates (tourist location loaded)
    - `aria-label` for icon-only buttons
    - `aria-describedby` for form field help text
- [x] Name, role, value for custom components (react-aria library for React Native)

**Additional Accessibility Features for SafeYatra:**

- **Screen Reader Support:** Full VoiceOver (iOS) and TalkBack (Android) compatibility
- **Voice Control:** Panic button activatable via "Hey Siri/Google, send SOS with SafeYatra"
- **High Contrast Mode:** Auto-detect system preference and boost colors
- **Larger Text:** Respect system text size settings (Android Large Text, iOS Dynamic Type)
- **Haptic Feedback:** Vibration on panic button press (confirmation) and geo-fence alerts
- **Audio Alerts:** Optional spoken alerts ("You are entering a restricted zone")

---

## Component Design System

### Component Organization Structure

```
src/
├── components/
│   ├── atoms/              # Basic UI elements
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Icon/
│   │   ├── Avatar/
│   │   ├── QRCode/         # Tourist ID QR display
│   │   └── StatusIndicator/ # Safe/Alert/Offline
│   │
│   ├── molecules/          # Combinations of atoms
│   │   ├── FormField/      # Label + Input + Error
│   │   ├── IDCard/         # Avatar + Name + QR + Status
│   │   ├── AlertCard/      # Icon + Message + Action button
│   │   ├── MapMarker/      # Icon + Label (for tourist pins)
│   │   └── StatCard/       # Number + Label + Icon (dashboard metrics)
│   │
│   ├── organisms/          # Complex UI sections
│   │   ├── Navbar/         # Logo + Nav links + User menu
│   │   ├── Sidebar/        # Dashboard navigation
│   │   ├── PanicButton/    # Large emergency button widget
│   │   ├── TouristMap/     # Leaflet map with geo-fencing overlay
│   │   ├── AlertsList/     # Real-time alerts feed
│   │   ├── TouristTable/   # Data table with search/filter
│   │   └── RegistrationForm/ # Multi-step ID registration
│   │
│   ├── templates/          # Page-level layouts
│   │   ├── AuthLayout/     # Login/signup pages
│   │   ├── AppLayout/      # Tourist app main layout (with bottom nav)
│   │   ├── DashboardLayout/ # Admin/police dashboard (with sidebar)
│   │   └── EmptyLayout/    # For full-screen map views
│   │
│   └── pages/              # Route-level pages
│       ├── tourist/
│       │   ├── Home/       # Tourist dashboard
│       │   ├── IDView/     # Digital ID display
│       │   ├── MapView/    # Live location map
│       │   └── Profile/    # Settings, emergency contacts
│       │
│       ├── official/
│       │   ├── Dashboard/  # Police/tourism admin home
│       │   ├── TouristList/ # All registered tourists
│       │   ├── AlertsView/ # Real-time incident monitoring
│       │   └── Analytics/  # Reports and heat maps
│       │
│       └── auth/
│           ├── Login/
│           ├── Register/
│           └── ForgotPassword/
```

---

### Atom Components Inventory

| Component | Purpose | Key Props | States | Accessibility |
|-----------|---------|-----------|--------|---------------|
| **Button** | Action triggers | `variant` (primary/secondary/accent/ghost), `size` (sm/md/lg), `loading`, `disabled`, `icon`, `fullWidth` | default, hover, active, focus, loading, disabled | ARIA labels, keyboard accessible (`Enter`/`Space`), focus ring |
| **Input** | Text input fields | `type` (text/email/tel/password), `value`, `error`, `disabled`, `placeholder` | default, focus, error, disabled | Label association (`htmlFor`), error announcement (`aria-describedby`) |
| **Badge** | Status indicators | `variant` (success/warning/error/info), `size`, `text` | default | ARIA live regions for status changes (`aria-live="polite"`) |
| **Icon** | Visual symbols | `name` (Material Symbol), `size`, `color`, `ariaLabel` | default | `aria-hidden="true"` or `aria-label` if standalone |
| **Avatar** | User/tourist photos | `src`, `alt`, `size`, `fallback` (initials) | default, loading, error | Alt text required, initials readable by screen readers |
| **QRCode** | ID verification codes | `value` (tourist ID hash), `size`, `errorLevel` | default, loading | Alt text: "QR code for tourist ID verification" |
| **StatusIndicator** | Real-time status dots | `status` (online/offline/alert/safe), `label`, `pulse` | static, pulsing | Color + text + icon (not color-only), `aria-label` |
| **Checkbox** | Boolean selections | `checked`, `disabled`, `indeterminate`, `label` | unchecked, checked, indeterminate | Native semantics, grouped with `<fieldset>` |
| **Radio** | Single selections | `checked`, `disabled`, `name`, `value`, `label` | unchecked, checked | Radio groups with `role="radiogroup"` |
| **Toggle** | Binary switches (opt-in tracking) | `checked`, `disabled`, `label` | off, on | `role="switch"`, `aria-checked` |
| **Link** | Navigation elements | `href`, `external`, `disabled` | default, hover, visited, focus | External links indicated with icon + `rel="noopener noreferrer"` |

---

### Molecule Components Inventory

| Component | Combines | Purpose | Key Props | Accessibility |
|-----------|----------|---------|-----------|---------------|
| **FormField** | Label + Input + Error | Complete form input unit | `label`, `name`, `error`, `required`, `helperText`, `...inputProps` | Proper associations (`htmlFor`, `aria-describedby`), error announcement with `role="alert"` |
| **IDCard** | Avatar + Text + QRCode + Badge | Display tourist digital ID | `tourist` (name, photo, ID, status), `showQR`, `compact` | Semantic structure (`<article>`), focus management |
| **AlertCard** | Icon + Text + Button | Display safety alerts | `severity` (info/warning/error), `title`, `message`, `action`, `timestamp` | `role="alert"` for critical, `role="status"` for non-critical |
| **MapMarker** | Icon + Label + Popup | Tourist location pins on map | `tourist` (name, status, location), `onClick`, `color` | Keyboard focusable, Enter to open popup |
| **StatCard** | Number + Label + Icon + Trend | Dashboard metrics | `value`, `label`, `icon`, `trend` (up/down/flat), `color` | Number formatted for screen readers ("345" → "three hundred forty-five tourists") |
| **EmptyState** | Icon + Text + CTA | No data states | `icon`, `title`, `message`, `action` | Focus on CTA button, clear messaging |
| **LoadingSpinner** | Spinner + Text | Loading states | `size`, `message` | `aria-live="polite"`, `aria-busy="true"` |

---

### Organism Components Inventory

| Component | Purpose | Complexity | Key Features | Accessibility |
|-----------|---------|------------|--------------|---------------|
| **Navbar** | App navigation | Medium | Logo, nav links, user menu, mobile hamburger | Skip link, keyboard nav (`Tab`), `role="navigation"`, `aria-label="Main navigation"` |
| **Sidebar** | Dashboard side nav | Medium | Collapsible menu, active state, nested items | `role="navigation"`, `aria-label="Dashboard menu"`, keyboard arrows for tree navigation |
| **PanicButton** | Emergency SOS | High | Large touchable area, confirmation modal, haptic feedback, auto-location share | `aria-label="Send emergency panic alert"`, keyboard accessible, focus trap in confirmation |
| **TouristMap** | Live location map | High | Leaflet.js map, tourist markers, geo-fence zones, clustering, search | Keyboard pan/zoom, ARIA labels for markers, color + pattern for zones (not color-only) |
| **AlertsList** | Real-time alerts feed | Medium | Live updates (WebSocket), filter by severity, mark as resolved | `aria-live="polite"`, announce new alerts, keyboard navigation |
| **TouristTable** | Searchable data table | High | Sorting, filtering, pagination, row actions (view details, contact) | `role="table"`, sortable headers with `aria-sort`, row selection with `Space`, pagination with arrow keys |
| **RegistrationForm** | Multi-step tourist registration | High | Form validation (Zod), file upload (photo, docs), progress indicator, blockchain minting | Form semantics, error summary at top, step navigation with keyboard |
| **GeoFenceEditor** | Define restricted zones | High | Draw polygons on map, save coordinates, set severity level | Keyboard drawing controls, clear instructions, undo/redo |
| **Footer** | Site footer | Low | Links, social, copyright | Semantic structure (`<footer>`), link keyboard accessibility |

---

### Layout Components (Templates)

**1. AuthLayout**

```tsx
// components/templates/AuthLayout/AuthLayout.tsx
import React, { FC } from 'react';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">SafeYatra</h1>
          <p className="text-base-content/70">सुरक्षित यात्रा</p>
        </div>
        
        {/* Auth Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-2">{title}</h2>
            {subtitle && <p className="text-base-content/70 mb-4">{subtitle}</p>}
            {children}
          </div>
        </div>
        
        {/* Footer links */}
        <div className="text-center mt-6 text-sm text-base-content/60">
          <p>By continuing, you agree to our <a href="/terms" className="link">Terms</a> and <a href="/privacy" className="link">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};
```

**2. AppLayout (Tourist Mobile App)**

```tsx
// components/templates/AppLayout/AppLayout.tsx
import React, { FC } from 'react';
import { BottomTabNav } from '@/components/organisms/BottomTabNav';
import { StatusBar } from '@/components/atoms/StatusBar';

export interface AppLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  showStatusBar?: boolean;
}

export const AppLayout: FC<AppLayoutProps> = ({ 
  children, 
  showBottomNav = true,
  showStatusBar = true 
}) => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Status bar - connection, GPS, battery */}
      {showStatusBar && <StatusBar />}
      
      {/* Main content area */}
      <main className="flex-1 overflow-y-auto pb-safe">
        {children}
      </main>
      
      {/* Bottom navigation */}
      {showBottomNav && <BottomTabNav />}
      
      {/* Global panic button - always visible */}
      <div className="fixed bottom-20 right-4 z-50">
        <button 
          className="btn btn-accent btn-circle btn-lg shadow-2xl"
          aria-label="Emergency panic button"
        >
          <Icon name="emergency" size="xl" />
        </button>
      </div>
    </div>
  );
};
```

**3. DashboardLayout (Officials)**

```tsx
// components/templates/DashboardLayout/DashboardLayout.tsx
import React, { FC, useState } from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { DashboardHeader } from '@/components/organisms/DashboardHeader';

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="min-h-screen bg-base-200 flex">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      
      {/* Sidebar navigation */}
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main id="main-content" className="flex-1 p-6 overflow-y-auto" role="main">
          {children}
        </main>
      </div>
    </div>
  );
};
```

**Layout Components Summary:**

| Layout | Purpose | Structure | Use Cases |
|--------|---------|-----------|-----------|
| **AuthLayout** | Authentication flows | Centered card with branding | Login, signup, forgot password, OTP verification |
| **AppLayout** | Tourist mobile app | Full-screen with bottom nav + floating panic button | Home, Map, ID View, Profile (tourist-facing) |
| **DashboardLayout** | Admin/police web portal | Sidebar + header + content | Dashboard, Tourist List, Alerts, Analytics (official-facing) |
| **EmptyLayout** | Full-screen immersive | No chrome, just content | Full-screen map view, onboarding slideshow, splash screen |

---

### Page Components Inventory

**Tourist App Pages:**

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **HomePage** | `/` | AppLayout | Welcome card, Quick actions (View ID, Check-in), Safety tips | Tourist dashboard landing |
| **IDViewPage** | `/id` | AppLayout | Digital ID card, QR code, Validity status, Download option | Display tourist credentials |
| **MapViewPage** | `/map` | EmptyLayout | Full-screen map, Current location pin, Geo-fence zones overlay, Nearby checkpoints | Live location tracking and zone awareness |
| **ProfilePage** | `/profile` | AppLayout | Personal info, Emergency contacts (edit), Preferences (language, tracking), Logout | Settings and account management |
| **ItineraryPage** | `/itinerary` | AppLayout | Trip schedule, Destinations, Accommodation bookings | Travel plan reference |
| **HelpPage** | `/help` | AppLayout | Emergency numbers, FAQs, Safety guidelines, Report issue | Support and resources |

**Official Dashboard Pages:**

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **DashboardPage** | `/dashboard` | DashboardLayout | Stats cards (total tourists, active alerts, safe count), Live map, Recent alerts feed | Real-time overview |
| **TouristListPage** | `/tourists` | DashboardLayout | Searchable table, Filters (status, location, date), Export CSV, View details action | Browse all registered tourists |
| **TouristDetailPage** | `/tourists/:id` | DashboardLayout | Full profile, Location history timeline, Contact info, Action buttons (call, message, mark safe/missing) | Individual tourist management |
| **AlertsPage** | `/alerts` | DashboardLayout | Live alerts feed, Filter by severity, Mark as resolved, View on map | Incident response dashboard |
| **AnalyticsPage** | `/analytics` | DashboardLayout | Heat maps (tourist density, high-risk zones), Trend charts (daily registrations, incidents over time), Reports | Data insights and planning |
| **GeoFencePage** | `/geofence` | DashboardLayout | Map editor, Zone list (name, coordinates, risk level), Add/edit/delete zones | Manage restricted areas |
| **VerifyIDPage** | `/verify` | DashboardLayout | QR scanner, Manual ID input, Verification result (blockchain check) | Checkpoint ID validation |

**Authentication Pages:**

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **LoginPage** | `/login` | AuthLayout | Email/phone input, Password, Remember me, Forgot password link, Sign up link | User authentication |
| **RegisterPage** | `/register` | AuthLayout | Multi-step form (Personal info → Documents → Emergency contacts), Progress bar | Tourist/official signup |
| **ForgotPasswordPage** | `/forgot-password` | AuthLayout | Email/phone input, OTP verification, New password | Password recovery |

---

### Component Development Guidelines

**Creation Checklist:**

- [ ] Create component folder with PascalCase name (`Button/`)
- [ ] Write TypeScript interface extending HTML attributes (`ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>`)
- [ ] Implement accessibility requirements (ARIA labels, keyboard handlers, focus management)
- [ ] Add responsive design classes (Tailwind breakpoints: `sm:`, `md:`, `lg:`)
- [ ] Write unit tests (`Button.test.tsx`) covering all variants and states
- [ ] Document props with JSDoc comments (`/** Button variant */`)
- [ ] Export from index.ts (`export { Button } from './Button';`)
- [ ] Add to Storybook (post-hackathon for documentation)

**Naming Conventions:**

- **Files:** PascalCase (`Button.tsx`, `FormField.tsx`)
- **Components:** PascalCase matching filename (`export const Button`)
- **Props Interfaces:** `[ComponentName]Props` (`ButtonProps`, `FormFieldProps`)
- **Variants:** lowercase strings (`'primary'`, `'secondary'`, `'outline'`)
- **Sizes:** 2-letter abbreviations (`'sm'`, `'md'`, `'lg'`, `'xl'`)
- **Event Handlers:** `on[Event]` (`onClick`, `onChange`, `onSubmit`)

**Accessibility Best Practices:**

1. **Semantic HTML First:** Use `<button>` not `<div onClick>`, `<nav>` not `<div className="nav">`
2. **ARIA Only When Needed:** Native semantics are better than ARIA. Use ARIA to enhance, not replace.
3. **Keyboard Accessible:** All interactive elements respond to `Enter`/`Space`, focus is visible
4. **Screen Reader Friendly:** `aria-label` for icon-only buttons, `aria-describedby` for help text
5. **Color + Text/Icon:** Never rely on color alone (e.g., red button also has ⚠️ icon and "Danger" text)
6. **Focus Management:** Modal traps focus, drawer returns focus to trigger on close
7. **Live Regions:** Use `aria-live="polite"` for status updates, `role="alert"` for urgent messages

---

## Google Stitch Wireframes

### Wireframe Structure (Per Page)

---

**1. Landing Page (`/`)**

**Purpose:** Introduce SafeYatra to tourists arriving in Northeast India, build trust, drive registrations

**Layout Type:** Full-width sections, centered content (1280px max-width container)

**Block 1 - Hero Section:**
- **Component Type:** Full-width hero with gradient background (primary/secondary colors)
- **Elements:**
    - Logo (SafeYatra with shield icon)
    - H1: "Travel Northeast India with Confidence"
    - Subheading: "Real-time safety monitoring • Instant emergency response • Blockchain-verified identity"
    - Primary CTA: Large "Register for Free Digital ID" (btn-primary, 56px height)
    - Secondary CTA: "Learn How It Works" (btn-outline)
    - Background: Gradient mesh with subtle Northeast textile pattern overlay (5% opacity)
- **Responsive:** Stack buttons vertically on mobile, reduce H1 to 28px

**Block 2 - How It Works (3 Steps):**
- **Component Type:** 3-column grid (auto-collapses to 1 column on mobile)
- **Elements:**
    - Step 1 Card: Icon (badge), "Register Your ID", "Get verified at airport/hotel in 5 minutes"
    - Step 2 Card: Icon (map), "Enable Location Tracking", "Opt-in for real-time safety monitoring"
    - Step 3 Card: Icon (emergency), "Stay Protected", "One-tap SOS alerts local authorities instantly"
- **Responsive:** Stack vertically on mobile with connecting dotted line between cards

**Block 3 - Key Features Grid:**
- **Component Type:** 2x3 grid of feature cards
- **Elements:**
    - Card 1: "Blockchain Digital ID" + description
    - Card 2: "Geo-Fencing Alerts" + description
    - Card 3: "Panic Button" + description
    - Card 4: "Multilingual Support" + description
    - Card 5: "24/7 Monitoring" + description
    - Card 6: "Privacy Protected" + description
- **Responsive:** 1 column on mobile

**Block 4 - Trust Indicators:**
- **Component Type:** Centered section with government badges
- **Elements:**
    - "Powered by Ministry of Development of North Eastern Region"
    - Government of India emblem
    - "Blockchain Secured • GDPR Compliant • 256-bit Encryption"

**Block 5 - CTA Section:**
- **Component Type:** Full-width colored banner (primary bg)
- **Elements:**
    - H2: "Ready to Explore Safely?"
    - Button: "Get Your Digital ID Now"
- **Background:** Primary color with texture

**Navigation:**
- **Entry Points:** Direct URL (safeyatra.gov.in), tourist information centers, airport kiosks
- **Exit Points:** Register page, Login page, Help/FAQ
- **Primary CTA:** "Register for Free Digital ID" (appears twice - hero + footer)

---

**2. Tourist Registration Page (`/register`)**

**Purpose:** Collect tourist information and issue blockchain-based digital ID

**Layout Type:** Multi-step form (centered, max-width 600px)

**Block 1 - Progress Indicator:**
- **Component Type:** Stepper component
- **Elements:**
    - Step 1: Personal Info (active)
    - Step 2: Documents
    - Step 3: Emergency Contacts
    - Step 4: Review & Submit
- **Responsive:** Horizontal stepper on desktop, vertical on mobile

**Block 2 - Form Step 1 (Personal Info):**
- **Component Type:** Form with validation
- **Elements:**
    - Input: Full Name (required)
    - Input: Email (required, validated)
    - Input: Phone with country code (+91 default)
    - Radio: Nationality (Indian / International)
    - Date Picker: Date of Birth
    - Dropdown: Gender
    - Button: "Next" (btn-primary, full-width on mobile)
- **Responsive:** Single column, large touch targets (48px height)

**Block 3 - Form Step 2 (Documents):**
- **Elements:**
    - File Upload: Profile Photo (required, camera or gallery)
    - Conditional Input: Aadhaar Number (if Indian) OR Passport Number (if International)
    - File Upload: ID Document Photo
    - Checkbox: "I consent to verification via government databases"
    - Buttons: "Back" (btn-ghost), "Next" (btn-primary)

**Block 4 - Form Step 3 (Emergency Contacts):**
- **Elements:**
    - Input: Contact 1 Name (required)
    - Input: Contact 1 Phone (required)
    - Input: Contact 1 Relationship (dropdown: Family/Friend/Colleague)
    - Button: "+ Add Another Contact" (optional, max 3 contacts)
    - Checkbox: "Share my location with emergency contacts during alerts"
    - Buttons: "Back", "Next"

**Block 5 - Form Step 4 (Review & Consent):**
- **Elements:**
    - Summary Card: Review all entered information (read-only)
    - Button: "Edit" for each section (returns to that step)
    - Checkbox: "I agree to Terms of Service and Privacy Policy" (required)
    - Checkbox: "I consent to location tracking for safety purposes" (required for app usage)
    - Alert Box (info): "Your data is encrypted and stored on blockchain. Read our privacy policy."
    - Button: "Submit & Generate Digital ID" (btn-accent, full-width)
    - Loading State: "Minting your Digital ID on blockchain... Please wait" (with spinner)

**Navigation:**
- **Entry Points:** Landing page CTA, Login page "Sign up" link
- **Exit Points:** Login page (after successful registration), Dashboard (auto-login)
- **Primary CTA:** "Submit & Generate Digital ID"

---

**3. Tourist Home Page (`/`) - Mobile App**

**Purpose:** Tourist dashboard - quick access to ID, map, panic button, safety status

**Layout Type:** Single column, card-based, bottom navigation

**Block 1 - Header:**
- **Component Type:** Fixed header with user info
- **Elements:**
    - Logo: SafeYatra icon
    - Welcome Text: "Hi, Priya" (first name)
    - Status Badge: "Safe" (success color with checkmark icon)
    - Menu Icon: Settings (hamburger or profile avatar)
- **Responsive:** Always visible, 64px height

**Block 2 - Digital ID Card (Featured):**
- **Component Type:** Large interactive card
- **Elements:**
    - Profile Photo (circular, 80px)
    - Name: "Priya Sharma"
    - ID Number: "ST-2025-1234567"
    - QR Code (tap to enlarge)
    - Validity: "Valid until: 15 Jan 2025"
    - Button: "View Full ID" (btn-ghost)
- **Responsive:** Full-width with padding, shadows for depth

**Block 3 - Quick Actions Grid:**
- **Component Type:** 2x2 grid of action buttons
- **Elements:**
    - Button 1: Icon (map), "View Map", Navigate to map page
    - Button 2: Icon (location_on), "Check-In", Log current location
    - Button 3: Icon (call), "Emergency Contacts", View saved contacts
    - Button 4: Icon (schedule), "My Itinerary", View trip plan
- **Responsive:** Equal-width buttons, 60px height, clear labels below icons

**Block 4 - Safety Tips Card:**
- **Component Type:** Informational card with icon
- **Elements:**
    - Icon: (info)
    - Title: "Travel Tip of the Day"
    - Message: "Stay on marked trails in Cherrapunji. Monsoon paths can be slippery."
    - Link: "View All Safety Tips"
- **Responsive:** Full-width, collapsible

**Block 5 - Recent Alerts (if any):**
- **Component Type:** Alert list
- **Elements:**
    - Alert Card: Icon (warning), "You entered a restricted zone 2 hours ago", Timestamp
    - Button: "View Alert History"
- **Responsive:** Scrollable list if multiple alerts

**Block 6 - Bottom Navigation (Fixed):**
- **Component Type:** Tab bar navigation
- **Elements:**
    - Tab 1: Icon (home), "Home" (active state)
    - Tab 2: Icon (map), "Map"
    - Tab 3: Icon (badge), "My ID"
    - Tab 4: Icon (person), "Profile"
    - Center: **PANIC BUTTON** (large, red, floating above tabs)
- **Responsive:** Always visible, 72px height (56px tabs + 16px spacing)

**Navigation:**
- **Entry Points:** App launch (after login), deep links from notifications
- **Exit Points:** Map page, ID page, Profile page, Panic alert flow
- **Primary CTA:** Panic Button (center, always accessible)

---

**4. Map View Page (`/map`) - Mobile App**

**Purpose:** Real-time location tracking with geo-fence zone visualization

**Layout Type:** Full-screen map with overlay controls

**Block 1 - Map Canvas (Full Screen):**
- **Component Type:** Interactive Leaflet map
- **Elements:**
    - Base Map Layer: OpenStreetMap tiles
    - Current Location Marker: Blue pulsing dot (user's GPS position)
    - Geo-Fence Zones: Polygons overlaid (color-coded by risk level)
        - Green zones: Safe tourist areas
        - Yellow zones: Caution required (remote regions)
        - Red zones: Restricted (border areas, sensitive zones)
    - Other Tourist Markers: Gray dots (if official tracking is enabled, privacy-first)
    - Police Station Markers: Shield icon
    - Hospital Markers: Medical cross icon
- **Responsive:** Fills entire viewport, pinch-to-zoom, pan gestures

**Block 2 - Top Control Bar (Overlay):**
- **Component Type:** Floating header with transparency (backdrop-blur)
- **Elements:**
    - Button: "< Back" (navigate to home)
    - Search Bar: "Search location or landmark"
    - Button: "Center on Me" (re-center map to user location)
- **Responsive:** Adaptive width, 56px height

**Block 3 - Current Location Card (Bottom Sheet):**
- **Component Type:** Draggable bottom sheet
- **Elements:**
    - Handle: Drag indicator (swipe up to expand, down to collapse)
    - Current Address: "Shillong, Ward No. 5, Police Bazar"
    - Zone Status: Badge "Safe Zone" (green) OR "Restricted Zone" (red with warning icon)
    - Nearest Checkpoint: "Police Chowki - 1.2 km away"
    - Button: "Share Location" (send to emergency contacts)
    - Button: "Report Issue Here" (flag danger)
- **Responsive:** Collapsed by default (100px height), expand to 60% screen height

**Block 4 - Legend (Collapsible):**
- **Component Type:** Floating overlay (bottom-right corner)
- **Elements:**
    - Toggle Button: "Show Legend"
    - Legend Card (when expanded):
        - Green: Safe Zones
        - Yellow: Caution Zones
        - Red: Restricted Zones
        - Blue Dot: Your Location
        - Gray Dots: Other Tourists (if visible)
- **Responsive:** Collapsed by default, 40px button

**Block 5 - Panic Button (Fixed):**
- **Component Type:** Large floating action button
- **Elements:**
    - Icon: emergency (48px)
    - Label: "SOS" (visible on hover/long-press)
    - Position: Bottom-right, above bottom sheet
- **Responsive:** Always visible, 72px diameter, red (accent color)

**Navigation:**
- **Entry Points:** Home quick action, bottom tab bar
- **Exit Points:** Back to home, trigger panic alert
- **Primary CTA:** Panic Button (if emergency), Center on Me (for orientation)

---

**5. Digital ID View Page (`/id`) - Mobile App**

**Purpose:** Display tourist's blockchain-verified digital ID for verification

**Layout Type:** Single page with large ID card, download/share options

**Block 1 - ID Card Display:**
- **Component Type:** Large card mimicking physical ID
- **Elements:**
    - Header: "SafeYatra Digital ID" with government emblem
    - Profile Photo: 120px circular
    - Name: "Priya Sharma" (large, bold)
    - ID Number: "ST-2025-1234567"
    - Nationality: "Indian" (with flag icon)
    - Date of Issue: "10 Dec 2024"
    - Valid Until: "15 Jan 2025" (countdown: "35 days remaining")
    - QR Code: Large (200px), centered
    - Footer: "Verified on Blockchain" (with blockchain icon)
    - Blockchain Hash: "0x8f3e...a7b2" (truncated, tap to view full)
- **Responsive:** Full-width with 16px padding, maintains aspect ratio

**Block 2 - Quick Actions:**
- **Component Type:** Button group
- **Elements:**
    - Button: "Download as PNG" (save to gallery)
    - Button: "Share QR Code" (WhatsApp, email)
    - Button: "Verify on Blockchain" (open block explorer)
- **Responsive:** Horizontal on tablet, vertical stack on mobile

**Block 3 - How to Use Section:**
- **Component Type:** Accordion/collapsible panel
- **Elements:**
    - Panel 1: "At Checkpoints" - Instructions for showing ID to officials
    - Panel 2: "At Hotels" - How to use for check-in
    - Panel 3: "If ID is Lost" - Contact helpline, freeze ID on blockchain
- **Responsive:** Full-width, one panel open at a time

**Block 4 - Validity Reminder:**
- **Component Type:** Alert box (info)
- **Elements:**
    - Icon: (schedule)
    - Message: "Your ID expires in 35 days. Plan your return or extend your stay."
    - Button: "Extend Validity" (if feature enabled)
- **Responsive:** Full-width banner

**Navigation:**
- **Entry Points:** Home ID card widget, bottom tab bar
- **Exit Points:** Back to home, blockchain explorer (external)
- **Primary CTA:** "Download as PNG" (for offline use)

---

**6. Official Dashboard (`/dashboard`) - Web**

**Purpose:** Real-time monitoring hub for police and tourism officials

**Layout Type:** 3-column dashboard (sidebar | main | side panel)

**Block 1 - Sidebar Navigation (Left, 240px):**
- **Component Type:** Vertical navigation menu
- **Elements:**
    - Logo: SafeYatra with "Official Portal" subtitle
    - Menu Items:
        - Dashboard (active)
        - Tourists (with count badge: "1,245")
        - Active Alerts (with count badge: "3" in red)
        - Analytics
        - Geo-Fencing
        - Verify ID
        - Settings
    - User Profile (bottom): Photo, Name, Role (Police Officer / Tourism Officer)
    - Button: "Logout"
- **Responsive:** Collapsible on tablet/mobile, hamburger toggle

**Block 2 - Header Bar (Top, full-width):**
- **Component Type:** Fixed header with search and notifications
- **Elements:**
    - Breadcrumb: "Home > Dashboard"
    - Search Bar: "Search tourists by name, ID, location..."
    - Notifications Icon: Bell with unread count (5)
    - Quick Actions: "+ Add Tourist" (manual entry if registration offline)
- **Responsive:** Shrinks on scroll, search collapses to icon on mobile

**Block 3 - Stats Cards (4 cards, horizontal):**
- **Component Type:** Metric cards with icons and trends
- **Elements:**
    - Card 1: "Total Tourists" → 1,245 (↑ 12% from yesterday)
    - Card 2: "Currently Safe" → 1,242 (green, with checkmark)
    - Card 3: "Active Alerts" → 3 (red, pulsing, with warning icon)
    - Card 4: "Today's Check-Ins" → 87 (↑ trend arrow)
- **Responsive:** 2x2 grid on tablet, single column on mobile

**Block 4 - Live Map (Main, center-left, 60% width):**
- **Component Type:** Interactive map with clusters
- **Elements:**
    - Map: Leaflet with tourist location markers
    - Marker Clustering: Group nearby tourists into numbered clusters
    - Color-Coded Pins: Green (safe), Yellow (idle 6+ hours), Red (panic alert active)
    - Geo-Fence Overlays: Shaded polygons for restricted zones
    - Controls: Zoom, Layer toggle (satellite/terrain), Fullscreen
    - Info Panel (on marker click): Tourist name, status, last update time, "View Details" button
- **Responsive:** 100% width on mobile, below stats cards

**Block 5 - Alerts Feed (Right sidebar, 300px):**
- **Component Type:** Real-time scrollable list
- **Elements:**
    - Header: "Live Alerts" with filter dropdown (All / Panic / Geo-Fence / Idle)
    - Alert Cards (stack):
        - Card 1 (Critical): Red banner, "🚨 PANIC ALERT", Tourist name: "David Chen", Location: "Dawki River, 12km from Shillong", Time: "2 mins ago", Buttons: "Call" | "View on Map" | "Mark Safe"
        - Card 2 (Warning): Amber banner, "⚠️ Entered Restricted Zone", Tourist: "Anjali Verma", Zone: "Border Checkpoint Area", Time: "15 mins ago"
        - Card 3 (Info): Gray banner, "ℹ️ No Movement Detected", Tourist: "Rajesh Kumar", Duration: "8 hours", Last Location: "Tawang Monastery"
    - Button: "View All Alerts" (opens full-page view)
- **Responsive:** Below map on mobile, infinite scroll

**Block 6 - Quick Actions (Bottom of main area):**
- **Component Type:** Action button strip
- **Elements:**
    - Button: "Generate Daily Report" (download PDF)
    - Button: "Send Broadcast Alert" (notify all tourists in region)
    - Button: "View Heat Map" (navigate to analytics)
- **Responsive:** Full-width on mobile

**Navigation:**
- **Entry Points:** Login (official credentials), direct URL
- **Exit Points:** Tourist detail pages, alert management, analytics
- **Primary CTA:** Respond to active alerts (call, mark safe, view details)

---

**7. Tourist List Page (`/tourists`) - Web**

**Purpose:** Browse, search, and manage all registered tourists

**Layout Type:** Dashboard layout with data table

**Block 1 - Page Header:**
- **Component Type:** Title with actions
- **Elements:**
    - H1: "Registered Tourists"
    - Badge: Total count (1,245 tourists)
    - Buttons: "Export CSV" | "Add Manual Entry" | "Bulk Actions"
- **Responsive:** Buttons collapse into dropdown menu on mobile

**Block 2 - Filters & Search:**
- **Component Type:** Filter bar
- **Elements:**
    - Search Input: "Search by name, ID, or phone..."
    - Dropdown: Status (All / Safe / Alert / Idle / Missing)
    - Dropdown: Location (All / Shillong / Gangtok / Tawang / ...)
    - Date Range Picker: "Registered between"
    - Button: "Apply Filters" | "Clear All"
- **Responsive:** Stack vertically on mobile

**Block 3 - Data Table:**
- **Component Type:** Sortable, paginated table
- **Columns:**
    - Photo (thumbnail)
    - Name (sortable)
    - ID Number
    - Status (badge: Safe/Alert/Idle)
    - Current Location (city)
    - Last Updated (relative time: "5 mins ago")
    - Actions (dropdown: View | Call | Message | Mark Safe/Missing)
- **Rows:** 20 per page
- **Features:**
    - Row selection (checkboxes for bulk actions)
    - Sort by clicking column headers
    - Hover row highlights
- **Responsive:** Horizontal scroll on mobile OR collapse to card view

**Block 4 - Pagination:**
- **Component Type:** Page navigation
- **Elements:**
    - "Showing 1-20 of 1,245"
    - Buttons: "Previous" | Page numbers (1, 2, 3, ..., 63) | "Next"
    - Dropdown: Rows per page (10 / 20 / 50 / 100)
- **Responsive:** Compact on mobile (< Previous | 1 of 63 | Next >)

**Navigation:**
- **Entry Points:** Dashboard sidebar, breadcrumb navigation
- **Exit Points:** Tourist detail page (click row), dashboard (back button)
- **Primary CTA:** View tourist details (click name or "View" action)

---

**8. Panic Alert Flow - Mobile App**

**Purpose:** Emergency response workflow when tourist triggers SOS

**Flow Stages:**

**Stage 1 - Panic Button Press:**
- **Trigger:** User taps floating red panic button on any screen
- **Action:** Haptic feedback (strong vibration), sound alert (siren)
- **UI:** Full-screen modal overlay (blur background, prevent accidental dismissal)

**Stage 2 - Confirmation Dialog:**
- **Component Type:** Critical alert modal
- **Elements:**
    - Icon: Large emergency icon (red, pulsing animation)
    - Heading: "SEND PANIC ALERT?"
    - Message: "Your location will be shared with police and emergency contacts immediately."
    - Buttons:
        - "YES, SEND ALERT" (btn-accent, full-width, large)
        - "Cancel" (btn-ghost, smaller)
    - Countdown: "Auto-sending in 5... 4... 3..." (if no action, auto-confirm after 5 seconds)
- **Accessibility:** Focus trapped in modal, Esc key cancels, Enter confirms

**Stage 3 - Sending Alert:**
- **UI:** Loading state
- **Elements:**
    - Spinner animation
    - Text: "Sending your location to authorities..."
    - Progress: "Uploading location... Notifying police... Calling emergency contacts..."
- **Backend Actions (parallel):**
    1. Capture precise GPS coordinates
    2. Send push notification to nearest police station dashboard
    3. Call emergency contact #1 (auto-dial)
    4. Send SMS to all emergency contacts with location link
    5. Log alert in database with timestamp
    6. Update tourist status to "ALERT" on map

**Stage 4 - Confirmation Screen:**
- **Component Type:** Success state
- **Elements:**
    - Icon: Checkmark (success color)
    - Heading: "ALERT SENT"
    - Message: "Police have been notified. Your emergency contacts are being called."
    - Info Box:
        - "Nearest Police Station: Shillong Police Chowki (1.2 km away)"
        - "Officer Notified: Inspector Rajesh Kumar"
        - "Your Location: Lat 25.5788°, Long 91.8933°"
    - Buttons:
        - "Call Police Directly" (btn-primary, dials emergency number)
        - "Share Live Location" (btn-secondary, continuous tracking link)
        - "I'm Safe Now - Cancel Alert" (btn-ghost)
- **Auto-Actions:**
    - Phone starts calling Contact #1 (if auto-dial enabled)
    - Background location sharing activated (every 30 seconds)

**Stage 5 - Police Dashboard Update:**
- **UI (Official Side):** Alert appears in dashboard alerts feed
- **Elements:**
    - Alert Card (top of feed, red highlight, pulsing border)
    - "🚨 PANIC ALERT - HIGH PRIORITY"
    - Tourist Name: "Priya Sharma"
    - ID: "ST-2025-1234567"
    - Location: "Shillong, Police Bazar Area"
    - Map Preview: Thumbnail with marker
    - Time: "Just now"
    - Buttons: "Call Tourist" | "View on Map" | "Mark Safe" | "Dispatch Unit"
- **Auto-Actions:**
    - Desktop notification (browser alert)
    - Sound alert (siren)
    - Map marker for tourist turns red and pulses

**Stage 6 - Resolution:**
- **Scenario A (Tourist cancels):**
    - Tourist taps "I'm Safe Now"
    - Confirmation: "Are you sure? Police have been notified."
    - If confirmed: Alert marked as "False Alarm - Resolved" in dashboard

- **Scenario B (Police marks safe):**
    - Official clicks "Mark Safe" on dashboard
    - Prompt: "Has the tourist been contacted and verified safe?"
    - If confirmed: Tourist's status changes to "Safe", alert archived
    - Push notification to tourist: "You have been marked safe by authorities. Stay vigilant!"

**Navigation:**
- **Entry Points:** Panic button (floating on all app screens), voice command ("Hey Google/Siri, send SOS with SafeYatra")
- **Exit Points:** Alert sent confirmation, return to previous screen (after confirmation), live location sharing screen
- **Primary CTA:** "YES, SEND ALERT" (Stage 2), "Call Police Directly" (Stage 4)

---

### Responsive Constraints Summary

**Desktop (≥1280px):**
- Multi-column layouts (3-column dashboard, 2-column data displays)
- Full navigation visible (sidebar always open)
- Large interactive maps (60% viewport width)
- Hover states for all interactive elements
- Mouse-optimized interactions (click, hover, right-click context menus)

**Tablet (768px - 1279px):**
- 2-column layouts (collapsible sidebar + main content)
- Hamburger menu for navigation (sidebar hides by default)
- Touch-friendly buttons (minimum 44px height, 8px spacing)
- Tap gestures (no hover states, use :active for feedback)
- Adaptive typography (16px minimum for body text)

**Mobile (<768px):**
- Single-column stacked layouts (all content full-width)
- Bottom tab navigation (Home, Map, ID, Profile)
- Large panic button (72px diameter, always visible)
- Card-based UI (rounded corners, shadows for depth)
- Thumb-reachable zones (important actions at bottom, not top)
- Safe area insets (padding for notch/home indicator on iOS)
- Offline-first design (cache last-known location, queue actions)

---

### Wireframe Export Instructions

**For SIH Presentation:**

1. **Create High-Fidelity Mockups:**
    - Use Figma, Adobe XD, or Google Stitch (recommended for speed)
    - Apply SafeYatra color system (saffron primary, green secondary)
    - Use real placeholder content (sample tourist names, Indian locations)
    - Include Material Symbols Rounded icons

2. **Export Screenshots:**
    - Desktop Dashboard: 1920x1080 (full HD)
    - Mobile App Screens: 375x812 (iPhone 13/14 size) OR 360x800 (Android standard)
    - Tablet Views: 768x1024 (iPad size)

3. **Document Interactions:**
    - Annotate clickable elements with numbers/arrows
    - Show state changes (hover, active, focus)
    - Include flow diagrams (user journey: Landing → Register → Home → Panic Alert)

4. **Create Component Map:**
    - List all components used per page (Button, FormField, MapMarker, etc.)
    - Map to code file structure (components/atoms/Button.tsx)
    - Highlight reusable components (use same button in app + dashboard)

5. **Prototype (Optional):**
    - Link screens to show navigation flow
    - Add simple transitions (fade, slide)
    - Demo panic button animation (press → confirm → sending → sent)

6. **Share with Team:**
    - Export as PDF for documentation
    - Provide Figma/Stitch view access link
    - Include in GitHub repo README

---

## Implementation Roadmap (12 Days)

### Phase 1: Foundation (Days 1-2)

**Day 1: Setup & Architecture**
- Initialize Git repository
- Set up frontend (Vite + React + TypeScript + TailwindCSS + DaisyUI)
- Set up backend (Node.js + Express + TypeScript + MongoDB)
- Configure environment variables (.env files for dev/prod)
- Set up Polygon Mumbai testnet wallet (MetaMask)
- Deploy basic "Hello World" to Vercel + Render (test deployment pipeline)

**Day 2: Core Components & Blockchain**
- Build atomic components (Button, Input, Icon, Badge)
- Write Solidity smart contract for Digital ID (mint, verify, revoke functions)
- Deploy smart contract to Polygon Mumbai
- Test blockchain integration (mint test ID, verify on PolygonScan)
- Set up MongoDB schemas (User, Tourist, Alert, GeoFence)

---

### Phase 2: MVP Features (Days 3-8)

**Day 3-4: Tourist Registration & Digital ID**
- Build registration form (multi-step: personal info, documents, emergency contacts)
- Implement file upload (Cloudinary for photos)
- Create blockchain minting function (call smart contract from backend)
- Generate QR code for ID
- Build ID display page (mobile + web)

**Day 5-6: Mobile Safety App**
- Set up React Native project (Expo for faster development)
- Implement authentication (JWT login/signup)
- Build home screen (ID card widget, quick actions)
- Integrate geolocation (real-time GPS tracking)
- Implement panic button (UI + backend alert dispatch)
- Set up geo-fencing (define zones in MongoDB, check if user enters restricted area)
- Build map view (Leaflet.js for web, react-native-maps for mobile)

**Day 7-8: Official Dashboard**
- Build dashboard layout (sidebar, header, main content)
- Implement real-time map with tourist markers (Socket.io for live updates)
- Create alerts feed (panic button triggers, geo-fence violations)
- Build tourist list page (searchable table, filters)
- Implement tourist detail view (profile, location history, action buttons)
- Add QR scanner for ID verification (web camera API)

---

### Phase 3: Polish & Testing (Days 9-11)

**Day 9: AI Anomaly Detection (Basic)**
- Implement movement tracking (store GPS coordinates with timestamps)
- Write simple anomaly detection logic:
    - Flag if tourist moves >50km in <1 hour (possible vehicle theft/kidnapping)
    - Flag if no movement for 6+ hours in remote area
    - Calculate risk score based on location (distance from tourist spots, time of day)
- Display anomaly alerts in dashboard

**Day 10: Multilingual Support & Accessibility**
- Integrate i18next for internationalization
- Add language switcher (English + Hindi for MVP)
- Ensure all text is translatable (no hardcoded strings)
- Run accessibility audit (WAVE tool, Lighthouse)
- Fix contrast issues, add ARIA labels, keyboard navigation

**Day 11: End-to-End Testing & Bug Fixes**
- Test full user flow (register → login → trigger panic → verify on dashboard)
- Test on multiple devices (Android phone, iPhone, laptop, tablet)
- Fix critical bugs (authentication issues, map not loading, panic button not working)
- Optimize performance (lazy loading, code splitting, image compression)

---

### Phase 4: Presentation Prep (Day 12)

**Day 12: Demo Video & Documentation**
- Record screen demo (3-5 minutes):
    1. Tourist registers and gets digital ID
    2. Tourist travels and checks map (geo-fence alert)
    3. Tourist triggers panic button
    4. Official dashboard receives alert and responds
- Create presentation slides:
    1. Problem statement recap
    2. SafeYatra solution overview
    3. Technical architecture diagram
    4. Live demo walkthrough
    5. Impact and future roadmap
- Finalize GitHub README with:
    - Setup instructions
    - Screenshots
    - Tech stack
    - Team info
- Deploy final version (test all endpoints, ensure 99% uptime)

---

## Success Metrics

**Tourist Adoption:**
- Target: 500+ test registrations during SIH demo period
- Metric: Registration completion rate >80%
- Metric: Mobile app daily active users >60%

**Safety Response:**
- Target: Panic alert response time <2 minutes (from button press to official notification)
- Metric: 100% of panic alerts successfully delivered to dashboard
- Metric: Geo-fence accuracy >95% (correct zone detection)

**System Performance:**
- Target: Page load time <3 seconds (web dashboard)
- Target: App launch time <2 seconds (mobile)
- Target: 99%+ uptime during demo
- Target: Real-time map updates <5 second latency

**Technical Excellence:**
- Target: Zero critical security vulnerabilities (blockchain, authentication)
- Target: WCAG 2.1 AA compliance (verified with Lighthouse)
- Target: Mobile-first responsive design (works on 360px width screens)

---

## Risk Mitigation

**Technical Risks:**

1. **Blockchain Delays:**
    - Risk: Polygon Mumbai testnet can be slow/congested
    - Mitigation: Queue ID minting in background, show "Processing..." state, retry logic

2. **GPS Inaccuracy:**
    - Risk: Poor GPS signal in hills/forests (Northeast terrain)
    - Mitigation: Store last-known good location, show accuracy indicator, use cell tower triangulation as fallback

3. **Real-Time Failures:**
    - Risk: Socket.io connection drops, alerts not delivered
    - Mitigation: Implement WebSocket reconnection logic, fallback to polling, SMS alerts as backup

4. **Mobile Battery Drain:**
    - Risk: Continuous GPS tracking drains battery fast
    - Mitigation: Use smart location updates (only when moving), background geofencing (OS-level), show battery warning

**Timeline Risks:**

1. **Feature Creep:**
    - Risk: Trying to build too much in 12 days
    - Mitigation: Strict MVP scope (only P0 features), defer P1/P2 to post-hackathon

2. **Solo Development Bottleneck:**
    - Risk: One developer doing frontend + backend + mobile + blockchain
    - Mitigation: Use boilerplates/templates (create-react-app, Expo init), leverage AI coding assistants, prioritize working prototype over perfect code

---

## Post-SIH Roadmap

**Phase 3 Enhancements (Weeks 2-4):**
- Advanced AI anomaly detection (ML model trained on tourist movement patterns)
- IoT smart band integration (heart rate monitoring, SOS wristband)
- Integration with existing government databases (Crime records, weather alerts)
- Automated E-FIR generation (pre-filled police report for missing tourists)

**Scale & Deploy (Months 2-3):**
- Production deployment (AWS/Azure cloud)
- Migrate to Polygon mainnet (real blockchain, not testnet)
- Partner with Northeast state governments (MoU for pilot program)
- Onboard 10,000+ tourists across Meghalaya, Sikkim, Arunachal Pradesh

**Long-Term Vision (Year 1):**
- Expand to all Northeast states
- Mobile app in 10+ Indian languages + major international languages
- Family tracking feature (parents monitor kids' trip)
- Tourist community (reviews, safety tips, group travel coordination)
- Integration with national tourism portal (incredible india.org)

---

**END OF PRD**

---

## Additional Resources

**Design System Reference:**
- DaisyUI 5.5 Documentation: https://daisyui.com/docs/
- Material Symbols: https://fonts.google.com/icons
- OKLCH Color Picker: https://oklch.com/
- Tailwind CSS: https://tailwindcss.com/docs

**Development Tools:**
- Blockchain Explorer (Polygon Mumbai): https://mumbai.polygonscan.com/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- React Native Setup: https://reactnative.dev/docs/environment-setup
- Leaflet.js Maps: https://leafletjs.com/

**Accessibility Testing:**
- WAVE Tool: https://wave.webaim.org/
- Lighthouse (Chrome DevTools): Audit → Accessibility
- Screen Reader Testing: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)

---

**Note for Developer:**
This PRD is optimized for a 12-day SIH hackathon with a solo developer. Focus on P0 features (Digital ID + Mobile App + Dashboard) and defer P1/P2 enhancements to post-hackathon. Use this document as a reference for design decisions, component structure, and user flows. Good luck! 🚀