
import HeroSection from '@/components/hero-section'
import ServicesOverview from '@/components/services-overview'
import FocusAreas from '@/components/focus-areas'
import CallToAction from '@/components/call-to-action'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FocusAreas />
      <CallToAction />
    </div>
  )
}
