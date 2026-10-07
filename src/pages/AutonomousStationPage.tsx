import Header from '../components/Header'
import FooterCta from '../components/FooterCta'
import Hero from '../components/autonomous-station/Hero'
import Introduction from '../components/autonomous-station/Introduction'
import Benefits from '../components/autonomous-station/Benefits'
import Workflow from '../components/autonomous-station/Workflow'
import Pricing from '../components/autonomous-station/Pricing'
import FAQs from '../components/autonomous-station/FAQs'
import ContactForm from '../components/autonomous-station/ContactForm'

export default function AutonomousStationPage() {
  return (
    <div className="min-h-screen">
      <Header variant="autonomous-station" />
      <main>
        <Hero />
        <Workflow />
        <Introduction />
        <Benefits />
        <Pricing />
        <FAQs />
        <ContactForm />
        <FooterCta variant="autonomous-station" />
      </main>
    </div>
  )
}
