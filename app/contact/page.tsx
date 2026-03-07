'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const service = formData.get('service')
    const message = formData.get('message')
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`
    const whatsappNumber = '923352911193'
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
    
    setFormSubmitted(true)
  }

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
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-white/20">Contact Us</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            Let's Start Your<br />Real Estate Journey
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Connect with our expert team for personalized guidance and solutions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'Visit Us', text: 'Business Bay\nDubai, UAE' },
              { icon: Phone, title: 'Call Us', text: '+971 4 XXX XXXX\n+971 50 XXX XXXX' },
              { icon: Mail, title: 'Email Us', text: 'info@xyproperties.com\nsales@xyproperties.com' },
              { icon: Clock, title: 'Working Hours', text: 'Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-600 mb-6">Fill out the form and our team will get back to you within 24 hours</p>
              
              {formSubmitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-[#FF6B00] font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-lg px-4 py-3 bg-slate-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition border border-gray-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg px-4 py-3 bg-slate-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition border border-gray-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+971 50 XXX XXXX"
                        className="w-full rounded-lg px-4 py-3 bg-slate-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition border border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">Service Interested</label>
                      <select name="service" className="w-full rounded-lg px-4 py-3 bg-slate-50 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition border border-gray-200">
                        <option>Select a service</option>
                        <option>Property Sales</option>
                        <option>Leasing Services</option>
                        <option>Investment Advisory</option>
                        <option>Off-Plan Projects</option>
                        <option>Property Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#1a1a1a] font-semibold mb-2 text-sm">Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your real estate needs..."
                      rows={5}
                      className="w-full rounded-lg px-4 py-3 bg-slate-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition border border-gray-200"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full luxury-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Map & Quick Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-3">Location</span>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Find Us Here
                </h3>
                
                {/* Map */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1739788087!2d55.26395!3d25.186111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85bf%3A0xa5bbe7ede8423124!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a href="tel:+97144000000" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                    <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 uppercase">Call Now</p>
                      <p className="font-semibold">+971 4 XXX XXXX</p>
                    </div>
                  </a>
                  <a href="mailto:info@xyproperties.com" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                    <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 uppercase">Email Us</p>
                      <p className="font-semibold">info@xyproperties.com</p>
                    </div>
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                    <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 uppercase">Get Directions</p>
                      <p className="font-semibold">Business Bay, Dubai</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
              <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
                Visit Our Office
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Drop by our Dubai office for a face-to-face consultation with our expert team
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+97144000000" className="luxury-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
                <a href="mailto:info@xyproperties.com" className="bg-white border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B00] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
