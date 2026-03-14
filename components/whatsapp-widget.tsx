'use client'

import { MessageCircle, X, Send } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = '923352911193' // Pakistan number
  
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const quickMessages = [
    'I want to buy a property',
    'I want to sell my property',
    'I need investment advice',
    'Schedule a viewing'
  ]

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 animate-slide-up">
          <div className="bg-[#25D366] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <p className="font-bold">Luxury NAR</p>
                <p className="text-xs text-white/90">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-gray-50 max-h-64 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
              <p className="text-sm text-gray-700 mb-2">👋 Hello! How can we help you today?</p>
              <p className="text-xs text-gray-500">Choose a quick message or type your own:</p>
            </div>

            <div className="space-y-2">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => setMessage(msg)}
                  className="w-full text-left bg-white hover:bg-gray-100 p-3 rounded-lg text-sm text-gray-700 transition shadow-sm"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#25D366] text-white p-2 rounded-lg hover:bg-[#20BA5A] transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center animate-bounce"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </>
  )
}
