import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'Appit has completely transformed how I connect with other designers. The community features are incredible!',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'Finally a social platform that respects privacy while delivering an amazing user experience. Highly recommend!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'The smart matching feature helped me find collaborators I never would have discovered otherwise. Game changer!',
  },
  {
    name: 'David Kim',
    role: 'Entrepreneur',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'Building my professional network has never been easier. Appit understands what modern networking should be.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Content Creator',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'The media sharing tools are top-notch. My content looks amazing and my audience engagement has skyrocketed.',
  },
  {
    name: 'Alex Martinez',
    role: 'Freelancer',
    avatar: 'https://framerusercontent.com/images/kuhko9qECy3T107ySyBKY030qg.png',
    content: 'Found my biggest clients through Appit communities. This platform truly delivers on its promises.',
  },
]

export default function Testimonials() {
  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonial" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(50, 191, 93, 0.04) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 section-container">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-appit-border rounded-full bg-appit-surface/50"
          >
            <span 
              className="text-sm text-appit-gray font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Testimonials
            </span>
          </div>
          <h2 
            className="text-[38px] md:text-[58px] lg:text-[58px] font-bold text-white mb-6 leading-[1.2]"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            Our Testimonials
          </h2>
          <p 
            className="text-appit-gray text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            See what our community has to say about their Appit experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="testimonial-track">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] mx-3 p-6 bg-appit-card border border-appit-surface rounded-16"
              >
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 
                      className="text-white font-semibold"
                      style={{ fontFamily: 'Inter Tight, sans-serif' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      className="text-appit-gray text-sm"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p 
                  className="text-appit-gray leading-relaxed"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-4 h-4 text-appit-accent" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
