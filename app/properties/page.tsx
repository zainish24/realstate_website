'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapPin, Bed, Bath, Square, Heart, ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Properties() {
  const [filter, setFilter] = useState('all')

  const properties = [
    {
      id: 1,
      title: 'Luxury Apartment in Downtown Dubai',
      price: 'AED 2.5M',
      location: 'Downtown Dubai',
      beds: 3,
      baths: 2,
      sqft: 1850,
      type: 'residential',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      featured: true,
    },
    {
      id: 2,
      title: 'Modern Villa in Arabian Ranches',
      price: 'AED 3.2M',
      location: 'Arabian Ranches, Dubai',
      beds: 4,
      baths: 3,
      sqft: 3200,
      type: 'residential',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      featured: true,
    },
    {
      id: 3,
      title: 'Studio in Marina Promenade',
      price: 'AED 850K',
      location: 'Dubai Marina',
      beds: 1,
      baths: 1,
      sqft: 650,
      type: 'residential',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      featured: false,
    },
    {
      id: 4,
      title: 'Commercial Office Space',
      price: 'AED 1.8M',
      location: 'DIFC, Dubai',
      beds: 0,
      baths: 2,
      sqft: 1500,
      type: 'commercial',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      featured: true,
    },
    {
      id: 5,
      title: 'Waterfront Apartment',
      price: 'AED 2.1M',
      location: 'JBR, Dubai',
      beds: 2,
      baths: 2,
      sqft: 1450,
      type: 'residential',
      image: 'bg-gradient-to-br from-teal-400 to-teal-600',
      featured: false,
    },
    {
      id: 6,
      title: 'Investment Property',
      price: 'AED 1.5M',
      location: 'Jumeirah Village Circle',
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: 'investment',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
      featured: false,
    },
  ]

  const filteredProperties = filter === 'all' ? properties : properties.filter(p => p.type === filter)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Property Listings</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our curated selection of residential, commercial, and investment properties across the UAE
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'residential'
                  ? 'bg-primary text-white'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'commercial'
                  ? 'bg-primary text-white'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('investment')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'investment'
                  ? 'bg-primary text-white'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              Investment
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition group">
                <div className={`${property.image} h-48 relative group-hover:scale-105 transition duration-300`}>
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <button className="absolute top-4 left-4 bg-white p-2 rounded-full hover:bg-primary hover:text-white transition">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">{property.price}</div>
                  <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                    {property.beds > 0 && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.sqft.toLocaleString()} Sqft</span>
                    </div>
                  </div>
                  <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition font-semibold inline-flex items-center justify-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for personalized property recommendations and exclusive off-market listings
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-semibold">
            Get Custom Recommendations <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
