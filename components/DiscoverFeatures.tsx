'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function DiscoverFeatures() {
  const t = useTranslations('DiscoverFeatures');
  const locale = useLocale();

  const features = [
    {
      icon: '/images/discover-icon-1.svg',
      title: t('feature1Title'),
      description: t('feature1Description'),
      image: `/images/${locale}/discover-screenshot-1_${locale}.png`,
    },
    {
      icon: '/images/discover-icon-2.svg',
      title: t('feature2Title'),
      description: t('feature2Description'),
      image: `/images/${locale}/discover-screenshot-2_${locale}.png`,
    },
    {
      icon: '/images/feature-star-generation.svg',
      title: t('feature3Title'),
      description: t('feature3Description'),
      image: `/images/${locale}/discover-screenshot-3_${locale}.png`,
    },
    {
      icon: '/images/discover-icon-4.svg',
      title: t('feature4Title'),
      description: t('feature4Description'),
      image: `/images/${locale}/discover-screenshot-4_${locale}.png`,
    },
    {
      icon: '/images/discover-icon-5.svg',
      title: t('feature5Title'),
      description: t('feature5Description'),
      image: `/images/${locale}/discover-screenshot-5_${locale}.png`,
    },
    {
      icon: '/images/discover-icon-6.svg',
      title: t('feature6Title'),
      description: t('feature6Description'),
      image: `/images/${locale}/discover-screenshot-6_${locale}.png`,
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        background: 'radial-gradient(27.274516120515756% 35.90163801120711% at 50% 0%, #131315, #000)',
        paddingTop: '80px',
        paddingBottom: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
      }}
    >
      {/* Top Stroke */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'radial-gradient(40% 50% at 50% 50%, #28282c, #000)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Header Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            alignItems: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4px',
              alignItems: 'center',
              padding: '10px 12px',
              backgroundColor: 'rgb(19, 19, 21)',
              borderRadius: '100px',
              border: '1px solid rgb(29, 29, 32)',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                position: 'relative',
              }}
            >
              <img
                src="/images/feature-star-generation.svg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0em',
                color: 'rgb(255, 255, 255)',
                margin: 0,
              }}
            >
              {t('badge')}
            </p>
          </div>

          {/* Text Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: '58px',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0em',
                color: 'rgb(255, 255, 255)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              {t('title')}
            </h2>

            {/* Paragraph Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingLeft: '320px',
                paddingRight: '320px',
              }}
            >
              <p
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  letterSpacing: '0em',
                  color: 'rgb(121, 123, 133)',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            width: '100%',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
                backgroundColor: 'transparent',
                border: '1px solid rgb(29, 29, 32)',
                borderRadius: '20px',
                padding: '0px',
                overflow: 'hidden',
              }}
            >
              {/* Card Image with Gradient Overlay */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '294px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '175px',
                    pointerEvents: 'none',
                  }}
                >
                  <img
                    src="/images/discover-badge-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '30px 30px 24px 30px',
                }}
              >
                {/* Icon and Title */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '6px',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Inter Tight", sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '150%',
                      letterSpacing: '0em',
                      color: 'rgb(255, 255, 255)',
                      margin: 0,
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '150%',
                    letterSpacing: '0em',
                    color: 'rgb(121, 123, 133)',
                    textAlign: 'left',
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
