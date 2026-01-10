import Image from 'next/image';

const benefits = [
  {
    icon: 'https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg',
    title: 'Clear answers',
    description: 'Turn your experience into structured STAR answers.',
  },
  {
    icon: 'https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg',
    title: 'Interview confidence',
    description: 'Practice ahead and know exactly what to say.',
  },
  {
    icon: 'https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg',
    title: 'AI improvements',
    description: 'Get instant feedback and AI-generated answer upgrades.',
  },
  {
    icon: 'https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg',
    title: 'Smarter practice',
    description: 'Improve every answer with each practice session.',
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-[60px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              backgroundColor: 'rgb(19, 19, 21)',
              border: '1px solid rgb(29, 29, 32)',
              borderRadius: '100px',
              padding: '8px 16px',
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src="https://framerusercontent.com/images/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg"
                alt=""
                width={24}
                height={24}
                style={{ width: '24px', height: '24px' }}
              />
            </div>
            <span
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: '150%',
                color: '#ffffff',
              }}
            >
              Our Benefits
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              maxWidth: '800px',
            }}
          >
            Discover Starwise&apos;s Benefits
          </h2>

          {/* Description */}
          <p
            className="mx-auto"
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              color: 'rgb(121, 123, 133)',
              lineHeight: '150%',
              textAlign: 'center',
            }}
          >
            Everything you need to prepare better answers and perform with confidence in interviews.
          </p>
        </div>

        {/* Benefits Layout: 3 columns (cards | phone | cards) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* Left Column: First 2 cards */}
          <div className="flex flex-col gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgb(9, 9, 10)',
                  border: '1px solid rgb(29, 29, 32)',
                  borderRadius: '20px',
                  padding: '32px',
                }}
              >
                {/* Icon Container */}
                <div
                  className="mb-6"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(24, 24, 26)',
                    border: '1px solid rgb(40, 40, 44)',
                    borderRadius: '14px',
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    style={{ width: '32px', height: '32px' }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{
                    fontFamily: '"Inter Tight", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '150%',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '150%',
                    color: 'rgb(148, 150, 157)',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="relative flex justify-center self-stretch">
            {/* Parent container (aligned with cards) */}
            <div
              className="relative"
              style={{
                width: '392px',
                height: '100%',
                padding: '0px',
                zIndex: 1,
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              {/* Gradients behind the phone */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  bottom: '-220px',
                  transform: 'translateX(-50%)',
                  width: '520px',
                  height: '520px',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 30%, transparent 62%)',
                  filter: 'blur(90px)',
                  zIndex: 0,
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  bottom: '-180px',
                  transform: 'translateX(-50%)',
                  width: '420px',
                  height: '420px',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.14) 0%, transparent 65%)',
                  filter: 'blur(70px)',
                  zIndex: 0,
                }}
              />

              {/* Bottom border that fades out with the glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: '1px solid rgb(29, 29, 32)',
                  borderRadius: '20px',
                  WebkitMaskImage:
                    'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.0) 72%)',
                  maskImage:
                    'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.0) 72%)',
                  zIndex: 1,
                }}
              />

              {/* Viewport: controls the bottom crop without shrinking the parent */}
              <div
                className="absolute left-0 right-0 top-0 overflow-hidden"
                style={{
                  left: '28px',
                  right: '28px',
                  top: '0px',
                  bottom: '0px',
                  zIndex: 2,
                }}
              >

                {/* Phone frame: zoom + bottom crop (no side crop) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    width: '332px',
                    transform: 'translateX(-50%)',
                    transformOrigin: 'center',
                    zIndex: 3,
                  }}
                >
                  <Image
                    src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
                    alt="Mobile App Preview"
                    width={546}
                    height={1080}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Last 2 cards */}
          <div className="flex flex-col gap-6">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index + 2}
                style={{
                  backgroundColor: 'rgb(9, 9, 10)',
                  border: '1px solid rgb(29, 29, 32)',
                  borderRadius: '20px',
                  padding: '32px',
                }}
              >
                {/* Icon Container */}
                <div
                  className="mb-6"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(24, 24, 26)',
                    border: '1px solid rgb(40, 40, 44)',
                    borderRadius: '14px',
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    style={{ width: '32px', height: '32px' }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{
                    fontFamily: '"Inter Tight", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '150%',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '150%',
                    color: 'rgb(148, 150, 157)',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Stack all cards */}
        <div className="grid lg:hidden grid-cols-1 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgb(9, 9, 10)',
                border: '1px solid rgb(29, 29, 32)',
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              {/* Icon Container */}
              <div
                className="mb-6"
                style={{
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgb(24, 24, 26)',
                  border: '1px solid rgb(40, 40, 44)',
                  borderRadius: '14px',
                }}
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  style={{ width: '32px', height: '32px' }}
                />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '150%',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  color: 'rgb(148, 150, 157)',
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
