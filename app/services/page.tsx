'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Building2, TrendingUp, Shield, Home, Key, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 'propertysales',
      icon: Building2,
      title: 'Property Sales',
      image: '/developers/Property-Sales23.jpg',
      content: [
        "At Luxury NAR, we understand that selling or buying a property is more than a financial transaction — it's a life-changing decision. Our property sales service is designed to make that journey effortless, transparent, and rewarding.",
        "With deep expertise in the UAE real estate market, our dedicated agents guide you through every stage — from property valuation and market analysis to negotiations and final handover. We combine local market knowledge with modern marketing strategies to ensure your property gets maximum exposure and attracts the right buyers.",
        "For buyers, we take the time to understand your preferences, goals, and investment potential, ensuring you find a property that truly meets your expectations. For sellers, our goal is to secure the best possible price in the shortest time frame through strategic listing, professional presentation, and consistent communication.",
        "At Luxury NAR, we don't just close deals — we build relationships. Our commitment to integrity, professionalism, and client satisfaction ensures that your real estate experience is as smooth and successful as possible."
      ]
    },
    {
      id: 'leasingservices',
      icon: Key,
      title: 'Leasing Services',
      image: '/developers/Leasing-Services43.jpg',
      content: [
        "At Luxury NAR, we make the leasing process effortless for both tenants and landlords. Whether you're searching for your next home or managing multiple properties, our leasing services are designed to deliver comfort, confidence, and complete peace of mind.",
        "For tenants, we offer a wide selection of properties across the UAE — from stylish apartments to premium villas and commercial spaces. Our team takes the time to understand your needs, preferences, and lifestyle to help you find a property that truly feels like home.",
        "For landlords, we provide end-to-end leasing solutions, including property marketing, tenant screening, contract management, and rent collection. Our goal is to secure reliable tenants quickly and ensure consistent returns on your investment, all while maintaining full transparency and professionalism.",
        "At Luxury NAR, we believe in creating lasting relationships through trust and quality service. Whether you're leasing a single property or managing an entire portfolio, we handle every detail with care — so you can focus on what matters most."
      ]
    },
    {
      id: 'investmentadvisory',
      icon: TrendingUp,
      title: 'Investment Advisory',
      image: '/developers/Investment-Advisory.webp',
      content: [
        "At Luxury NAR, we empower our clients to make smart, confident, and profitable real estate investment decisions. With a deep understanding of the UAE property market, our team provides expert guidance that turns opportunities into long-term value.",
        "We begin by understanding your goals — whether you're seeking stable rental income, capital appreciation, or portfolio diversification. Using comprehensive market insights and data-driven analysis, we identify high-performing properties and tailor investment strategies that align with your objectives.",
        "Our advisory approach goes beyond transactions; we offer continuous support through market updates, financial analysis, and portfolio optimization. Whether you're a first-time investor or managing multiple assets, we ensure your investments are positioned for sustainable growth.",
        "At Luxury NAR, we believe that success is built on trust, transparency, and expertise. Our mission is to help you invest with clarity and confidence, creating wealth and opportunities that last for generations."
      ]
    },
    {
      id: 'offplanprojects',
      icon: Home,
      title: 'Off-Plan Projects',
      image: '/developers/Off-Plan-Projects.jpg',
      content: [
        "At Luxury NAR, we specialize in helping clients explore and invest in the most promising off-plan projects across the UAE. Whether you're a first-time buyer or a seasoned investor, our team provides expert insights and end-to-end support to help you secure properties with exceptional future potential.",
        "With access to exclusive developer launches and upcoming communities, we guide you through every stage — from project selection and payment planning to handover and investment management. Our strong relationships with top developers ensure that you receive trusted advice, transparent pricing, and priority access to the region's most sought-after developments.",
        "Investing in off-plan properties offers flexibility, affordability, and strong capital appreciation opportunities. At Luxury NAR, we make the process clear, secure, and rewarding — turning your vision of future ownership into a smart and successful reality."
      ]
    },
    {
      id: 'realestateconsultancy',
      icon: Briefcase,
      title: 'Real Estate Consultancy',
      image: '/developers/Real-Estate-Consultancy-2048x1367.jpg',
      content: [
        "At Luxury NAR, our real estate consultancy services are designed to help clients make informed, strategic, and confident property decisions. With years of experience in the UAE market, we combine local expertise and market intelligence to provide advice that truly adds value.",
        "Whether you're planning to buy, sell, invest, or develop, our consultants offer personalized guidance based on real data, market trends, and your specific goals. We take the time to understand your vision and deliver insights that help you achieve long-term success.",
        "From property valuations and feasibility studies to portfolio management and market forecasting, our consultancy solutions are tailored to meet the evolving needs of individuals, investors, and businesses.",
        "At Luxury NAR, we go beyond advice — we become your trusted partner in every decision, ensuring your real estate journey is guided by clarity, confidence, and expertise."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#DFA154]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold playfair">Our Services</h1>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="mb-20 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#DFA154] to-[#c88d45] rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-[#1a1a1a] playfair">{service.title}</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {service.content.map((paragraph, i) => (
                      <p key={i} className="text-base">{paragraph}</p>
                    ))}
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#DFA154] text-white rounded-lg font-semibold hover:bg-[#c88d45] transition-all shadow-lg hover:shadow-xl"
                  >
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop"
            alt="Luxury Property"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#DFA154]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 playfair">
            Fulfill Your Dreams, Complete <br />
            <span className="text-[#DFA154]">Your Life with Your Ideal Home.</span>
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Discover properties that perfectly match your lifestyle, whether you're buying, renting, or investing. 
            At Luxury NAR, we make finding your dream home simple, transparent, and rewarding.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Testimonial</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-2 playfair">
              Client Feedbacks <span className="text-[#DFA154]">&amp; Reviews</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mohammed A',
                location: 'Sharjah',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                text: 'Thanks to their expert investment advice, I was able to secure an off-plan property that perfectly fits my budget and goals. Great experience.'
              },
              {
                name: 'Sarah K',
                location: 'Dubai',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                text: "I've worked with several agencies before, but Luxury NAR truly stood out with their honesty and deep market knowledge. Highly recommended!"
              },
              {
                name: 'Ahmed R',
                location: 'Abu Dhabi',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                text: 'The team at Luxury NAR made my first home purchase seamless and stress-free. They guided me through every step with patience and professionalism.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
