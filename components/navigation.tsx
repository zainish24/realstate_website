'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { BookingModal } from './booking-modal'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-2xl shadow-2xl py-2' : 'bg-[#1a1a1a]/60 backdrop-blur-xl py-3'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/developers/dark.png"
                  alt="NAR Properties Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight tracking-tight" style={{fontFamily: 'Playfair Display, serif'}}>NAR Properties</span>
                <span className="text-[10px] text-[#DFA154] uppercase tracking-widest font-semibold">Premium Real Estate</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <Link href="/" className="text-white hover:text-[#DFA154] transition-all duration-300 font-medium uppercase text-sm tracking-wider relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFA154] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="text-white hover:text-[#DFA154] transition-all duration-300 font-medium uppercase text-sm tracking-wider relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFA154] group-hover:w-full transition-all duration-300" />
              </Link>
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link href="/services" className="text-white hover:text-[#DFA154] transition-all duration-300 font-medium uppercase text-sm tracking-wider inline-flex items-center gap-1 group">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFA154] group-hover:w-full transition-all duration-300" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-slide-down">
                    <Link href="/services" className="block px-6 py-4 hover:bg-[#DFA154]/10 transition-colors text-[#1a1a1a] font-medium">Property Sales</Link>
                    <Link href="/services" className="block px-6 py-4 hover:bg-[#DFA154]/10 transition-colors text-[#1a1a1a] font-medium">Leasing Services</Link>
                    <Link href="/services" className="block px-6 py-4 hover:bg-[#DFA154]/10 transition-colors text-[#1a1a1a] font-medium">Investment Advisory</Link>
                    <Link href="/services" className="block px-6 py-4 hover:bg-[#DFA154]/10 transition-colors text-[#1a1a1a] font-medium">Property Management</Link>
                  </div>
                )}
              </div>
              <Link href="/team" className="text-white hover:text-[#DFA154] transition-all duration-300 font-medium uppercase text-sm tracking-wider relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFA154] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="text-white hover:text-[#DFA154] transition-all duration-300 font-medium uppercase text-sm tracking-wider relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFA154] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button onClick={() => setBookingModalOpen(true)} className="relative group overflow-hidden px-6 py-2.5 rounded-full border-2 border-[#DFA154] text-white font-semibold uppercase text-xs tracking-wider transition-all duration-300 hover:border-[#c88d45]">
                <span className="relative z-10">Get A Quote</span>
                <div className="absolute inset-0 bg-gradient-to-br from-[#DFA154] to-[#c88d45] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-[#DFA154] transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pt-8 pb-4 space-y-2 animate-slide-down">
              <Link href="/" className="block px-4 py-3 text-white hover:text-[#DFA154] transition-colors font-medium uppercase text-sm tracking-wider">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-3 text-white hover:text-[#DFA154] transition-colors font-medium uppercase text-sm tracking-wider">
                About Us
              </Link>
              <Link href="/services" className="block px-4 py-3 text-white hover:text-[#DFA154] transition-colors font-medium uppercase text-sm tracking-wider">
                Services
              </Link>
              <Link href="/team" className="block px-4 py-3 text-white hover:text-[#DFA154] transition-colors font-medium uppercase text-sm tracking-wider">
                Team
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-white hover:text-[#DFA154] transition-colors font-medium uppercase text-sm tracking-wider">
                Contact Us
              </Link>
              <button onClick={() => setBookingModalOpen(true)} className="block mt-4 px-8 py-2.5 rounded-full border-2 border-[#DFA154] text-white font-semibold uppercase text-xs tracking-wider text-center bg-gradient-to-br from-[#DFA154] to-[#c88d45] w-full">
                Get A Quote
              </button>
            </div>
          )}
        </div>
      </nav>
      
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  )
}
