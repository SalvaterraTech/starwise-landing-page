'use client';

import Image from 'next/image';

const capabilities = [
  { name: 'Story Sharing' },
  { name: 'Custom Profiles' },
  { name: 'Community Groups' },
  { name: 'Event Creation' },
  { name: 'Smart Notifications' },
];

export default function AdvancedCapabilities() {
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
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
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
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontSize: '58px',
                  fontWeight: 700,
                  lineHeight: '120%',
                  letterSpacing: '0em',
                  color: 'rgb(255, 255, 255)',
                  margin: 0,
                }}
              >
                Starwise&apos;s Advanced Capabilities
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
                Explore advanced capabilities designed to elevate your social experience and interactions.
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
                      src="https://framerusercontent.com/images/55fmjBtSJ5KITLoOmKA2KYcj64.svg"
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
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              {/* Google Play button */}
              <a
                href="#"
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
                    src="https://framerusercontent.com/images/iubuv2STfmPz5zeKS49tuf1E38.svg"
                    alt="Google Play"
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
                    Get It On
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
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store button */}
              <a
                href="#"
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
                    src="https://framerusercontent.com/images/Qh3hInJRKF6WFt1cZiFo08d8aXM.svg"
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
                    Download on the
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
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right mockup */}
          <div
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
                src="https://framerusercontent.com/images/Fo4i0rVb4DLMSSNWLjFTsmdrxtA.svg"
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
                  src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
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

              {/* Inner phone container for screen content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {/* Screen content with border radius and inset */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '14px',
                      bottom: '10px',
                      left: '14px',
                      borderRadius: '32px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/8xn8DXbIdPvUwm8vHUmFG9nPM.jpg"
                      alt="Screen UI"
                      width={780}
                      height={1688}
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
                </div>
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
