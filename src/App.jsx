import { useRoute } from './router'
import Landing from './pages/Landing'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import Support from './pages/legal/Support'

const ROUTES = {
  '/privacy': PrivacyPolicy,
  '/terms': TermsOfService,
  '/support': Support,
}

export default function App() {
  const path = useRoute()
  const Page = ROUTES[path]
  return Page ? <Page /> : <Landing />
}
