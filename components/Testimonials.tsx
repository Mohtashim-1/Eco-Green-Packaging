'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      company: 'GreenMart Superstore',
      role: 'Owner',
      content: 'EcoGreen Packaging transformed our store\'s branding with their custom non-woven bags. Our customers love the eco-friendly approach and the quality is outstanding.',
      rating: 5,
      image: '/images/testimonials/ahmed-khan.jpg'
    },
    {
      id: 2,
      name: 'Fatima Ali',
      company: 'Organic Foods Pakistan',
      role: 'Marketing Manager',
      content: 'The custom pouches we ordered exceeded our expectations. The print quality is perfect and the turnaround time was incredible. Highly recommended!',
      rating: 5,
      image: '/images/testimonials/fatima-ali.jpg'
    },
    {
      id: 3,
      name: 'Muhammad Hassan',
      company: 'Luxury Cosmetics',
      role: 'CEO',
      content: 'We\'ve been working with EcoGreen for over 3 years now. Their woven bags have become a signature part of our brand. Exceptional quality and service.',
      rating: 5,
      image: '/images/testimonials/muhammad-hassan.jpg'
    },
    {
      id: 4,
      name: 'Sara Ahmed',
      company: 'Eco Boutique',
      role: 'Founder',
      content: 'Finding sustainable packaging was a challenge until we discovered EcoGreen. Their paper bags are not only beautiful but also align with our eco-conscious values.',
      rating: 5,
      image: '/images/testimonials/sara-ahmed.jpg'
    },
    {
      id: 5,
      name: 'Omar Farooq',
      company: 'SnackPak Industries',
      role: 'Production Manager',
      content: 'The zip pouches we use for our snacks are perfect. Great seal quality and the custom designs really help our products stand out on shelves.',
      rating: 5,
      image: '/images/testimonials/omar-farooq.jpg'
    },
    {
      id: 6,
      name: 'Ayesha Malik',
      company: 'Gift Gallery',
      role: 'Owner',
      content: 'EcoGreen\'s packaging solutions have helped us create memorable gift experiences. The quality and attention to detail is unmatched in Pakistan.',
      rating: 5,
      image: '/images/testimonials/ayesha-malik.jpg'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses across Pakistan 
            have to say about our packaging solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-eco-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-eco-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '1M+', label: 'Bags Produced' },
              { number: '4.9/5', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 