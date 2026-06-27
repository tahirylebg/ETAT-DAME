import Header from '@/components/layout/Header'
import Testimonials from '@/components/home/Testimonials'
import AboutSection from '@/components/home/AboutSection'
import FeaturedDish from '@/components/home/FeaturedDish'
import InstagramFeed from '@/components/home/InstagramFeed'

export default function Home() {
  return (
    <>
      <Header />
      <Testimonials />
      <AboutSection />
      <FeaturedDish />
      <InstagramFeed />
    </>
  )
}
