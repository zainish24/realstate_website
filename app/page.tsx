'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { ArrowRight, Building2, TrendingUp, Award, Shield, Users, Star, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced with Video Background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden mt-24">
        {/* Video Background */}
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 w-full h-full object-cover scale-150"
            src="https://www.youtube.com/embed/_5CSitKheXQ?autoplay=1&mute=1&loop=1&playlist=_5CSitKheXQ&controls=0&showinfo=0&rel=0&modestbranding=1&start=110&end=210&enablejsapi=1"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: 'none', border: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/60 to-[#1a1a1a]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/20 mb-6">
                <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse" />
                <span className="text-white/90 uppercase tracking-wider">Premium Dubai Real Estate</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Discover Your Dream Property in Dubai
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Your trusted partner for buying, selling, and investing in Dubai's most prestigious properties
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button onClick={() => setBookingModalOpen(true)} className="group bg-[#FF6B00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFA500] transition-all inline-flex items-center gap-2">
                  Schedule Viewing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/services" className="bg-white/10 backdrop-blur-xl text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  Explore Properties
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '500+', label: 'Properties' },
                  { value: 'AED 2B+', label: 'Total Value' },
                  { value: '98%', label: 'Satisfaction' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold text-[#FF6B00]">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/03/dubai-marina-888.jpg" alt="Dubai Marina" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">Dubai Marina</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img src="https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/52562bbb-b866-478f-8c6e-d4a3d7b8260d-Oct-12-2025-10-05-01-5513-AM.jpg" alt="Downtown Dubai" className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">Downtown Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img src="https://www.viessmann.com.au/content/dam/public-brands/master/references/palm-islands-dubai/Palm-Islands-Dubai-Haeder-16-9-1920x1080px.jpg/_jcr_content/renditions/original./Palm-Islands-Dubai-Haeder-16-9-1920x1080px.jpg" alt="Palm Jumeirah" className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">Palm Jumeirah</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img src="https://hanlandestate.ae/media/blog/Best_Areas_for_Luxury_Villas_in_Dubai.jpg" alt="Luxury Villa" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">Luxury Villas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                With over a decade of excellence in Dubai's real estate market, we deliver exceptional results through expertise and personalized service.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { icon: Award, label: 'Award Winning' },
                  { icon: Users, label: '2000+ Clients' },
                  { icon: Shield, label: 'Secure Deals' },
                  { icon: TrendingUp, label: 'Market Experts' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:shadow-md transition-all">
                    <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-[#1a1a1a] text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group luxury-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop" alt="Modern Home" className="w-full rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=250&fit=crop" alt="Luxury Living" className="w-full rounded-2xl shadow-lg" />
                </div>
                <div className="space-y-3 mt-6">
                  <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=300&h=220&fit=crop" alt="Interior" className="w-full rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" alt="Villa" className="w-full rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Enhanced */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Property Sales', desc: 'Find your perfect home with expert guidance', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop' },
              { icon: TrendingUp, title: 'Investment Advisory', desc: 'Strategic insights for smart investments', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
              { icon: Shield, title: 'Property Management', desc: 'Maximize returns with our management', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop' }
            ].map((service, i) => (
              <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                  <button onClick={() => setBookingModalOpen(true)} className="text-[#FF6B00] font-semibold inline-flex items-center gap-2 text-sm hover:gap-3 transition-all">
                    <Link href="/services">View All Services</Link>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Compact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Meet Our Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed Al Mansouri', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
              { name: 'Fatima Al-Khaleej', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop' },
              { name: 'Mohammed Hassan', role: 'Investment Advisor', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop' }
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-80">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1" style={{fontFamily: 'Playfair Display, serif'}}>{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a1a1a]/85 to-[#1a1a1a]/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 border border-white/20">Why Choose Us</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              Dubai's Premier<br />Real Estate Partner
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">Your gateway to luxury living in the heart of Dubai</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Award Winning', desc: 'Recognized excellence in Dubai real estate market', number: '01' },
              { icon: Users, title: '2000+ Clients', desc: 'Trusted by thousands of satisfied clients across UAE', number: '02' },
              { icon: Shield, title: 'RERA Certified', desc: 'Fully licensed and compliant with Dubai regulations', number: '03' },
              { icon: TrendingUp, title: 'Market Experts', desc: 'Deep insights into Dubai property investment trends', number: '04' }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B00] to-[#FFA500] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="absolute top-6 right-6 text-white/10 text-7xl font-bold leading-none" style={{fontFamily: 'Playfair Display, serif'}}>{item.number}</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FFA500] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                    <p className="text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Compact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground" style={{fontFamily: 'Playfair Display, serif'}}>
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: 'Outstanding service! They helped me find my dream villa in Dubai Marina. Professional, knowledgeable, and truly caring.', name: 'Sarah Ahmed', role: 'Villa Owner - Dubai Marina', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop' },
              { text: 'Best investment decision I made. Their market insights and guidance were invaluable. Highly recommend!', name: 'Mohammed Ali', role: 'Property Investor', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop' },
              { text: 'Seamless experience from start to finish. They made buying my first property in Downtown Dubai stress-free and exciting.', name: 'Fatima Hassan', role: 'First-time Buyer', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop' }
            ].map((testimonial, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
                <div className="relative bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-8 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1920&h=1080&fit=crop"
            alt="Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-primary/75 to-navy/85" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider rounded-full mb-8 border border-white/20">Get Started Today</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to Find Your<br />Perfect Property in Dubai?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let our experts guide you through every step of your real estate journey
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/contact" className="group bg-gradient-to-r from-primary to-accent text-white px-12 py-5 rounded-xl font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-3 text-lg">
              Schedule Consultation 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+97144000000" className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/30 inline-flex items-center gap-3 text-lg">
              <Phone className="w-6 h-6" /> +971 4 XXX XXXX
            </a>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <Footer />
    </div>
  )
}
