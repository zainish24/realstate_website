'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/70">Subscribe to get the latest property listings and market insights</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#DFA154]"
              />
              <button className="bg-gradient-to-r from-[#DFA154] to-[#c88d45] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/developers/1.png"
                alt="Luxury NAR Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-bold text-lg block leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>Luxury NAR</span>
                <span className="text-xs text-white/60">Luxury Real Estate</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Your trusted partner in UAE real estate. We deliver exceptional service and results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#DFA154] flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#DFA154] flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#DFA154] flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#DFA154] flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Services</Link></li>
              <li><Link href="/properties" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Properties</Link></li>
              <li><Link href="/team" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Property Sales</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Leasing Services</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Investment Advisory</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Off-Plan Projects</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#DFA154] transition flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Property Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-[#DFA154] flex-shrink-0 mt-0.5" />
                <span>123 Luxury Tower,<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-[#DFA154] flex-shrink-0" />
                <a href="tel:+971500000000" className="hover:text-[#DFA154] transition">+971 50 000 0000</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-[#DFA154] flex-shrink-0" />
                <a href="mailto:info@luxurynar.com" className="hover:text-[#DFA154] transition">info@luxurynar.com</a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-white/60 mb-1">Working Hours</p>
              <p className="text-sm font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm font-semibold">Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Luxury NAR. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#DFA154] transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#DFA154] transition">Terms & Conditions</Link>
              <Link href="#" className="hover:text-[#DFA154] transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
