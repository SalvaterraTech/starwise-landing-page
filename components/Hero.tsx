'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const avatars = [
  '/images/avatar-1.png',
  '/images/avatar-2.png',
  '/images/avatar-3.png',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: '#000000',
        paddingTop: '175px'
      }}
    >

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1320px] px-5 lg:px-[60px]">
        {/* Badge with avatars */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center mb-4"
          style={{
            backgroundColor: 'rgb(24, 24, 26)',
            border: '1px solid rgb(40, 40, 44)',
            borderRadius: '100px',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '8px 14px 8px 8px',
            gap: '8px'
          }}
        >
          {/* Avatar Stack - 68px wide container with 28px avatars */}
          <div
            className="relative flex items-center"
            style={{ width: '68px', height: '28px' }}
          >
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="absolute rounded-full overflow-hidden"
                style={{
                  width: '28px',
                  height: '28px',
                  left: index === 0 ? '0' : index === 1 ? '50%' : undefined,
                  right: index === 2 ? '0' : undefined,
                  transform: index === 1 ? 'translateX(-50%)' : undefined,
                  zIndex: index + 1
                }}
              >
                <Image
                  src={avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '150%',
              color: '#ffffff',
              whiteSpace: 'pre'
            }}
          >
            Trusted by job seekers worldwide
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-center text-[34px] md:text-[60px] lg:text-[64px] font-bold leading-[1.2] mb-5 max-w-[800px] text-white"
          style={{ fontFamily: 'Inter Tight, sans-serif' }}
        >
          Struggling to explain your experience in interviews?
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-[480px]"
          style={{ marginBottom: '50px' }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '150%',
              color: 'rgb(148, 150, 157)'
            }}
          >
            Practice real answers, get instant AI-powered feedback, and improve every response before the interview.
          </p>
        </motion.div>

        {/* Single CTA Button - Join Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          style={{ marginBottom: '40px' }}
        >
          <Link
            href="/waitlist"
            className="bg-white text-black font-semibold rounded-12 text-[17px] hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Instrument Sans, sans-serif', padding: '20px 28px' }}
          >
            Join Waitlist
          </Link>
        </motion.div>

        {/* App Available For */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center"
          style={{ gap: '4px' }}
        >
          {/* Info icon */}
          <div className="relative" style={{ width: '20px', height: '20px' }}>
            <Image
              src="/images/icon-info.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <span
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '150%',
              color: 'rgb(121, 123, 133)',
              whiteSpace: 'pre'
            }}
          >
            App Available For
          </span>
          {/* Store icons container */}
          <div
            className="flex items-center overflow-hidden"
            style={{
              backgroundColor: 'rgb(14, 14, 16)',
              border: '1px solid rgb(29, 29, 32)',
              borderRadius: '100px',
              padding: '8px 12px',
              gap: '10px'
            }}
          >
            <div className="relative" style={{ width: '24px', height: '24px' }}>
              <Image
                src="/images/icon-playstore.svg"
                alt="Play Store"
                fill
                className="object-contain"
              />
            </div>
            <div style={{ backgroundColor: 'rgb(40, 40, 44)', width: '1px', height: '18px' }} />
            <div className="relative" style={{ width: '28px', height: '28px' }}>
              <Image
                src="/images/icon-appstore.svg"
                alt="App Store"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Phone Mockups Container */}
        <div
          className="relative w-full"
          style={{ height: '611px', overflow: 'visible', pointerEvents: 'none', userSelect: 'none' }}
        >
          {/* Right Phone - Thread screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="absolute hidden lg:block overflow-hidden"
            style={{
              right: '0',
              top: '-210px',
              width: '297px',
              height: '472px'
            }}
          >
            {/* Phone UI container */}
            <div
              className="absolute"
              style={{
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '220px',
                height: '448px'
              }}
            >
              {/* Phone frame (bezel) */}
              <Image
                src="/images/iphone-left-frame.png"
                alt=""
                fill
                className="object-cover"
                style={{ zIndex: 2 }}
              />
              {/* Screen content */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '15px',
                  left: '5px',
                  right: '23px',
                  bottom: '0',
                  borderTopLeftRadius: '38px',
                  borderTopRightRadius: '41px',
                  transform: 'rotateY(2deg) skewY(-11deg)',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/iphone-left-content.jpg"
                  alt="Thread"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Bottom gradients */}
            <div
              className="absolute left-0 right-0"
              style={{ bottom: '-2px', height: '254px', background: 'linear-gradient(180deg, transparent 0%, #000 70%, #000 100%)', zIndex: 3 }}
            />
            <div
              className="absolute left-0 right-0"
              style={{ bottom: '-2px', height: '130px', background: 'linear-gradient(180deg, transparent 0%, #000 60%, #000 100%)', zIndex: 3 }}
            />
          </motion.div>

          {/* Center Phone - Main app screen */}
          <div
            className="absolute flex justify-center w-full"
            style={{ top: '50px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden"
              style={{
                width: '260px',
                height: '515px'
              }}
            >
              {/* Phone frame (bezel) */}
              <Image
                src="/images/iphone-center-frame.png"
                alt="Mobile Frame"
                fill
                className="object-cover object-top"
                style={{ zIndex: 2 }}
              />
              {/* Screen content */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '10px',
                  left: '14px',
                  right: '14px',
                  bottom: '10px',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/iphone-center-content.jpg"
                  alt="Appit App"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Bottom gradients */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: '423px', background: 'linear-gradient(180deg, transparent, #000)', zIndex: 3 }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: '216px', background: 'linear-gradient(180deg, transparent, #000)', zIndex: 3 }}
              />
            </motion.div>
          </div>

          {/* Left Phone - Search screen */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="absolute hidden lg:block overflow-hidden"
            style={{
              left: '0',
              top: '-210px',
              width: '296px',
              height: '471px'
            }}
          >
            {/* Phone UI container */}
            <div
              className="absolute"
              style={{
                top: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '219px',
                height: '446px'
              }}
            >
              {/* Phone frame (bezel) */}
              <Image
                src="/images/iphone-right-frame.png"
                alt=""
                fill
                className="object-cover"
                style={{ zIndex: 2 }}
              />
              {/* Screen content */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '8px',
                  left: '20px',
                  right: '4px',
                  bottom: '0',
                  borderTopLeftRadius: '37px',
                  borderTopRightRadius: '34px',
                  transform: 'rotateY(-2deg) skewY(11deg)',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/iphone-right-content.jpg"
                  alt="Search"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Bottom gradients */}
            <div
              className="absolute left-0 right-0"
              style={{ bottom: '-2px', height: '254px', background: 'linear-gradient(180deg, transparent 0%, #000 70%, #000 100%)', zIndex: 3 }}
            />
            <div
              className="absolute left-0 right-0"
              style={{ bottom: '-2px', height: '130px', background: 'linear-gradient(180deg, transparent 0%, #000 60%, #000 100%)', zIndex: 3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
