'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Award, Users, Target, ArrowRight, CheckCircle, Building2, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden mt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/85 via-[#1a1a1a]/75 to-[#FF6B00]/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-white/20">About Us</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Your Trusted Partner<br />in Dubai Real Estate
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Delivering excellence in property solutions since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Building Trust Since 2014
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                X & Y Property was founded with a vision to transform the real estate experience in Dubai. Starting from a small office, we have grown to become one of the most trusted names in UAE property market.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our success is built on transparency, expertise, and genuine care for our clients. Every transaction is handled with the utmost professionalism and attention to detail.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { value: '500+', label: 'Properties Sold' },
                  { value: '2K+', label: 'Happy Clients' },
                  { value: '10+', label: 'Years Experience' },
                  { value: '98%', label: 'Success Rate' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-[#FF6B00]">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=250&fit=crop" alt="Dubai Marina" className="rounded-2xl shadow-lg w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=300&h=200&fit=crop" alt="Downtown" className="rounded-2xl shadow-lg w-full object-cover" />
                </div>
                <div className="space-y-3 mt-6">
                  <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=300&h=200&fit=crop" alt="Palm Jumeirah" className="rounded-2xl shadow-lg w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=250&fit=crop" alt="Luxury Villa" className="rounded-2xl shadow-lg w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              Mission & Vision
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Our Mission</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                To help individuals, families, and businesses find properties that create long-term value. We are committed to making real estate transactions seamless, transparent, and rewarding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Our Vision</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                To be the most trusted real estate partner in UAE, recognized for expertise, integrity, and commitment to client success. Making confident property decisions possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', desc: 'Striving for excellence in every interaction' },
              { icon: Users, title: 'Integrity', desc: 'Building trust through transparency' },
              { icon: Shield, title: 'Security', desc: 'Ensuring safe and secure transactions' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Leveraging technology for better solutions' }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-all">
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=400&fit=crop" alt="Dubai" className="rounded-2xl shadow-lg w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&h=400&fit=crop" alt="Skyline" className="rounded-2xl shadow-lg w-full object-cover mt-6" />
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Get Started</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Ready to Start Your Journey?
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Experience the X & Y Property difference with expert guidance and personalized service
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="luxury-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/team" className="bg-white border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B00] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                  Meet Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
