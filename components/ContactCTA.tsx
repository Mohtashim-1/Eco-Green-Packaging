'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react'

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-eco-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Packaging?
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our packaging experts today. We'll help you create 
              the perfect sustainable packaging solution for your brand.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="opacity-90">+92 300 123 4567</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-90">info@ecogreen-packaging.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="opacity-90">Industrial Area, Karachi, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="opacity-90">Mon - Fri: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />

              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent">
                <option value="" className="text-gray-900">Select Product Type</option>
                <option value="non-woven" className="text-gray-900">Non-woven Bags</option>
                <option value="woven" className="text-gray-900">Woven Bags</option>
                <option value="paper" className="text-gray-900">Paper Bags</option>
                <option value="zip-pouches" className="text-gray-900">Zip Pouches</option>
                <option value="standard-pouches" className="text-gray-900">Standard Pouches</option>
              </select>

              <textarea
                placeholder="Tell us about your packaging needs..."
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />

              <button
                type="submit"
                className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>

            {/* Features */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Free consultation and quote
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                Response within 24 hours
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                No obligation, no pressure
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our packaging experts are available to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923001234567"
                className="inline-flex items-center bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/923001234567"
                className="inline-flex items-center bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA 