import Header from '../components/Header'
import FooterCta from '../components/FooterCta'
import LandingHero from '../components/landing/LandingHero'
import WorkWithUs from '../components/landing/WorkWithUs'
import EasyCubeAdvantage from '../components/landing/EasyCubeAdvantage'
import LastMilePricing from '../components/landing/LastMilePricing'
import LandingFaq from '../components/landing/LandingFaq'
import LandingContactForm from '../components/landing/LandingContactForm'
import LandingSeo from '../components/landing/LandingSeo'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingSeo />
      <Header variant="site" />
      <main>
        <LandingHero />
        <WorkWithUs />
        <EasyCubeAdvantage />
        <LastMilePricing />
        <LandingFaq />
        <LandingContactForm />
        <FooterCta variant="site" showCta={false} />
      </main>
    </div>
  )
}
