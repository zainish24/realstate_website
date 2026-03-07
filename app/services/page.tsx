'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Building2, TrendingUp, Shield, Home, Key, Briefcase, ArrowRight, CheckCircle, Award, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Property Sales',
      desc: 'Discover your dream property from our curated portfolio of finest residential and commercial spaces',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      features: ['Residential Sales', 'Commercial Properties', 'Investment Analysis', 'Market Insights']
    },
    {
      icon: Key,
      title: 'Leasing Services',
      desc: 'Comprehensive rental solutions for tenants and landlords across premium locations',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      features: ['Apartment Leasing', 'Commercial Rental', 'Tenant Screening', 'Lease Management']
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      desc: 'Strategic guidance backed by deep market intelligence and data-driven insights',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=400&fit=crop',
      features: ['Market Analysis', 'Portfolio Strategy', 'ROI Optimization', 'Risk Assessment']
    },
    {
      icon: Home,
      title: 'Off-Plan Projects',
      desc: 'Exclusive access to most anticipated development projects with early-bird advantages',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      features: ['Pre-launch Access', 'Developer Partnerships', 'Payment Plans', 'Future Growth']
    },
    {
      icon: Briefcase,
      title: 'Property Management',
      desc: 'End-to-end management services to maximize your investment returns and property value',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop',
      features: ['Maintenance Services', 'Tenant Management', 'Rent Collection', 'Legal Compliance']
    },
    {
      icon: Shield,
      title: 'Consultancy',
      desc: 'Expert consultation backed by market intelligence and years of industry experience',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      features: ['Market Research', 'Strategic Planning', 'Due Diligence', 'Expert Guidance']
    }
  ]

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
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-white/20">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Comprehensive<br />Real Estate Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            From buying to investing, we provide end-to-end services for all your property needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-[#FF6B00] font-semibold inline-flex items-center gap-2 text-sm hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              Service Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Expert Team', desc: 'Certified professionals with deep market knowledge' },
              { icon: Shield, title: 'Transparent Process', desc: 'Complete clarity on pricing and timelines' },
              { icon: Users, title: 'Personalized Solutions', desc: 'Tailored strategies for your needs' },
              { icon: Zap, title: 'Fast Results', desc: 'Efficient processes and quick turnaround' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=400&fit=crop" alt="Dubai" className="rounded-2xl shadow-lg w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=400&fit=crop" alt="Skyline" className="rounded-2xl shadow-lg w-full object-cover mt-6" />
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Get Started</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Ready to Get Started?
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Let us help you with your real estate needs. Contact us today for a free consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="luxury-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Schedule Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="bg-white border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B00] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                  Learn More
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
