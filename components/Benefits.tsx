import Image from 'next/image'

const benefits = [
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Connect Authentically',
    description: 'Build genuine relationships with like-minded individuals who share your interests and values.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Share Your Passions',
    description: 'Express yourself through rich multimedia content and engage with a community that appreciates your unique perspective.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Grow Together',
    description: 'Expand your network and discover new opportunities for personal and professional growth.',
  },
  {
    icon: 'https://framerusercontent.com/images/XkIpcSwMrPJ43PFsOEOkXMRNOL0.svg',
    title: 'Privacy First',
    description: 'Your data is yours. We prioritize your privacy with robust security measures and transparent practices.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(50, 191, 93, 0.08) 0%, transparent 60%)'
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
              Why Choose Appit
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Benefits That Matter
          </h2>
          <p 
            className="text-appit-gray text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Discover why thousands of users trust Appit for their social networking needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-appit-card border border-appit-surface rounded-20 hover:border-appit-border-light transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-14 feature-icon">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={28}
                  height={28}
                />
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-appit-gray leading-relaxed"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
