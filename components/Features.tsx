import Image from 'next/image'

const features = [
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Smart Matching',
    description: 'Our AI-powered algorithm connects you with people who truly align with your interests.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Rich Media Sharing',
    description: 'Share photos, videos, stories and more with intuitive editing tools.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Private Messaging',
    description: 'End-to-end encrypted conversations that keep your chats secure.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Community Groups',
    description: 'Create and join communities around topics you care about.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Event Discovery',
    description: 'Find local and virtual events happening in your communities.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Cross-Platform Sync',
    description: 'Seamlessly switch between devices with real-time synchronization.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(50, 191, 93, 0.05) 0%, transparent 70%)'
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-appit-border rounded-full bg-appit-surface/50"
          >
            <span 
              className="text-sm text-appit-gray font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Powerful Features
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Everything You Need
          </h2>
          <p 
            className="text-appit-gray text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Packed with features designed to enhance your social experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-appit-card border border-appit-surface rounded-16 hover:border-appit-border-light transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-12 bg-appit-surface border border-appit-border">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* Content */}
              <h3 
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-appit-gray text-sm leading-relaxed"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              <div className="phone-glow rounded-[40px] overflow-hidden border border-appit-border">
                <Image
                  src="https://framerusercontent.com/images/DMQKgkfdhfRbMnNP4lVHMmNFfY.png"
                  alt="Appit Features"
                  width={320}
                  height={660}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-6">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              Designed for Modern Social Networking
            </h3>
            <p 
              className="text-appit-gray text-lg"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Every feature is crafted with care to provide you the best social experience. 
              From intuitive design to powerful functionality, Appit has it all.
            </p>
            <ul className="space-y-4">
              {['Intuitive User Interface', 'Real-time Notifications', 'Advanced Privacy Controls', 'Seamless Integration'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-appit-accent/20">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L19 7" stroke="#32BF5D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span 
                    className="text-white font-medium"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
