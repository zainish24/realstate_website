'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Linkedin, ArrowRight, Award, Users, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Team() {
  const teamMembers = [
    {
      name: 'Ahmed Al Mansouri',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years transforming Dubai real estate landscape',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
      specialties: ['Strategic Planning', 'Market Analysis', 'Investment Strategy']
    },
    {
      name: 'Fatima Al-Khaleej',
      role: 'Head of Sales',
      bio: 'Award-winning sales expert specializing in luxury properties',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
      specialties: ['Luxury Sales', 'Client Relations', 'Negotiations']
    },
    {
      name: 'Mohammed Hassan',
      role: 'Investment Advisor',
      bio: 'Strategic advisor with proven track record in high-ROI investments',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
      specialties: ['Investment Advisory', 'Portfolio Analysis', 'Risk Management']
    },
    {
      name: 'Layla Al Suwaidi',
      role: 'Property Manager',
      bio: 'Meticulous manager ensuring optimal property performance',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
      specialties: ['Property Management', 'Maintenance', 'Tenant Relations']
    },
    {
      name: 'Hassan Al Neyadi',
      role: 'Legal Consultant',
      bio: 'Expert ensuring full RERA compliance and legal protection',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
      specialties: ['Legal Compliance', 'Documentation', 'Contract Review']
    },
    {
      name: 'Maryam Al Zaabi',
      role: 'Client Success Manager',
      bio: 'Dedicated to ensuring exceptional client experiences',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop',
      specialties: ['Customer Support', 'Problem Solving', 'Follow-up']
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
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-white/20">Our Team</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Meet Our Expert<br />Professionals
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Dedicated team committed to delivering exceptional real estate service
          </p>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              What Drives Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', desc: 'Striving for perfection in every interaction' },
              { icon: Users, title: 'Integrity', desc: 'Building trust through transparency' },
              { icon: Target, title: 'Innovation', desc: 'Technology-driven modern solutions' },
              { icon: TrendingUp, title: 'Expertise', desc: 'Deep knowledge and professional excellence' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-all">
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Our Professionals</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
              Leadership & Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1" style={{fontFamily: 'Playfair Display, serif'}}>{member.name}</h3>
                    <p className="text-[#FFA500] font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, j) => (
                        <span key={j} className="bg-[#FF6B00]/10 text-[#FF6B00] rounded-full px-3 py-1 text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#FF6B00] text-white rounded-lg p-2 hover:bg-[#FFA500] transition flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="flex-1 bg-[#FFA500] text-white rounded-lg p-2 hover:bg-[#FFD700] transition flex items-center justify-center gap-2">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
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
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Join Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Ready to Work With Us?
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Whether you are looking for career opportunities or need our expert services
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="luxury-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="bg-white border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B00] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                  About Us
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
