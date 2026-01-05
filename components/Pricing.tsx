import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Basic profile customization',
      'Connect with up to 100 friends',
      'Join up to 5 communities',
      'Standard messaging',
      'Basic event discovery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '150',
    description: 'For power users who want more',
    features: [
      'Advanced profile customization',
      'Unlimited connections',
      'Unlimited community access',
      'Priority messaging',
      'Advanced event creation',
      'Analytics dashboard',
      'Custom themes',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '450',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management',
      'Branded experience',
      'API access',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(50, 191, 93, 0.06) 0%, transparent 60%)'
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
              Pricing Plans
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Simple, Transparent Pricing
          </h2>
          <p 
            className="text-appit-gray text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-20 border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-appit-card border-appit-accent pricing-popular' 
                  : 'bg-appit-card border-appit-surface hover:border-appit-border-light'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-appit-accent text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span 
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: 'Inter Tight, sans-serif' }}
                >
                  ${plan.price}
                </span>
                <span className="text-appit-gray">/month</span>
              </div>

              {/* Description */}
              <p 
                className="text-appit-gray text-sm mb-6"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg 
                      className="w-5 h-5 text-appit-accent flex-shrink-0 mt-0.5" 
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      <path d="M5 12L10 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span 
                      className="text-appit-gray text-sm"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/waitlist"
                className={`block w-full py-3 text-center font-semibold rounded-12 transition-all ${
                  plan.popular
                    ? 'bg-white text-black hover:opacity-90'
                    : 'bg-appit-surface border border-appit-border text-white hover:bg-appit-border-light'
                }`}
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
