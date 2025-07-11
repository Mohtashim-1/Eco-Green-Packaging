'use client'

import { motion } from 'framer-motion'
import { 
  Leaf, 
  Zap, 
  Palette, 
  Truck, 
  Shield, 
  Globe,
  Award,
  Users
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Eco-Friendly',
      description: 'All our materials are biodegradable and environmentally sustainable',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'Quick turnaround times with our state-of-the-art manufacturing',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Full customization with your brand colors, logos, and messaging',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'Reliable shipping across Pakistan with tracking and insurance',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO certified processes with rigorous quality control standards',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Globe,
      title: 'Export Ready',
      description: 'International quality standards for global market compliance',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: '15+ years of experience in sustainable packaging solutions',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Trusted by businesses across Pakistan for their packaging needs',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              EcoGreen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation with sustainability to deliver packaging solutions 
            that not only protect your products but also enhance your brand value.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-gray-600">
              Delivering sustainable packaging solutions across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '1M+', label: 'Bags Produced' },
              { number: '100%', label: 'Eco-Friendly' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
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

export default Features 