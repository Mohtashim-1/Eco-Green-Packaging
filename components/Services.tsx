'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ShoppingBag, 
  Package, 
  FileText, 
  Zap, 
  Leaf,
  ArrowRight,
  Star
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'non-woven',
      title: 'Non-Woven Bags',
      description: 'Durable, reusable bags perfect for shopping, events, and promotional campaigns',
      features: ['Water-resistant', 'Custom printing', 'Multiple sizes', 'Eco-friendly'],
      price: 'Starting from Rs. 25',
      image: '/images/non-woven-bag.jpg',
      color: 'from-green-500 to-green-600',
      icon: ShoppingBag
    },
    {
      id: 'woven',
      title: 'Woven Bags',
      description: 'Premium jute and cotton bags with excellent strength and natural appeal',
      features: ['Natural materials', 'High strength', 'Biodegradable', 'Luxury finish'],
      price: 'Starting from Rs. 45',
      image: '/images/woven-bag.jpg',
      color: 'from-amber-500 to-amber-600',
      icon: Package
    },
    {
      id: 'paper',
      title: 'Paper Bags',
      description: 'Elegant paper bags with custom designs for retail and gift packaging',
      features: ['Recyclable', 'Custom designs', 'Multiple finishes', 'Cost-effective'],
      price: 'Starting from Rs. 15',
      image: '/images/paper-bag.jpg',
      color: 'from-blue-500 to-blue-600',
      icon: FileText
    },
    {
      id: 'zip-pouches',
      title: 'Zip Pouches',
      description: 'Premium zip-lock pouches with excellent seal and custom branding',
      features: ['Airtight seal', 'Custom sizes', 'High-quality print', 'Food-safe'],
      price: 'Starting from Rs. 35',
      image: '/images/zip-pouch.jpg',
      color: 'from-purple-500 to-purple-600',
      icon: Zap
    },
    {
      id: 'standard-pouches',
      title: 'Standard Pouches',
      description: 'Versatile pouches for snacks, cosmetics, and various products',
      features: ['Multiple sizes', 'Custom printing', 'Durable material', 'Cost-effective'],
      price: 'Starting from Rs. 20',
      image: '/images/standard-pouch.jpg',
      color: 'from-pink-500 to-pink-600',
      icon: Leaf
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From eco-friendly bags to premium pouches, we offer a complete range of 
            sustainable packaging solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <service.icon className="w-16 h-16 text-white" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-primary-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-lg font-bold text-primary-600">
                    {service.price}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={`#contact`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-eco-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Custom Packaging?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us create the perfect packaging solution for your brand. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="#contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 