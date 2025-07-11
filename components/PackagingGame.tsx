'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Package, 
  ShoppingBag, 
  FileText, 
  Zap, 
  Leaf,
  Trophy,
  Play,
  RotateCcw,
  Info
} from 'lucide-react'

const PackagingGame = () => {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [draggedItem, setDraggedItem] = useState<any>(null)
  const [showEducational, setShowEducational] = useState(false)

  const products = [
    { id: 1, name: 'Non-woven Bag', icon: ShoppingBag, type: 'bag', category: 'non-woven', color: 'bg-green-500' },
    { id: 2, name: 'Woven Bag', icon: Package, type: 'bag', category: 'woven', color: 'bg-amber-500' },
    { id: 3, name: 'Paper Bag', icon: FileText, type: 'bag', category: 'paper', color: 'bg-blue-500' },
    { id: 4, name: 'Zip Pouch', icon: Zap, type: 'pouch', category: 'zip', color: 'bg-purple-500' },
    { id: 5, name: 'Standard Pouch', icon: Leaf, type: 'pouch', category: 'standard', color: 'bg-pink-500' }
  ]

  const targets = [
    { id: 1, name: 'Non-woven Target', category: 'non-woven', color: 'bg-green-100 border-green-500' },
    { id: 2, name: 'Woven Target', category: 'woven', color: 'bg-amber-100 border-amber-500' },
    { id: 3, name: 'Paper Target', category: 'paper', color: 'bg-blue-100 border-blue-500' },
    { id: 4, name: 'Zip Pouch Target', category: 'zip', color: 'bg-purple-100 border-purple-500' },
    { id: 5, name: 'Standard Pouch Target', category: 'standard', color: 'bg-pink-100 border-pink-500' }
  ]

  const educationalContent = {
    'non-woven': {
      title: 'Non-Woven Bags',
      description: 'Made from polypropylene fibers, these bags are durable, reusable, and water-resistant.',
      recycling: 'Can be recycled at specialized facilities. Check local recycling guidelines.',
      benefits: ['Durable', 'Reusable', 'Water-resistant', 'Cost-effective']
    },
    'woven': {
      title: 'Woven Bags',
      description: 'Made from natural materials like jute or cotton, offering strength and eco-friendliness.',
      recycling: 'Fully biodegradable and compostable. Can be safely disposed of in organic waste.',
      benefits: ['Natural materials', 'Biodegradable', 'High strength', 'Luxury finish']
    },
    'paper': {
      title: 'Paper Bags',
      description: 'Made from recycled paper, these bags are recyclable and compostable.',
      recycling: 'Fully recyclable and compostable. Can be disposed of in paper recycling bins.',
      benefits: ['Recyclable', 'Compostable', 'Custom designs', 'Cost-effective']
    },
    'zip': {
      title: 'Zip Pouches',
      description: 'Made from food-safe materials with airtight seals for product protection.',
      recycling: 'Check local recycling guidelines. Some materials may be recyclable.',
      benefits: ['Airtight seal', 'Food-safe', 'Custom sizes', 'High-quality print']
    },
    'standard': {
      title: 'Standard Pouches',
      description: 'Versatile pouches made from various materials for different applications.',
      recycling: 'Material-dependent. Check packaging for recycling symbols.',
      benefits: ['Multiple sizes', 'Custom printing', 'Durable', 'Cost-effective']
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (gameStarted && !gameOver && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0) {
      setGameOver(true)
    }
    return () => clearTimeout(timer)
  }, [gameStarted, gameOver, timeLeft])

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setLevel(1)
    setTimeLeft(60)
    setGameOver(false)
  }

  const resetGame = () => {
    setGameStarted(false)
    setScore(0)
    setLevel(1)
    setTimeLeft(60)
    setGameOver(false)
  }

  const handleDragStart = (e: any, product: any) => {
    setDraggedItem(product)
  }

  const handleDragOver = (e: any) => {
    e.preventDefault()
  }

  const handleDrop = (e: any, target: any) => {
    e.preventDefault()
    if (draggedItem && draggedItem.category === target.category) {
      setScore(score + 10)
      if (score + 10 >= level * 50) {
        setLevel(level + 1)
      }
    } else {
      setScore(Math.max(0, score - 5))
    }
    setDraggedItem(null)
  }

  const handleEducationalClick = (category: string) => {
    setShowEducational(true)
    // You could show a modal with educational content here
    console.log('Educational content for:', category)
  }

  return (
    <section id="game" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Packaging{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Game
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Test your packaging knowledge! Drag products to their correct containers and learn about eco-friendly packaging.
          </p>
        </motion.div>

        {/* Game Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          {/* Game Stats */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{score}</div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600">{level}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-600">{timeLeft}s</div>
                <div className="text-sm text-gray-600">Time</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {!gameStarted && (
                <button onClick={startGame} className="btn-primary">
                  <Play className="w-4 h-4 mr-2" />
                  Start Game
                </button>
              )}
              {gameStarted && (
                <button onClick={resetGame} className="btn-outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {!gameStarted ? (
            /* Game Instructions */
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How to Play
              </h3>
              <div className="max-w-2xl mx-auto space-y-4 text-gray-600">
                <p>• Drag products to their matching containers</p>
                <p>• Correct matches earn 10 points</p>
                <p>• Wrong matches lose 5 points</p>
                <p>• Complete levels to advance</p>
                <p>• You have 60 seconds!</p>
              </div>
            </div>
          ) : gameOver ? (
            /* Game Over Screen */
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Game Over!
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Final Score: {score} | Level: {level}
              </p>
              <button onClick={resetGame} className="btn-primary">
                Play Again
              </button>
            </div>
          ) : (
            /* Active Game */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Products */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Drag Products Here</h3>
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      onDragStart={(e) => handleDragStart(e, product)}
                      className={`p-4 rounded-lg border-2 border-dashed border-gray-300 cursor-move hover:border-primary-500 transition-colors ${product.color} text-white text-center`}
                    >
                      <product.icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">{product.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Targets */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Drop Zones</h3>
                <div className="grid grid-cols-2 gap-4">
                  {targets.map((target) => (
                    <div
                      key={target.id}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, target)}
                      className={`p-6 rounded-lg border-2 border-dashed ${target.color} text-center min-h-[120px] flex flex-col items-center justify-center`}
                    >
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        {target.name}
                      </div>
                      <button
                        onClick={() => handleEducationalClick(target.category)}
                        className="text-xs text-primary-600 hover:text-primary-700 flex items-center"
                      >
                        <Info className="w-3 h-3 mr-1" />
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Educational Mode Toggle */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowEducational(!showEducational)}
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center mx-auto"
            >
              <Info className="w-4 h-4 mr-2" />
              Educational Mode
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PackagingGame 