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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                Request Sent!
              </h3>
              <p className="text-gray-600">Our team will contact you shortly</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                  Request a Booking
                </h2>
                <p className="text-sm text-gray-600">
                  Fill out the form below and our team will contact you shortly to confirm details and provide assistance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-[#1a1a1a]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-[#1a1a1a]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-[#1a1a1a]"
                    placeholder="+971 50 XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Service Type</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-[#1a1a1a]"
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

                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wider">Additional Instructions</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-[#1a1a1a]"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full luxury-gradient text-white px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wider hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70"
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
