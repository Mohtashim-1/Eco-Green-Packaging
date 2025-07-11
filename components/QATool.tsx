'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Package, 
  Calculator, 
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react'

const QATool = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    bagType: '',
    size: '',
    purpose: '',
    printing: ''
  })
  const [recommendation, setRecommendation] = useState<any>(null)
  const [showForm, setShowForm] = useState(false)

  const questions = [
    {
      id: 'bagType',
      question: 'What type of packaging do you need?',
      options: ['Non-woven Bags', 'Woven Bags', 'Paper Bags', 'Zip Pouches', 'Standard Pouches']
    },
    {
      id: 'size',
      question: 'What size do you prefer?',
      options: ['Small (A4)', 'Medium (A3)', 'Large (A2)', 'Custom Size']
    },
    {
      id: 'purpose',
      question: 'What will you use it for?',
      options: ['Retail Shopping', 'Events/Promotions', 'Food Packaging', 'Cosmetics', 'Gifts', 'Other']
    },
    {
      id: 'printing',
      question: 'What printing option do you need?',
      options: ['No Printing', 'Logo Only', 'Full Color Design', 'Custom Artwork']
    }
  ]

  const recommendations = {
    'Non-woven Bags': {
      bestFor: 'Retail shopping, events, and promotional campaigns',
      cost: 'Rs. 25 - Rs. 150 per piece',
      features: ['Water-resistant', 'Durable', 'Reusable', 'Eco-friendly'],
      customization: ['Custom sizes', 'Logo printing', 'Full color designs', 'Handle options']
    },
    'Woven Bags': {
      bestFor: 'Premium retail, luxury brands, and eco-conscious customers',
      cost: 'Rs. 45 - Rs. 300 per piece',
      features: ['Natural materials', 'High strength', 'Biodegradable', 'Luxury finish'],
      customization: ['Jute/cotton options', 'Custom handles', 'Premium printing', 'Branded labels']
    },
    'Paper Bags': {
      bestFor: 'Retail stores, gift shops, and food packaging',
      cost: 'Rs. 15 - Rs. 80 per piece',
      features: ['Recyclable', 'Custom designs', 'Multiple finishes', 'Cost-effective'],
      customization: ['Paper quality options', 'Handle types', 'Printing techniques', 'Size variations']
    },
    'Zip Pouches': {
      bestFor: 'Food items, cosmetics, and products requiring airtight sealing',
      cost: 'Rs. 35 - Rs. 200 per piece',
      features: ['Airtight seal', 'Custom sizes', 'High-quality print', 'Food-safe'],
      customization: ['Zipper types', 'Material options', 'Print areas', 'Size ranges']
    },
    'Standard Pouches': {
      bestFor: 'Snacks, cosmetics, and various retail products',
      cost: 'Rs. 20 - Rs. 120 per piece',
      features: ['Multiple sizes', 'Custom printing', 'Durable material', 'Cost-effective'],
      customization: ['Seal types', 'Print options', 'Size variations', 'Material choices']
    }
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Generate recommendation
      const rec = recommendations[answers.bagType as keyof typeof recommendations]
      setRecommendation(rec)
      setShowForm(true)
    }
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert('Thank you! We will contact you within 24 hours with a detailed quote.')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-eco-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Packaging
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Answer a few questions and get personalized recommendations for your packaging needs
          </p>
        </motion.div>

        {/* Q&A Tool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          {!recommendation ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary-600">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {questions[currentStep].question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(questions[currentStep].id, option)}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{option}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Recommendation Display */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Perfect Match Found!
                </h3>
                <p className="text-lg text-primary-600 font-semibold mb-6">
                  {answers.bagType}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                  <p className="text-gray-600">{recommendation.bestFor}</p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Cost Range:</h4>
                  <p className="text-gray-600">{recommendation.cost}</p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {recommendation.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Customization Options:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {recommendation.customization.map((option: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-t pt-8"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Get Your Custom Quote
                  </h4>
                  <form onSubmit={handleSubmitForm} className="max-w-md mx-auto">
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Additional Requirements (Optional)"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="btn-primary w-full"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default QATool 