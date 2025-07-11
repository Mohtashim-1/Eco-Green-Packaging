import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import QATool from '@/components/QATool'
import PackagingGame from '@/components/PackagingGame'
import MockupCreator from '@/components/MockupCreator'
import BlogSection from '@/components/BlogSection'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Services />
        <QATool />
        <PackagingGame />
        <MockupCreator />
        <BlogSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
} 