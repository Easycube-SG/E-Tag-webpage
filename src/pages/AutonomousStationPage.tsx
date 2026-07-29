import Header from '../components/Header'
import FooterCta from '../components/FooterCta'
import Hero from '../components/autonomous-station/Hero'
import Introduction from '../components/autonomous-station/Introduction'
import Benefits from '../components/autonomous-station/Benefits'
import Workflow from '../components/autonomous-station/Workflow'
import RequestDemo from '../components/autonomous-station/RequestDemo'
import FAQs from '../components/autonomous-station/FAQs'
import ContactForm from '../components/autonomous-station/ContactForm'

export default function AutonomousStationPage() {
  return (
    <div className="min-h-screen">
      <Header variant="autonomous-station" />
      <main>
        <Hero />
        <Introduction />
        <Benefits />
        <Workflow />
        <RequestDemo />
        <FAQs />
        <ContactForm />
        <FooterCta variant="autonomous-station" />
      </main>
    </div>
  )
}
