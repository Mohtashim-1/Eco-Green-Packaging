'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { 
  Upload, 
  Download, 
  RotateCw, 
  Palette,
  Package,
  ShoppingBag,
  FileText,
  Zap,
  Leaf,
  X,
  Check
} from 'lucide-react'

const MockupCreator = () => {
  const [selectedProduct, setSelectedProduct] = useState('non-woven')
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null)
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 50 })
  const [logoSize, setLogoSize] = useState(100)
  const [logoRotation, setLogoRotation] = useState(0)
  const [customText, setCustomText] = useState('')
  const [textColor, setTextColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [showPreview, setShowPreview] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const products = [
    { id: 'non-woven', name: 'Non-woven Bag', icon: ShoppingBag, color: 'bg-green-500' },
    { id: 'woven', name: 'Woven Bag', icon: Package, color: 'bg-amber-500' },
    { id: 'paper', name: 'Paper Bag', icon: FileText, color: 'bg-blue-500' },
    { id: 'zip-pouch', name: 'Zip Pouch', icon: Zap, color: 'bg-purple-500' },
    { id: 'standard-pouch', name: 'Standard Pouch', icon: Leaf, color: 'bg-pink-500' }
  ]

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.svg']
    },
    multiple: false
  })

  const generateMockup = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw product outline
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 2
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100)

    // Add logo if uploaded
    if (uploadedLogo) {
      const img = new Image()
      img.onload = () => {
        const x = (logoPosition.x / 100) * (canvas.width - logoSize)
        const y = (logoPosition.y / 100) * (canvas.height - logoSize)
        
        ctx.save()
        ctx.translate(x + logoSize/2, y + logoSize/2)
        ctx.rotate((logoRotation * Math.PI) / 180)
        ctx.drawImage(img, -logoSize/2, -logoSize/2, logoSize, logoSize)
        ctx.restore()
      }
      img.src = uploadedLogo
    }

    // Add custom text
    if (customText) {
      ctx.fillStyle = textColor
      ctx.font = '24px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(customText, canvas.width / 2, canvas.height - 80)
    }

    // Add product label
    ctx.fillStyle = '#666'
    ctx.font = '16px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(products.find(p => p.id === selectedProduct)?.name || '', canvas.width / 2, 30)
  }

  const downloadMockup = () => {
    if (!canvasRef.current) return
    
    const link = document.createElement('a')
    link.download = `mockup-${selectedProduct}.png`
    link.href = canvasRef.current.toDataURL()
    link.click()
  }

  const resetMockup = () => {
    setUploadedLogo(null)
    setLogoPosition({ x: 50, y: 50 })
    setLogoSize(100)
    setLogoRotation(0)
    setCustomText('')
    setTextColor('#000000')
    setBgColor('#ffffff')
  }

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
            Live{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Mockup Creator
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Upload your logo and see your custom packaging design in real-time. 
            The first of its kind in Pakistan!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Product Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Product</h3>
              <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedProduct === product.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${product.color} flex items-center justify-center mx-auto mb-2`}>
                      <product.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Upload */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Logo</h3>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                {isDragActive ? (
                  <p className="text-primary-600">Drop your logo here...</p>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">Drag & drop your logo here, or click to select</p>
                    <p className="text-sm text-gray-500">Supports: JPG, PNG, SVG</p>
                  </div>
                )}
              </div>
            </div>

            {/* Logo Controls */}
            {uploadedLogo && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Logo Controls</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">{logoSize}px</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rotation</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={logoRotation}
                    onChange={(e) => setLogoRotation(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">{logoRotation}°</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">X Position</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={logoPosition.x}
                      onChange={(e) => setLogoPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Y Position</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={logoPosition.y}
                      onChange={(e) => setLogoPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Custom Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Text</h3>
              <input
                type="text"
                placeholder="Enter custom text..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-10 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            {/* Background Color */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Background Color</h3>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-300"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={generateMockup}
                className="btn-primary flex-1"
              >
                <Check className="w-4 h-4 mr-2" />
                Generate Mockup
              </button>
              <button
                onClick={resetMockup}
                className="btn-outline"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Preview Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Preview</h3>
              <button
                onClick={downloadMockup}
                className="btn-secondary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <canvas
                ref={canvasRef}
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left text-sm text-gray-700 hover:text-primary-600">
                  • Request Quote for This Design
                </button>
                <button className="w-full text-left text-sm text-gray-700 hover:text-primary-600">
                  • Save Design for Later
                </button>
                <button className="w-full text-left text-sm text-gray-700 hover:text-primary-600">
                  • Share Design with Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MockupCreator 