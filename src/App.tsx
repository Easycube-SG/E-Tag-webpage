import Header from './components/Header'
import FooterCta from './components/FooterCta'
import AutonomousStationPage from './pages/AutonomousStationPage'
// Hidden from live routes (kept in codebase): LandingPage, LastMileDeliveryPage
import SubscribeSuccess from './components/SubscribeSuccess'
import SubscriptionPage from './pages/SubscriptionPage'
import CheckoutPage from './pages/CheckoutPage'
import PilotTrialPage from './pages/PilotTrialPage'
import PrivacyPage from './pages/PrivacyPage'

function AppShell({
  children,
  headerVariant = 'site',
}: {
  children: React.ReactNode
  headerVariant?: 'site' | 'autonomous-station'
}) {
  return (
    <div className="min-h-screen">
      <Header variant={headerVariant} />
      {children}
      <FooterCta showCta={false} variant={headerVariant} />
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

  if (pathname === '/pilot-trial') {
    return (
      <AppShell>
        <PilotTrialPage />
      </AppShell>
    )
  }

  if (pathname === '/privacy') {
    return (
      <AppShell>
        <PrivacyPage />
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

  // Main site homepage — Autonomous Station
  // /autonomous-station kept as an alias for existing links
  if (pathname === '/' || pathname === '/autonomous-station') {
    return <AutonomousStationPage />
  }

  // Unknown paths fall back to Autonomous Station
  return <AutonomousStationPage />
}

export default App
