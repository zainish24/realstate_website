'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle, Target, Award, Diamond, Building2, TrendingUp, Key, Home, Briefcase, Shield, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/85 via-[#1a1a1a]/75 to-[#DFA154]/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold playfair">About Us</h1>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-[#DFA154]/10 text-[#DFA154] text-sm font-semibold uppercase tracking-wider rounded-full">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Crafting Your Real Estate Story <span className="text-[#DFA154]">with Expertise and Care</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At NAR Properties, we believe every client deserves more than just a transaction — they deserve a trusted partner in their real estate journey. With years of experience in the UAE property market, we specialize in delivering seamless solutions for sales, leasing, property management, and investment advisory.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to help individuals, families, and businesses find properties that not only meet their needs but also create long-term value.
              </p>
              
              <div className="space-y-3 pt-4">
                {[
                  'Deep knowledge of the UAE real estate market',
                  'Tailored guidance for buyers, renters, and investors',
                  'Commitment to transparency and client satisfaction'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#DFA154] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block mt-6 px-8 py-4 bg-[#DFA154] text-white font-semibold rounded-lg hover:bg-[#c88d45] transition-all shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>

            <div className="relative">
              <div className="relative pb-8 pr-8">
                <img 
                  src="/developers/about us 1.jpg" 
                  alt="Real Estate" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#DFA154] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">270+</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="text-lg font-bold text-[#1a1a1a]">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <img 
                src="/developers/about us 2.jpg" 
                alt="Property" 
                className="absolute -top-8 -left-8 w-48 h-48 rounded-2xl shadow-xl object-cover hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#DFA154]/10 text-[#DFA154] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Our Promise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              Experience Excellence with <br/><span className="text-[#DFA154]">NAR Properties</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Vision',
                desc: 'To be a trusted leader in the UAE real estate market by delivering innovative, client-focused solutions that shape exceptional communities across Abu Dhabi and Dubai. At NAR Properties, we envision smarter, more sustainable urban living built on transparency, excellence, and long-term value.'
              },
              {
                icon: Award,
                title: 'Our Mission',
                desc: 'Our mission is to empower clients with comprehensive real estate services — from sales and leasing to property management and investment advisory. Headquartered in Abu Dhabi and actively featuring premium properties in Dubai, we are committed to delivering tailored, data-driven solutions that ensure trust, growth, and satisfaction at every step of the property journey.'
              },
              {
                icon: Diamond,
                title: 'Our Values',
                desc: 'Integrity – We build relationships based on trust, transparency, and accountability. Innovation – We embrace cutting-edge technology and modern solutions. Excellence – We pursue the highest standards in everything we do. Client-Centric Approach – We prioritize our clients\' needs, goals, and success.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DFA154] to-[#c88d45] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                <div className="w-16 h-1 bg-[#DFA154] mb-4"></div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[#DFA154]" />
              <span className="text-lg font-semibold text-[#DFA154] uppercase tracking-wider">Trusted By The Best</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              We work with <span className="text-[#DFA154]">Developers</span>
            </h2>
          </div>
          
          {/* Animated Logo Carousel */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {[
                { name: 'Emaar', logo: '/developers/emaar.png' },
                { name: 'Damac', logo: '/developers/damac.png' },
                { name: 'Nakheel', logo: '/developers/nakheel.jfif' },
                { name: 'Meraas', logo: '/developers/meraas.jpg' },
                { name: 'Aldar', logo: '/developers/aldar.png' },
                { name: 'Dubai Properties', logo: '/developers/dubai properties.png' },
              ].map((dev, i) => (
                <div key={i} className="flex-shrink-0 mx-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 w-64 h-40 flex items-center justify-center hover:shadow-xl hover:border-[#DFA154] transition-all hover:scale-105 group">
                    <img 
                      src={dev.logo} 
                      alt={dev.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Emaar', logo: '/developers/emaar.png' },
                { name: 'Damac', logo: '/developers/damac.png' },
                { name: 'Nakheel', logo: '/developers/nakheel.jfif' },
                { name: 'Meraas', logo: '/developers/meraas.jpg' },
                { name: 'Aldar', logo: '/developers/aldar.png' },
                { name: 'Dubai Properties', logo: '/developers/dubai properties.png' },
              ].map((dev, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 mx-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 w-64 h-40 flex items-center justify-center hover:shadow-xl hover:border-[#DFA154] transition-all hover:scale-105 group">
                    <img 
                      src={dev.logo} 
                      alt={dev.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#DFA154]/10 text-[#DFA154] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              Client Feedbacks <span className="text-[#DFA154]">&amp; Reviews</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "I've worked with several agencies before, but NAR Properties truly stood out with their honesty and deep market knowledge. Highly recommended!", name: 'Sarah K', location: 'Dubai' },
              { text: 'The team at NAR Properties made my first home purchase seamless and stress-free. They guided me through every step with patience and professionalism.', name: 'Ahmed R', location: 'Abu Dhabi' },
              { text: 'Thanks to their expert investment advice, I was able to secure an off-plan property that perfectly fits my budget and goals. Great experience.', name: 'Mohammed A', location: 'Sharjah' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#DFA154] text-[#DFA154]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#DFA154]/10 flex items-center justify-center">
                    <span className="text-[#DFA154] font-bold text-xl">{testimonial.name[0]}</span>
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

      <Footer />
    </div>
  )
}
