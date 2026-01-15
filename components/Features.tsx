'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';



function FeatureCard({ feature }: { feature: { icon: string; title: string; description: string } }) {
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
  const t = useTranslations('Features');
  const locale = useLocale();

  const features = [
    {
      icon: '/images/feature-answer-analysis.svg',
      title: t('card1Title'),
      description: t('card1Description'),
    },
    {
      icon: '/images/feature-star-generation.svg',
      title: t('card2Title'),
      description: t('card2Description'),
    },
    {
      icon: '/images/feature-targeted-feedback.svg',
      title: t('card3Title'),
      description: t('card3Description'),
    },
    {
      icon: '/images/feature-real-interview.svg',
      title: t('card4Title'),
      description: t('card4Description'),
    },
  ];

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
                src="/images/features-bg-gradient.svg"
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
                  src="/images/features-phone-frame.png"
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
                    src={`/images/${locale}/features-phone-screenshot_${locale}.png`}
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
                height: '280px',
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
                  background: 'linear-gradient(to top, rgba(14, 14, 16, 1) 0%, rgba(14, 14, 16, 0.98) 10%, rgba(14, 14, 16, 0.9) 25%, rgba(14, 14, 16, 0.7) 45%, rgba(14, 14, 16, 0.4) 65%, rgba(14, 14, 16, 0.15) 85%, transparent 100%)',
                }}
              >
                <Image
                  src="/images/features-bottom-gradient.svg"
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
                    opacity: 0.6,
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
              {t('title')}
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