import LegalLayout from './LegalLayout'
import { Link } from '../../router'
import { APP, SUPPORT_EMAIL } from './legalMeta'

export default function Support() {
  return (
    <LegalLayout
      current="/support"
      title="Support"
      intro={`We're here to help. Here's how to reach us and what to expect while ${APP} is in development.`}
    >
      <h2>Contact us</h2>
      <p>
        The best way to reach us is by email at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. A real person reads every
        message. We aim to respond within a few business days.
      </p>

      <h2>Frequently asked</h2>

      <h3>What is {APP}?</h3>
      <p>
        {APP} is a premium, cross-platform personal life-alignment app. It brings together
        astronomy, numerology, feng shui, the Chinese and Thai lunar systems, moon cycles,
        chakra/colour/stone correspondences, and home alignment into a single personalized,
        deeply customizable report — computed entirely on your device.
      </p>

      <h3>When does it launch?</h3>
      <p>
        {APP} is in development and coming soon to iOS and Android. The best way to be notified
        the day it&rsquo;s available is to <Link to="/#waitlist">join the waitlist</Link>.
      </p>

      <h3>Is my data private?</h3>
      <p>
        Yes. Your birth, home, and family details are processed on your device and never leave
        your phone — there is no account and nothing to upload. See our{' '}
        <Link to="/privacy">Privacy Policy</Link> for the full details.
      </p>

      <h3>Which platforms are supported?</h3>
      <p>
        {APP} is being built for both iPhone (iOS) and Android. Specific version requirements
        will be listed on the App Store and Google Play at launch.
      </p>

      <h2>Privacy &amp; data requests</h2>
      <p>
        To ask about the information we hold (such as your waitlist email), or to request its
        removal, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we&rsquo;ll take
        care of it. More detail is in our <Link to="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Legal</h2>
      <p>
        See our <Link to="/privacy">Privacy Policy</Link> and{' '}
        <Link to="/terms">Terms of Service</Link>.
      </p>
    </LegalLayout>
  )
}
