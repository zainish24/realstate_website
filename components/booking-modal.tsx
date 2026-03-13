'use client'

import { X, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#DFA154]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#DFA154]" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                Request Sent!
              </h3>
              <p className="text-gray-600">Our team will contact you shortly</p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  Request a Quote
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  Fill out the form and our team will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1a] mb-1 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFA154] focus:border-transparent transition text-[#1a1a1a] text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1a] mb-1 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFA154] focus:border-transparent transition text-[#1a1a1a] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1a] mb-1 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFA154] focus:border-transparent transition text-[#1a1a1a] text-sm"
                      placeholder="+971 50 XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1a] mb-1 uppercase tracking-wider">Service Type</label>
                    <select
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFA154] focus:border-transparent transition text-[#1a1a1a] text-sm"
                    >
                      <option value="">Select a service</option>
                      <option>Property Sales</option>
                      <option>Leasing Services</option>
                      <option>Investment Advisory</option>
                      <option>Off-Plan Projects</option>
                      <option>Property Management</option>
                      <option>Consultancy</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-xs font-semibold text-[#1a1a1a] mb-1 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={2}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFA154] focus:border-transparent transition text-[#1a1a1a] text-sm"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-br from-[#DFA154] to-[#c88d45] text-white px-6 py-2.5 rounded-lg font-bold uppercase text-sm tracking-wider hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Send Request'} <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
