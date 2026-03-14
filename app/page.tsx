'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Hero video source - using the exact YouTube video from HTML
  const heroVideoUrl = "https://www.youtube.com/embed/_5CSitKheXQ?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Fxandyproperty.com&widgetid=1&forigin=https%3A%2F%2Fxandyproperty.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Fxandyproperty.com%2Fabout-us%2F&autoplay=1&mute=1&loop=1&playlist=_5CSitKheXQ&start=110&end=210"

  // Background video for middle section
  const backgroundVideoUrl = "https://www.youtube.com/embed/_5CSitKheXQ?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Fxandyproperty.com&widgetid=1&forigin=https%3A%2F%2Fxandyproperty.com%2F&aoriginsup=1&gporigin=https%3A%2F%2Fxandyproperty.com%2Fabout-us%2F&autoplay=1&mute=1&loop=1&playlist=_5CSitKheXQ&start=110&end=210"

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Video Background - Exact match from HTML */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              ref={videoRef}
              className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2"
              src={heroVideoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ 
                pointerEvents: 'none', 
                border: 'none',
                transform: isMobile ? 'translate(-50%, -50%) scale(4)' : 'translate(-50%, -50%) scale(1.5)',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6" style={{ fontFamily: 'Mulish, sans-serif' }}>
              Your Trusted Real Estate <br className="hidden sm:block" />
              <span className="text-[#DFA154]">Partner in the UAE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Helping you buy, rent, and invest in properties with confidence.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 md:py-4 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section - Exact match from HTML */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h6 className="text-[#DFA154] font-semibold text-sm uppercase tracking-wider">About Us</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{ fontFamily: 'Mulish, sans-serif' }}>
                Crafting Your Real Estate Story <span className="text-[#DFA154]">with Expertise and Care</span>
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>At Luxury NAR, we believe every client deserves more than just a transaction — they deserve a trusted partner in their real estate journey. With years of experience in the UAE property market, we specialize in delivering seamless solutions for sales, leasing, property management, and investment advisory.</p>
                <p>Our mission is simple: to help individuals, families, and businesses find properties that not only meet their needs but also create long-term value.</p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Deep knowledge of the UAE real estate market',
                  'Tailored guidance for buyers, renters, and investors',
                  'Commitment to transparency and client satisfaction'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className="text-[#DFA154] text-xl">✓</i>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-3 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all duration-300 mt-4"
              >
                More About Us
              </Link>
            </div>

            <div className="relative">
              <div className="relative">
                <Image 
                  src="/developers/Property in Abu Dhabi.png"
                  alt="Property in Abu Dhabi"
                  width={1200}
                  height={900}
                  className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/developers/Luxury interior.jpg"
                  alt="Luxury Interior"
                  width={725}
                  height={483}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-1/2 -right-4 md:-right-6 bg-white p-4 md:p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#DFA154]">270+</div>
                  <div className="text-sm text-gray-600">Completed Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section - Exact match from HTML */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <i className="text-[#DFA154] text-2xl"></i>
              <span className="text-[#DFA154] font-semibold uppercase tracking-wider">Trusted By The Best</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Mulish, sans-serif' }}>
              We work with <span className="text-[#DFA154]">Developers</span>
            </h2>
          </div>

          {/* Infinite Scrolling Logos */}
          <div className="relative">
            <div className="flex animate-scroll">
              {[
                '/developers/emaar.png',
                '/developers/damac.png',
                '/developers/nakheel.jfif',
                '/developers/meraas.jpg',
                '/developers/aldar.png',
                '/developers/dubai properties.png'
              ].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="w-28 h-16 md:w-40 md:h-24 flex items-center justify-center">
                    <Image 
                      src={logo}
                      alt={`Developer ${index + 1}`}
                      width={160}
                      height={80}
                      className="w-auto h-auto max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                '/developers/emaar.png',
                '/developers/damac.png',
                '/developers/nakheel.jfif',
                '/developers/meraas.jpg',
                '/developers/aldar.png',
                '/developers/dubai properties.png'
              ].map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 mx-8">
                  <div className="w-28 h-16 md:w-40 md:h-24 flex items-center justify-center">
                    <Image 
                      src={logo}
                      alt={`Developer ${index + 1}`}
                      width={160}
                      height={80}
                      className="w-auto h-auto max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Services Grid - First Row */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Property Sales */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">‹</button>
                  <button className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">›</button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
                  alt="Dubai Property Sales"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Mulish, sans-serif' }}>Property Sales</h3>
                <p className="text-gray-600 mb-6">Find your perfect home or investment with ease. We connect buyers and sellers across the UAE with transparency and expertise.</p>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="text-[#DFA154] font-semibold hover:underline">More Details</Link>
                  <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#DFA154] text-white flex items-center justify-center hover:bg-[#c88a3d] transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.91L2.5 21.77l4.21-1.12c1.72.95 3.7 1.46 5.73 1.46 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.04 18.18c-1.66 0-3.29-.45-4.71-1.3l-.34-.2-2.98.8.8-2.94-.22-.36c-.92-1.45-1.41-3.13-1.41-4.87 0-4.81 3.92-8.73 8.73-8.73s8.73 3.92 8.73 8.73-3.92 8.73-8.73 8.73z"/><path d="M16.5 13.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-1.43-.7-2.53-1.25-3.52-2.38-.27-.3-.52-.65-.77-1.02-.2-.3-.02-.46.15-.61.15-.13.3-.3.45-.45.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.3 5.1 4.5.71.28 1.27.45 1.7.58.71.2 1.36.17 1.87.1.57-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Leasing Services */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">‹</button>
                  <button className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">›</button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
                  alt="Dubai Leasing Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Mulish, sans-serif' }}>Leasing Services</h3>
                <p className="text-gray-600 mb-6">From apartments to commercial spaces, we help tenants and landlords achieve hassle-free rental experiences.</p>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="text-[#DFA154] font-semibold hover:underline">More Details</Link>
                  <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#DFA154] text-white flex items-center justify-center hover:bg-[#c88a3d] transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.91L2.5 21.77l4.21-1.12c1.72.95 3.7 1.46 5.73 1.46 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.04 18.18c-1.66 0-3.29-.45-4.71-1.3l-.34-.2-2.98.8.8-2.94-.22-.36c-.92-1.45-1.41-3.13-1.41-4.87 0-4.81 3.92-8.73 8.73-8.73s8.73 3.92 8.73 8.73-3.92 8.73-8.73 8.73z"/><path d="M16.5 13.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-1.43-.7-2.53-1.25-3.52-2.38-.27-.3-.52-.65-.77-1.02-.2-.3-.02-.46.15-.61.15-.13.3-.3.45-.45.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.3 5.1 4.5.71.28 1.27.45 1.7.58.71.2 1.36.17 1.87.1.57-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Second Row */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Investment Advisory */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">‹</button>
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">›</button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop"
                  alt="Dubai Investment Advisory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: 'Mulish, sans-serif' }}>Investment Advisory</h3>
                <p className="text-gray-600 text-sm mb-4">At Luxury NAR, we help you invest with confidence. Backed by in-depth market insights and years of experience in the UAE real estate landscape, our advisory team provides strategic guidance to identify high-performing opportunities and build lasting value.</p>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="text-[#DFA154] font-semibold text-sm hover:underline">More Details</Link>
                  <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#DFA154] text-white flex items-center justify-center hover:bg-[#c88a3d] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.91L2.5 21.77l4.21-1.12c1.72.95 3.7 1.46 5.73 1.46 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.04 18.18c-1.66 0-3.29-.45-4.71-1.3l-.34-.2-2.98.8.8-2.94-.22-.36c-.92-1.45-1.41-3.13-1.41-4.87 0-4.81 3.92-8.73 8.73-8.73s8.73 3.92 8.73 8.73-3.92 8.73-8.73 8.73z"/><path d="M16.5 13.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-1.43-.7-2.53-1.25-3.52-2.38-.27-.3-.52-.65-.77-1.02-.2-.3-.02-.46.15-.61.15-.13.3-.3.45-.45.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.3 5.1 4.5.71.28 1.27.45 1.7.58.71.2 1.36.17 1.87.1.57-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Off-Plan Projects */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">‹</button>
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">›</button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                  alt="Dubai Off-Plan Projects"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: 'Mulish, sans-serif' }}>Off-Plan Projects</h3>
                <p className="text-gray-600 text-sm mb-4">At Luxury NAR, we connect our clients with the most sought-after off-plan developments across the UAE. From early investment opportunities to exclusive project launches, our experts offer comprehensive guidance to help you make informed decisions and maximize future returns.</p>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="text-[#DFA154] font-semibold text-sm hover:underline">More Details</Link>
                  <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#DFA154] text-white flex items-center justify-center hover:bg-[#c88a3d] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.91L2.5 21.77l4.21-1.12c1.72.95 3.7 1.46 5.73 1.46 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.04 18.18c-1.66 0-3.29-.45-4.71-1.3l-.34-.2-2.98.8.8-2.94-.22-.36c-.92-1.45-1.41-3.13-1.41-4.87 0-4.81 3.92-8.73 8.73-8.73s8.73 3.92 8.73 8.73-3.92 8.73-8.73 8.73z"/><path d="M16.5 13.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-1.43-.7-2.53-1.25-3.52-2.38-.27-.3-.52-.65-.77-1.02-.2-.3-.02-.46.15-.61.15-.13.3-.3.45-.45.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.3 5.1 4.5.71.28 1.27.45 1.7.58.71.2 1.36.17 1.87.1.57-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Real Estate Consultancy */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">‹</button>
                  <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/50 transition-all">›</button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Dubai Real Estate Consultancy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: 'Mulish, sans-serif' }}>Real Estate Consultancy</h3>
                <p className="text-gray-600 text-sm mb-4">At Luxury NAR, we offer expert consultancy services that empower our clients to make strategic, data-driven real estate decisions. With extensive experience in the UAE market, our team blends local insight and market intelligence to deliver guidance that creates real, lasting value.</p>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="text-[#DFA154] font-semibold text-sm hover:underline">More Details</Link>
                  <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#DFA154] text-white flex items-center justify-center hover:bg-[#c88a3d] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.91L2.5 21.77l4.21-1.12c1.72.95 3.7 1.46 5.73 1.46 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.04 18.18c-1.66 0-3.29-.45-4.71-1.3l-.34-.2-2.98.8.8-2.94-.22-.36c-.92-1.45-1.41-3.13-1.41-4.87 0-4.81 3.92-8.73 8.73-8.73s8.73 3.92 8.73 8.73-3.92 8.73-8.73 8.73z"/><path d="M16.5 13.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-1.43-.7-2.53-1.25-3.52-2.38-.27-.3-.52-.65-.77-1.02-.2-.3-.02-.46.15-.61.15-.13.3-.3.45-.45.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.3 5.1 4.5.71.28 1.27.45 1.7.58.71.2 1.36.17 1.87.1.57-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-32 bg-gray-900 overflow-hidden mb-20">
        <div className="absolute inset-0">
          <Image 
            src="/developers/full fill your dream.avif"
            alt="Fulfill Your Dreams"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Mulish, sans-serif' }}>
              Fulfill Your Dreams, Complete <br />
              <span className="text-[#DFA154]">Your Life with Your Ideal Home.</span>
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover properties that perfectly match your lifestyle, whether you're buying, renting, or investing. At Luxury NAR, we make finding your dream home simple, transparent, and rewarding.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Background Video Section with Cards Attached */}
      <section className="relative py-32 overflow-visible" style={{ zIndex: 10 }}>
        {/* Video Background */}
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ pointerEvents: 'none', border: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Mulish, sans-serif' }}>
            Crafting Your Ideal Home <br />
            <span className="text-[#DFA154]">for a Better Tomorrow.</span>
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            At Luxury NAR, we go beyond helping you find a house — we guide you towards the perfect home or investment that shapes your future. With trusted expertise in the UAE real estate market, our goal is to make your property journey seamless and rewarding.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Cards - Attached to bottom of video section */}
        <div className="absolute -bottom-32 md:-bottom-48 left-0 right-0 transform" style={{ zIndex: 1000 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  bg: '/developers/last sec 1.jpg',
                  title: 'Selecting The Right Location'
                },
                {
                  bg: '/developers/last sec 2.jpg',
                  title: 'Free Consultations with expert'
                },
                {
                  bg: '/developers/last sec 3.jpg',
                  title: 'And Experience the Comfort'
                }
              ].map((item, index) => (
                <div key={index} className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl cursor-pointer border-4 border-white transition-all duration-500 hover:-translate-y-2" style={{ backgroundColor: 'white', zIndex: 1001, position: 'relative' }}>
                  <div className="absolute inset-0">
                    <Image 
                      src={item.bg}
                      alt={`CTA ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Mulish, sans-serif' }}>{item.title}</h3>
                    <a 
                      href="tel:+971500000000" 
                      className="inline-flex items-center px-5 py-2 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing section for overlapping cards */}
      <section className="pt-32 md:pt-48 pb-20 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        {/* This provides space for the overlapping cards */}
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-6">
              <h6 className="text-[#DFA154] font-semibold text-sm uppercase tracking-wider">Why Choose us</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{ fontFamily: 'Mulish, sans-serif' }}>
                We Deliver Exceptional Services for Your <span className="text-[#DFA154]">Real Estate Journey</span>
              </h2>
              <p className="text-gray-600">
                At Luxury NAR, we go beyond transactions — we build trust, deliver value, and guide you at every step of your real estate journey in the UAE.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    icon: '📄',
                    title: 'Affordable Solutions',
                    desc: 'Tailored property options to match your lifestyle and budget without compromising on quality.'
                  },
                  {
                    icon: '📍',
                    title: 'Optimal Location',
                    desc: 'Access to the most desirable residential and commercial properties across Abu Dhabi and the UAE.'
                  },
                  {
                    icon: '🤝',
                    title: 'Reliable and Trusted',
                    desc: 'A reputation built on transparency, integrity, and long-term client relationships.'
                  },
                  {
                    icon: '🏆',
                    title: 'Certified Agent',
                    desc: 'A professional team with deep market knowledge to ensure smooth sales, leasing, and investment experiences.'
                  }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#DFA154]/10 flex items-center justify-center text-2xl text-[#DFA154]">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image 
                  src="/developers/Property Agent.png"
                  alt="Property Agent"
                  width={832}
                  height={767}
                  className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-10 -right-4 md:-right-6 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/developers/Bedroom Interior.jpg"
                  alt="Bedroom Interior"
                  width={1280}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-10 -left-4 md:-left-6 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/developers/Living room interior.jpg"
                  alt="Living Room Interior"
                  width={1280}
                  height={853}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Elevate Section */}
      <section className="py-20 bg-gray-50" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{ fontFamily: 'Mulish, sans-serif' }}>
                Elevate Your Real Estate Journey <span className="text-[#DFA154]">to the Next Level.</span>
              </h2>
              <p className="text-gray-600">
                At Luxury NAR, we combine expertise, market insight, and personalized service to help you buy, rent, or invest with confidence. From luxury residences to off-plan projects, we make your property journey seamless and rewarding.
              </p>
              <Link 
                href="#booking" 
                onClick={() => setBookingModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-[#DFA154] text-white font-semibold rounded-md hover:bg-[#c88a3d] transition-all"
              >
                Elevate Your Journey
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/developers/last sec 1.jpg"
                      alt="Real Estate Agent"
                      width={1280}
                      height={853}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/developers/last sec 2.jpg"
                      alt="Happy Family"
                      width={1280}
                      height={854}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/developers/last sec 3.jpg"
                      alt="Business Meeting"
                      width={1280}
                      height={854}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h6 className="text-[#DFA154] font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Mulish, sans-serif' }}>
              Client Feedbacks <span className="text-[#DFA154]">&amp; Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-[#DFA154] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "I've worked with several agencies before, but Luxury NAR truly stood out with their honesty and deep market knowledge. Highly recommended!",
                name: 'Sarah K',
                location: 'Dubai',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
              },
              {
                text: 'The team at Luxury NAR made my first home purchase seamless and stress-free. They guided me through every step with patience and professionalism.',
                name: 'Ahmed R',
                location: 'Abu Dhabi',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
              },
              {
                text: 'Thanks to their expert investment advice, I was able to secure an off-plan property that perfectly fits my budget and goals. Great experience.',
                name: 'Mohammed A',
                location: 'Sharjah',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#DFA154] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#DFA154]/10">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <Footer />
    </div>
  )
}
