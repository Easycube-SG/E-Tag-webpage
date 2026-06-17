import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Benefits from './components/Benefits'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import ContactForm from './components/ContactForm'
import FooterCta from './components/FooterCta'
import SubscribeSuccess from './components/SubscribeSuccess'
import SubscriptionPage from './pages/SubscriptionPage'
import CheckoutPage from './pages/CheckoutPage'

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <FooterCta showCta={false} />
    </div>
  )
}

function LandingPage() {
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

function App() {
  const pathname = window.location.pathname

  if (pathname === '/checkout') {
    return (
      <AppShell>
        <CheckoutPage />
      </AppShell>
    )
  }

  if (pathname === '/subscription') {
    return (
      <AppShell>
        <SubscriptionPage />
      </AppShell>
    )
  }

  if (pathname === '/subscribe/success') {
    return (
      <AppShell>
        <SubscribeSuccess />
      </AppShell>
    )
  }

  return <LandingPage />
}

export default App
