'use client';

import Image from 'next/image';

const features = [
  {
    icon: 'https://framerusercontent.com/images/0ZuOwnoOjO6aCuZyODXxddhTA.svg',
    title: 'Instant Messaging',
    description: 'Chat seamlessly with friends and communities.',
  },
  {
    icon: 'https://framerusercontent.com/images/VkUZshZscEaDkcpWl3Cjwsa2eTk.svg',
    title: 'Story Sharing',
    description: 'Share life moments through photos and videos.',
  },
  {
    icon: 'https://framerusercontent.com/images/cWLTQB9F2r4V1VWFjwhxL7pKw.svg',
    title: 'Customizable Profiles',
    description: 'Personalize your profile with themes and layouts.',
  },
  {
    icon: 'https://framerusercontent.com/images/TgZPYI3DkURzht1SO7C0GZKgOdE.svg',
    title: 'Community Groups',
    description: 'Join or create groups around shared interests.',
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: '1px solid rgb(29, 29, 32)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '26px', height: '26px', flexShrink: 0 }}>
          <img
            src={feature.icon}
            alt={feature.title}
            width={26}
            height={26}
            style={{ width: '26px', height: '26px', display: 'block' }}
          />
        </div>
        <h3
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '140%',
            color: '#ffffff',
            margin: 0,
          }}
        >
          {feature.title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '150%',
          color: 'rgb(148, 150, 157)',
          margin: 0,
        }}
      >
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'visible',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Top border line with gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'radial-gradient(40% 50% at 50% 50%, rgb(40, 40, 44) 0%, rgb(0, 0, 0) 100%)',
        }}
      />

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        {/* Main flex container - iPhone on left, content on right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '42px',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left side - Phone mockup inside dark card */}
          <div
            style={{
              backgroundColor: 'rgb(14, 14, 16)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '0.7992700729927007',
              height: '548px',
              maxWidth: '438px',
              flex: 'none',
            }}
          >
            {/* Background gradient image */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
              }}
            >
              <Image
                src="https://framerusercontent.com/images/Fo4i0rVb4DLMSSNWLjFTsmdrxtA.svg"
                alt="Background gradient"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Phone mockup - positioned with top 80px */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '80px',
                transform: 'translateX(-50%)',
                width: '255px',
                zIndex: 10,
              }}
            >
              <div style={{ position: 'relative' }}>
                {/* Phone frame */}
                <Image
                  src="https://framerusercontent.com/images/Ezv95KhZ472AmRHJdppXjtn7Yg8.png"
                  alt="Phone frame"
                  width={255}
                  height={486}
                  unoptimized
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                {/* Screen content */}
                <div
                  style={{
                    position: 'absolute',
                    top: '2.5%',
                    left: '5.5%',
                    right: '5.5%',
                    bottom: '2.5%',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    zIndex: 1,
                    transform: 'rotateX(-12deg) skewY(3deg)',
                  }}
                >
                  <Image
                    src="https://framerusercontent.com/images/6pEqMFLtWo7ymjMRGhPcK4QZ9g.png"
                    alt="App screenshot"
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom gradient overlay - comes after phone and sits on top */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '180px',
                overflow: 'hidden',
                flex: 'none',
                zIndex: 15,
                pointerEvents: 'none',
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0, 
                  bottom: 0, 
                  left: 0,
                  background: 'linear-gradient(to top, rgba(14, 14, 16, 1) 0%, rgba(14, 14, 16, 0.95) 15%, rgba(14, 14, 16, 0.7) 40%, transparent 100%)',
                }}
              >
                <Image
                  src="https://framerusercontent.com/images/Odm4ynlr2GaNp1uafqRsNfKV358.svg"
                  alt="Gradient"
                  width={438}
                  height={254}
                  unoptimized
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    height: '100%', 
                    objectPosition: 'center', 
                    objectFit: 'cover',
                    opacity: 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Title and Feature Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
              flex: '1 0 0px',
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Appit Social&apos;s Advanced Capabilities
            </h2>

            {/* Feature Cards Grid - 2x2 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                width: '100%',
              }}
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}