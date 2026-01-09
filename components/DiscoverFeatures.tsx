'use client';

import Image from 'next/image';

const features = [
  {
    icon: 'https://framerusercontent.com/images/HjUlVlaeVs5qamaZtWxKr7EoTNY.svg',
    title: 'Customizable Profiles',
    description: 'Personalize your profile with themes, layouts, and settings.',
    image: 'https://framerusercontent.com/images/X0Vl8CpTeSTA8DdhJhhjv4ll8ZQ.png',
  },
  {
    icon: 'https://framerusercontent.com/images/4d3xrHbTj5Ms5diHGITxfxhNWE.svg',
    title: 'Verified Users',
    description: 'Connect confidently with verified, authentic users on the platform.',
    image: 'https://framerusercontent.com/images/SgBTdEbC2kWCbLFQfnCHZpn3Jw.png',
  },
  {
    icon: 'https://framerusercontent.com/images/ibG0LiimnkUTSfKg66O30GRXw.svg',
    title: 'Smart Notifications',
    description: 'Get real-time alerts for the updates that matter to you.',
    image: 'https://framerusercontent.com/images/n4njaiteTaVrq1KL1O5iAE2nI8.png',
  },
  {
    icon: 'https://framerusercontent.com/images/k172RybSC5AgmTnr7g2w13DUXM.svg',
    title: 'Account Insights',
    description: 'Track your engagement and performance with detailed analytics.',
    image: 'https://framerusercontent.com/images/ccnTzZyQjyrmUv1jY98k7JQNj0.png',
  },
  {
    icon: 'https://framerusercontent.com/images/rnEb8tJo8lTbNSRlcrJXd3Hp4oY.svg',
    title: 'Easy Messaging',
    description: 'Chat seamlessly with friends and groups through an intuitive interface.',
    image: 'https://framerusercontent.com/images/9oeJvwWkztzYPVxzLFz36e0oEc.png',
  },
  {
    icon: 'https://framerusercontent.com/images/oicYIMrKrcr3XUdyPDOIw5qHg.svg',
    title: 'Post Scheduling',
    description: 'Plan and schedule posts to share content at the perfect time.',
    image: 'https://framerusercontent.com/images/tGoB3F9x6jrFw9OxuiFq40o0HEg.png',
  },
];

export default function DiscoverFeatures() {
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
                src="https://framerusercontent.com/images/kQr6giL6HveRQhi7tiDl3MKDuo.svg"
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
              Features
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
              Discover Starwise Features
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
                Explore Starwise&apos;s powerful features designed to help you prepare for interviews, practice answers, and improve your performance effortlessly.
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
                    src="https://framerusercontent.com/images/vSXeDeiftCFIZjNVBWtvTj0ibk.svg"
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
