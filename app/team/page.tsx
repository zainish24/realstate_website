'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: 'Mohamed Beshir',
      role: 'General Manager',
      description: 'With strong leadership and industry expertise, Mohamed Beshir drives operational excellence and ensures every project is executed with precision and integrity.'
    },
    {
      name: 'Ali Alkifri',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Ali Alkifri excels at matching clients with properties that align perfectly with their lifestyle and investment goals.'
    },
    {
      name: 'Mazen Al Ashery',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Mazen Al Ashery is dedicated to guiding clients toward properties that suit their lifestyle and investment objectives.'
    },
    {
      name: 'Ertisam Rafiq',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Ertisam Rafiq is committed to helping clients find properties that perfectly fit their lifestyle and investment goals.'
    },
    {
      name: 'Mohammad Al Radaideh',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Mohammad Al Radaideh is committed to helping clients find properties that perfectly fit their lifestyle and investment goals.'
    },
    {
      name: 'Ahmad Al Jamous',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Ahmad Al Jamous is committed to helping clients find properties that perfectly fit their lifestyle and investment goals.'
    },
    {
      name: 'Yolla Hassan',
      role: 'Senior Property Consultant',
      description: 'As a Senior Property Consultant, Yolla Hassan is committed to helping clients find properties that perfectly fit their lifestyle and investment goals.'
    },
    {
      name: 'Hanney Dela Cruz',
      role: 'Marketing Specialist',
      description: 'As a Marketing Specialist, Hanney Dela Cruz is dedicated to creating effective marketing strategies that showcase properties and connect clients with their ideal homes.'
    },
    {
      name: 'Rawan Al Badawi',
      role: 'Listing Agent',
      description: 'As a Listing Agent, Rawan Al Badawi is dedicated to presenting properties in the best light and connecting sellers with the right buyers.'
    },
    {
      name: 'Mai Alisheh',
      role: 'Listing Agent',
      description: 'As a Listing Agent, Mai Alisheh is dedicated to presenting properties in the best light and connecting sellers with the right buyers.'
    },
    {
      name: 'Jo Ann Mendoza',
      role: 'CRM Specialist',
      description: 'As a CRM Specialist, Jo Ann Mendoza is committed to providing expert guidance and support in property management and client relations.'
    },
    {
      name: 'Ray Caballero',
      role: 'Human Resource / Admin Support',
      description: 'As Human Resource/Admin Support, Ray Caballero is committed to ensuring smooth operations and providing effective support to both the team and clients.'
    },

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
            alt="Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#DFA154]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold playfair">Team</h1>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h6 className="text-[#DFA154] font-semibold mb-4 tracking-wide">Meet Our Team</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] playfair mb-6">
            Teamwork That Turns <span className="text-[#DFA154]">Vision Into Reality</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Luxury NAR, our success is powered by people — passionate professionals who combine expertise, dedication, and integrity to deliver outstanding results. Together, we work with one goal in mind: to make your real estate journey seamless, rewarding, and stress-free.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#DFA154]/50 overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#DFA154]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Icon/Initial */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#DFA154] to-[#c88d45] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-3xl font-bold text-white playfair">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#DFA154] to-transparent mb-4 group-hover:w-20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] playfair mb-2 group-hover:text-[#DFA154] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#DFA154] font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#DFA154] rounded-full" />
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#DFA154] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold playfair mb-6">
            Fulfill Your Dreams, Complete <br />
            <span className="text-[#DFA154]">Your Life with Your Ideal Home.</span>
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Discover properties that perfectly match your lifestyle, whether you're buying, renting, or investing. At Luxury NAR, we make finding your dream home simple, transparent, and rewarding.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
