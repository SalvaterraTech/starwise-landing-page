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
        className="pt-[40px] md:pt-[100px]"
        style={{
          backgroundColor: '#000000',
          position: 'relative',
          overflow: 'visible',
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
          className="flex flex-col md:flex-row gap-12 md:gap-[42px] items-center w-full"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left side - Phone mockup inside dark card */}
          <div
            className="w-full md:w-auto h-[380px] md:h-[548px] md:max-w-[438px]"
            style={{
              backgroundColor: 'rgb(14, 14, 16)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
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

            {/* Phone mockup - celebration image (already includes frame) */}
            <div
              className="w-[200px] md:w-[255px] top-[30px] md:top-[80px]"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
              }}
            >
              <Image
                src={`/images/${locale}/features-phone-screenshot_${locale}.png`}
                alt="App celebration"
                width={255}
                height={486}
                unoptimized
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>

            {/* Bottom gradient overlay - comes after phone and sits on top */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '280px',
                zIndex: 15,
                pointerEvents: 'none',
                background: 'linear-gradient(to top, rgb(14, 14, 16) 0%, rgba(14, 14, 16, 0.95) 20%, rgba(14, 14, 16, 0.8) 40%, rgba(14, 14, 16, 0.5) 60%, rgba(14, 14, 16, 0.2) 80%, transparent 100%)',
              }}
            />
          </div>

          {/* Right side - Title and Feature Cards */}
          <div
            className="flex flex-col gap-8 md:gap-12"
            style={{
              flex: '1 0 0px',
            }}
          >
            <h2
              className="text-[32px] md:text-[48px] text-center md:text-left"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
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
              className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
              style={{
                display: 'grid',
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