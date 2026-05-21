import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Benefits from './components/Benefits'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import ContactForm from './components/ContactForm'
import FooterCta from './components/FooterCta'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Benefits />
        <Workflow />
        <Pricing />
        <FAQs />
        <ContactForm />
        <FooterCta />
      </main>
    </div>
  )
}

export default App
