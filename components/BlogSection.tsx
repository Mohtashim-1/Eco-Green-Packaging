'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, 
  User, 
  ArrowRight,
  Leaf,
  TrendingUp,
  ShoppingBag
} from 'lucide-react'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Paper vs. Non-Woven: Which is Better for Your Brand?',
      excerpt: 'Discover the key differences between paper and non-woven bags and choose the perfect packaging solution for your business needs.',
      author: 'EcoGreen Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Packaging Guide',
      image: '/images/blog/paper-vs-nonwoven.jpg',
      slug: 'paper-vs-non-woven-bags'
    },
    {
      id: 2,
      title: '5 Eco-Friendly Packaging Trends in 2025',
      excerpt: 'Stay ahead of the curve with these emerging sustainable packaging trends that will dominate the market in 2025.',
      author: 'EcoGreen Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Trends',
      image: '/images/blog/eco-trends-2025.jpg',
      slug: 'eco-friendly-packaging-trends-2025'
    },
    {
      id: 3,
      title: 'Why Custom Pouches Drive Sales',
      excerpt: 'Learn how custom pouches can significantly boost your product sales and enhance brand recognition.',
      author: 'EcoGreen Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Marketing',
      image: '/images/blog/custom-pouches-sales.jpg',
      slug: 'custom-pouches-drive-sales'
    },
    {
      id: 4,
      title: 'The Complete Guide to Sustainable Packaging',
      excerpt: 'Everything you need to know about sustainable packaging materials, certifications, and best practices.',
      author: 'EcoGreen Team',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Guide',
      image: '/images/blog/sustainable-packaging-guide.jpg',
      slug: 'complete-guide-sustainable-packaging'
    },
    {
      id: 5,
      title: 'How to Choose the Right Bag Size for Your Products',
      excerpt: 'A comprehensive guide to selecting the perfect bag size for different product types and use cases.',
      author: 'EcoGreen Team',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Tips',
      image: '/images/blog/bag-size-guide.jpg',
      slug: 'choose-right-bag-size'
    },
    {
      id: 6,
      title: 'The Impact of Packaging on Customer Experience',
      excerpt: 'Explore how thoughtful packaging design can create memorable customer experiences and build brand loyalty.',
      author: 'EcoGreen Team',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'Customer Experience',
      image: '/images/blog/packaging-customer-experience.jpg',
      slug: 'packaging-customer-experience'
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
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
            Packaging{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-eco-600">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in sustainable packaging. 
            Expert advice to help your business grow.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-500 to-eco-600 p-8 lg:p-12 flex items-center">
                <div className="text-white">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Featured
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm opacity-75 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(blogPosts[0].date)}
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    {blogPosts[0].author}
                    <span className="mx-2">•</span>
                    {blogPosts[0].readTime}
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-white font-semibold hover:underline"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                <Leaf className="w-32 h-32 text-primary-600 opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-eco-100 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-primary-600" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(post.date)}
                  <span className="mx-2">•</span>
                  {post.readTime}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600">
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 inline" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 