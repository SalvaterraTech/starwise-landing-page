'use client';

import { useEffect, useState } from 'react';
import { analytics } from '@/lib/mixpanel';

export default function Home() {
  const [count450, setCount450] = useState(0);
  const [count150, setCount150] = useState(0);
  const [count50, setCount50] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    analytics.trackPageView('Home');

    // Counter animations
    const duration = 2000;
    const increment450 = 450 / (duration / 16);
    const increment150 = 150 / (duration / 16);
    const increment50 = 50 / (duration / 16);

    let current450 = 0;
    let current150 = 0;
    let current50 = 0;

    const timer = setInterval(() => {
      current450 += increment450;
      current150 += increment150;
      current50 += increment50;

      if (current450 >= 450) current450 = 450;
      if (current150 >= 150) current150 = 150;
      if (current50 >= 50) current50 = 50;

      setCount450(Math.floor(current450));
      setCount150(Math.floor(current150));
      setCount50(Math.floor(current50));

      if (current450 >= 450 && current150 >= 150 && current50 >= 50) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 md:px-[60px] py-6 backdrop-blur-md bg-black/50">
        <div className="max-w-[1320px] mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold">Starwise</h1>

          <nav className="hidden md:flex gap-8 text-sm font-sans font-medium text-[#94969d]">
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ's</a>
          </nav>

          <button className="bg-white text-black font-sans font-semibold text-[18px] px-6 py-3 rounded-xl hover:scale-105 transition-transform">
            Join Waitlist
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 md:px-[60px] pt-[175px] pb-[120px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0e0e10] via-black to-black opacity-60"></div>

        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18181a] border border-[#28282c] backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#28282c] border-2 border-[#18181a]"></div>
              <div className="w-6 h-6 rounded-full bg-[#28282c] border-2 border-[#18181a]"></div>
              <div className="w-6 h-6 rounded-full bg-[#28282c] border-2 border-[#18181a]"></div>
            </div>
            <span className="text-[13px] font-sans font-medium text-[#94969d]">AI-powered interview practice</span>
          </div>

          <h1 className="font-heading font-bold text-[34px] md:text-[60px] lg:text-[64px] leading-[120%] mb-6 animate-fade-in-up delay-100">
            Struggling to explain your experience in interviews?
          </h1>

          <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%] mb-8 max-w-[600px] mx-auto animate-fade-in-up delay-200">
            Practice real answers, get instant AI-powered feedback, and improve every response before the interview.
          </p>

          <button className="bg-white text-black font-sans font-semibold text-[18px] px-6 py-4 rounded-xl hover:scale-105 transition-transform mb-8 animate-fade-in-up delay-300">
            Join Waitlist
          </button>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up delay-400">
            <span className="text-[#94969d] text-sm font-sans font-medium">App Available For</span>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-bold">iOS</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-bold">And</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative mt-16 animate-fade-in delay-500" style={{ perspective: '1000px' }}>
            <div className="w-[280px] md:w-[320px] h-[560px] md:h-[640px] mx-auto bg-[#1d1d20] rounded-[40px] p-2" style={{ transform: 'rotateY(2deg) rotateX(3deg)' }}>
              <div className="w-full h-full bg-gradient-to-b from-[#28282c] to-[#0e0e10] rounded-[32px] flex items-center justify-center">
                <span className="text-[#94969d]">App Screen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-5 md:px-[60px] border-t border-[#1d1d20]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[#94969d] text-[18px] font-sans font-medium mb-12">
            Trusted by candidates preparing for interviews worldwide
          </h2>
          <div className="flex gap-12 justify-center items-center flex-wrap opacity-40">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-[126px] h-[42px] bg-[#28282c] rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[1040px] mx-auto text-center">
          <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-20">
            Empowering candidates to answer interviews with clarity and confidence — and land the job they want.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            <div>
              <div className="text-[40px] md:text-[50px] font-heading font-bold mb-3">
                10k+
              </div>
              <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%]">
                AI-structured STAR answers
              </p>
            </div>

            <div>
              <div className="text-[40px] md:text-[50px] font-heading font-bold mb-3">
                10x
              </div>
              <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%]">
                More clarity in your answers
              </p>
            </div>

            <div>
              <div className="text-[40px] md:text-[50px] font-heading font-bold mb-3">
                50+
              </div>
              <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%]">
                Countries where Starwise is available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18181a] border border-[#28282c] backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <span className="text-[13px] font-sans font-medium text-[#94969d]">Our Benefits</span>
          </div>

          <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-6">
            Discover Starwise Benefits
          </h2>

          <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%] mb-16 max-w-[886px]">
            Unlock clearer answers, structured storytelling, and confident interview preparation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Authentic Connections', description: 'Build genuine relationships with like-minded individuals.' },
              { title: 'Global Reach', description: 'Connect with people across 50+ countries effortlessly.' },
              { title: 'Personalized Experience', description: 'Tailored content and recommendations just for you.' },
              { title: 'Community Support', description: 'Join thriving communities around your interests.' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-8 md:p-10 hover:bg-[#18181a] transition-all duration-300"
              >
                <div className="w-[60px] h-[60px] bg-[#18181a] rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-[24px] mb-3">{benefit.title}</h3>
                <p className="text-[#94969d] text-[18px] leading-[150%]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#18181a] border border-[#28282c] backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <span className="text-[13px] font-sans font-medium text-[#94969d]">Features</span>
          </div>

          <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-6">
            Discover Starwise Features
          </h2>

          <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%] mb-16 max-w-[886px]">
            Explore features designed to improve clarity, structure, and interview performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Instant Messaging', description: 'Chat seamlessly with friends and communities.' },
              { title: 'Story Sharing', description: 'Share life moments through photos and videos.' },
              { title: 'Customizable Profiles', description: 'Personalize your profile with themes and layouts.' },
              { title: 'Community Groups', description: 'Join or create groups around shared interests.' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-8 md:p-10 hover:bg-[#18181a] transition-all duration-300"
              >
                <div className="w-[60px] h-[60px] bg-[#18181a] rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-[24px] mb-3">{feature.title}</h3>
                <p className="text-[#94969d] text-[18px] leading-[150%]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#18181a] border border-[#28282c] backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <span className="text-[13px] font-sans font-medium text-[#94969d]">👑 Our Pricing</span>
            </div>

            <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-6">
              Flexible Pricing Plans
            </h2>

            <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%] mb-12 max-w-[886px] mx-auto">
              Choose a plan that fits your needs, with flexible options and transparent pricing.
            </p>

            {/* Monthly/Yearly Toggle */}
            <div className="inline-flex bg-[#18181a] border border-[#28282c] rounded-full p-1 mb-16">
              <button className="px-6 py-2 rounded-full bg-white text-black font-sans font-semibold text-[14px] transition-all">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full text-[#94969d] font-sans font-semibold text-[14px] hover:text-white transition-all">
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {/* Free Plan */}
            <div className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-10">
              <h3 className="font-heading font-bold text-[24px] mb-4">Free Plan</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-[48px] md:text-[60px]">$0</span>
                  <span className="text-[#94969d] text-[18px]">/per month</span>
                </div>
              </div>

              <p className="text-[#94969d] text-[16px] mb-8">
                Basic access with essential features.
              </p>

              <button className="w-full bg-white text-black font-sans font-semibold text-[16px] px-6 py-3 rounded-xl hover:scale-105 transition-transform mb-8">
                Get Started
              </button>

              {/* What's Included */}
              <div className="bg-black border border-[#1d1d20] rounded-[20px] p-6">
                <h4 className="font-heading font-bold text-[20px] mb-6">What's Included</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Create and customize profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Connect with other users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#28282c] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#62646c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#62646c] text-[15px] line-through">Send and receive messages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Access to basic features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#28282c] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#62646c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#62646c] text-[15px] line-through">View and share content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Receive notifications and updates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-10 relative">
              {/* Save Badge */}
              <div className="absolute top-6 right-6 bg-[#18181a] border border-[#28282c] rounded-full px-3 py-1">
                <span className="text-[#94969d] text-[12px] font-medium">Save 20% on Yearly</span>
              </div>

              <h3 className="font-heading font-bold text-[24px] mb-4">Premium Plan</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-[48px] md:text-[60px]">$10</span>
                  <span className="text-[#94969d] text-[18px]">/per month</span>
                </div>
              </div>

              <p className="text-[#94969d] text-[16px] mb-8">
                Enhanced features for new experience.
              </p>

              <button className="w-full bg-white text-black font-sans font-semibold text-[16px] px-6 py-3 rounded-xl hover:scale-105 transition-transform mb-8">
                Get Started
              </button>

              {/* What's Included */}
              <div className="bg-black border border-[#1d1d20] rounded-[20px] p-6">
                <h4 className="font-heading font-bold text-[20px] mb-6">What's Included</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Create and customize profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Connect with other users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Send and receive messages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Access to basic features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">View and share content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#aeb0b6] text-[15px]">Receive notifications and updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-16 text-center">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Emma Johnson', title: 'Founder at Specra', quote: 'Starwise has truly transformed my social life. I\'ve connected with amazing people and discovered new interests. Highly recommended!' },
              { name: 'John Doe', title: 'Founder at Nova', quote: 'The intuitive design and smart features of Starwise made it easy to find meaningful connections. It\'s become my go-to app.' },
              { name: 'John Pitt', title: 'Founder at Apex', quote: 'I love how Starwise helps me stay in touch with friends and meet new people. The app is user-friendly and effective.' },
              { name: 'Michael Brown', title: 'Founder at Novus', quote: 'With Starwise, I\'ve expanded my network and found genuine connections. The seamless interface makes socializing so much easier.' },
              { name: 'David Wilson', title: 'Founder at Boom', quote: 'Starwise\'s features are fantastic for both meeting new people and staying connected with existing friends. It\'s a must-have app.' },
              { name: 'Laura Martinez', title: 'Founder at Comet', quote: 'I\'m amazed at how Starwise\'s advanced privacy controls and customizable features have enhanced my online social experience. Truly innovative.' },
              { name: 'James Taylor', title: 'Founder at Wond', quote: 'The community support and engaging multimedia sharing on Starwise have made it my favorite platform for connecting and sharing.' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-8 hover:bg-[#18181a] transition-all duration-300"
              >
                <p className="text-[#aeb0b6] text-[18px] leading-[150%] mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-[56px] h-[56px] bg-[#28282c] rounded-full"></div>
                  <div>
                    <div className="font-heading font-semibold text-[16px]">{testimonial.name}</div>
                    <div className="text-[#797b85] text-[14px]">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-5 md:px-[60px]">
        <div className="max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#18181a] border border-[#28282c] backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <span className="text-[13px] font-sans font-medium text-[#94969d]">FAQ's</span>
          </div>

          <h2 className="font-heading font-bold text-[24px] md:text-[48px] leading-[120%] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: 'What is Starwise and who is it for?',
                answer:
                  'Starwise is an AI-powered interview preparation app for candidates who want clearer, more structured answers. Beyond feedback, Starwise also generates improved STAR-based answers using your own experiences, so you can refine and adapt them for different interviews.',
              },
              {
                question: 'How does Starwise help me prepare for interviews?',
                answer:
                  'You answer real interview questions using your own experience. Starwise analyzes your response, highlights improvements, and generates a clearer, STAR-structured version using AI — giving you a strong base that you can customize before the interview.',
              },
              {
                question: 'What is the STAR method?',
                answer:
                  'The STAR method stands for Situation, Task, Action, and Result. Starwise not only evaluates whether your answer follows STAR, but also rewrites your response using this structure, keeping your original experience while improving clarity and impact.',
              },
              {
                question: 'Is Starwise useful even if I already have experience?',
                answer:
                  'Yes. Experienced professionals often have strong backgrounds but struggle to communicate impact clearly. Starwise uses your input to generate more concise, result-driven answers, helping you highlight what really matters in senior-level interviews.',
              },
              {
                question: 'Do I need to know the STAR method beforehand?',
                answer:
                  'No. You can answer naturally. Starwise takes your raw response and automatically generates a STAR-structured version using AI, while also explaining what was improved and why.',
              },
              {
                question: 'How is AI used in Starwise?',
                answer:
                  'AI analyzes your answers, identifies gaps, and generates improved versions based on your information. The goal is not to replace your voice, but to give you a high-quality baseline that you can edit, personalize, and reuse.',
              },
              {
                question: 'Can I practice for different roles and seniority levels?',
                answer:
                  'Yes. Starwise offers questions by role, difficulty, and competency. For each answer, the AI adapts the generated improvement to the context of the role and level you’re practicing for.',
              },
              {
                question: 'Is my data and interview content private?',
                answer:
                  'Yes. Your answers are private and used only to generate feedback and improved responses for you. Starwise does not share your content with recruiters or third parties.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="bg-[#0e0e10] border border-[#1d1d20] rounded-[24px] p-6 hover:bg-[#18181a] transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="font-heading font-semibold text-[18px]">{faq.question}</span>
                  <span className="text-[#94969d] text-[24px]">
                    {openFaqIndex === index ? '–' : '+'}
                  </span>
                </div>
                {openFaqIndex === index && (
                  <div className="mt-4 text-[#aeb0b6] text-[16px] leading-[150%]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-5 md:px-[60px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#0e0e10] via-black to-black opacity-60"></div>

        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <h2 className="font-heading font-bold text-[34px] md:text-[48px] lg:text-[64px] leading-[120%] mb-6">
            Prepare smarter interviews with Starwise
          </h2>

          <p className="text-[#94969d] text-[18px] md:text-[20px] leading-[150%] mb-12 max-w-[600px] mx-auto">
            Practice real interview answers, get AI-powered feedback, and walk into interviews with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black rounded-xl px-6 py-4 hover:scale-105 transition-transform flex items-center gap-3 justify-center">
              <div className="text-left">
                <div className="text-[13px] font-medium">Get It On</div>
                <div className="text-[17px] font-semibold">Google Play</div>
              </div>
            </button>

            <button className="bg-white text-black rounded-xl px-6 py-4 hover:scale-105 transition-transform flex items-center gap-3 justify-center">
              <div className="text-left">
                <div className="text-[13px] font-medium">Download on the</div>
                <div className="text-[17px] font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 md:px-[60px] border-t border-[#1d1d20]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-heading font-bold text-[20px] mb-3">Starwise</h3>
              <p className="text-[#94969d] text-[16px] mb-2">Empower your interview performance</p>
              <p className="text-[#94969d] text-[16px] mb-4">with Starwise</p>
              <a href="mailto:hello@starwise.app" className="text-[#94969d] text-[14px] hover:text-white transition-colors">
                hello@starwise.app
              </a>
            </div>

            <div className="flex gap-16">
              <div>
                <h4 className="font-heading font-semibold text-[16px] mb-4">Pages</h4>
                <div className="space-y-2 text-[14px] text-[#94969d]">
                  <div><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></div>
                  <div><a href="#features" className="hover:text-white transition-colors">Features</a></div>
                  <div><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></div>
                  <div><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></div>
                  <div><a href="#faq" className="hover:text-white transition-colors">FAQ's</a></div>
                  <div><a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a></div>
                </div>
              </div>
            </div>

            <div className="text-[14px] text-[#94969d]">
              <p className="mb-2">Template by <a href="https://x.com/Praha37v" className="hover:text-white transition-colors">Praha</a></p>
              <p><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
