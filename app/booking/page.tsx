'use client'

import { Navigation } from '@/components/navigation'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappMessage = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Property Type:* ${formData.propertyType}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`
    const whatsappNumber = '923352911193'
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
    
    alert('Booking request submitted successfully!')
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-orange-50 overflow-hidden">
      <Navigation />
      
      <div className="h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-xl shadow-xl p-4">
            <div className="text-center mb-3">
              <h1 className="text-xl font-bold text-[#1a1a1a] mb-1" style={{fontFamily: 'Playfair Display, serif'}}>Request a Booking</h1>
              <p className="text-xs text-gray-600">Fill out the form below and our team will contact you shortly to confirm details and provide assistance.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-2.5">
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none text-xs"
              />

              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none text-xs"
              />

              <input
                type="tel"
                placeholder="+971 50 XXX XXXX"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none text-xs"
              />

              <select
                required
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none text-xs"
              >
                <option value="">Select a service</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="townhouse">Townhouse</option>
              </select>

              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none text-xs"
              />

              <textarea
                placeholder="Any specific requirements or questions..."
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none resize-none text-xs"
              />

              <button
                type="submit"
                className="md:col-span-2 w-full luxury-gradient text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
