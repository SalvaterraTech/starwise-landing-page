'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function AdvancedCapabilities() {
  const rt = useTranslations('AdvancedCapabilities');
  const locale = useLocale();
  // Safe wrapper for t to handle potential missing keys or just alias it if needed
  const t = (key: string) => rt(key);
  const tDownload = useTranslations('Download');

  const capabilities = [
    { name: t('cap1') },
    { name: t('cap2') },
    { name: t('cap3') },
    { name: t('cap4') },
    { name: t('cap5') },
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: 'rgb(0, 0, 0)',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div
        style={{
          maxWidth: '1134px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <div
          className="flex flex-col md:flex-row gap-12 md:gap-[50px] items-center"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Left content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              flex: '1 0 0px',
            }}
          >
            {/* Title and subtitle container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Title */}
              <h2
                className="text-[32px] md:text-[58px]"
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 700,
                  lineHeight: '120%',
                  letterSpacing: '0em',
                  color: 'rgb(255, 255, 255)',
                  margin: 0,
                }}
              >
                {t('title')}
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  letterSpacing: '0em',
                  color: 'rgb(148, 150, 157)',
                  margin: 0,
                }}
              >
                {t('subtitle')}
              </p>
            </div>

            {/* Capabilities list */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div style={{ position: 'relative', width: '22px', height: '22px', flexShrink: 0 }}>
                    <Image
                      src="/images/icon-checkmark.svg"
                      alt=""
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: '17px',
                      fontWeight: 500,
                      lineHeight: '150%',
                      letterSpacing: '0em',
                      color: 'rgb(148, 150, 157)',
                      margin: 0,
                    }}
                  >
                    {capability.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div
              className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Google Play button */}
              <Link
                href="/waitlist"
                className="w-full md:w-auto"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '1px solid rgb(221, 229, 237)',
                  borderRadius: '12px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(245, 245, 245)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(255, 255, 255)';
                }}
              >
                <div style={{ position: 'relative', width: '30px', height: '30px', flexShrink: 0 }}>
                  <Image
                    src="/images/icon-playstore.svg"
                    alt="Google Play"
                    fill
                    className="object-contain"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: '80%',
                      color: 'rgb(19, 19, 21)',
                    }}
                  >
                    {tDownload('getItOn')}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      lineHeight: '80%',
                      color: 'rgb(14, 14, 16)',
                    }}
                  >
                    {tDownload('googlePlay')}
                  </span>
                </div>
              </Link>

              {/* App Store button */}
              <Link
                href="/waitlist"
                className="w-full md:w-auto"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '1px solid rgb(221, 229, 237)',
                  borderRadius: '12px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(245, 245, 245)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(255, 255, 255)';
                }}
              >
                <div style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0 }}>
                  <Image
                    src="/images/icon-appstore.svg"
                    alt="App Store"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: '80%',
                      color: 'rgb(19, 19, 21)',
                    }}
                  >
                    {tDownload('downloadOn')}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      lineHeight: '80%',
                      color: 'rgb(14, 14, 16)',
                    }}
                  >
                    {tDownload('appStore')}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right mockup */}
          <div
            className="w-full md:w-auto max-w-[300px] md:max-w-none mx-auto md:mx-0"
            style={{
              position: 'relative',
              flex: '1 0 0px',
              height: '548px',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            {/* Background SVG pattern */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 0,
              }}
            >
              <Image
                src="/images/features-bg-gradient.svg"
                alt=""
                fill
                style={{
                  objectFit: 'cover',
                }}
                unoptimized
              />
            </div>

            {/* Radial blur effect in the middle */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '300px',
                height: '300px',
                borderRadius: '100%',
                background: 'radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
                filter: 'blur(100px)',
                WebkitFilter: 'blur(100px)',
              }}
            />

            {/* Phone container with absolute positioning */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '62px',
                transform: 'translateX(-50%)',
                width: '310px',
                height: '613px',
                aspectRatio: '0.5058365758754864 / 1',
              }}
            >
              {/* Phone frame image */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={`/images/${locale}/answer_detail_prepare_${locale}.png`}
                  alt="Mobile App"
                  width={546}
                  height={1080}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                  unoptimized
                />
              </div>



              {/* Bottom gradient overlay 1 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '423px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Bottom gradient overlay 2 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '253px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
