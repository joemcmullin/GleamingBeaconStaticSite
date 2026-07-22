import LegalLayout from './LegalLayout'
import { Link } from '../../router'
import { COMPANY, APP, DOMAIN, SUPPORT_EMAIL } from './legalMeta'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      current="/privacy"
      title="Privacy Policy"
      intro={`${APP} is built on a simple promise: your personal details stay yours. This policy explains what that means for the ${APP} app and this website, and the limited information we handle.`}
    >
      <h2>Our approach in one line</h2>
      <p>
        The {APP} app is designed so that the information you enter — including your
        birth details, home layout, and household — is processed <strong>on your device</strong>{' '}
        and is <strong>never transmitted to, collected by, or stored by us</strong>. We
        cannot see it, because it never leaves your phone.
      </p>

      <h2>Who we are</h2>
      <p>
        {APP} is published by {COMPANY} (&ldquo;{APP},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;). This policy applies to the {DOMAIN} website and the {APP} mobile
        application (currently in development).
      </p>

      <h2>Information the app handles</h2>
      <ul>
        <li>
          <strong>On-device data.</strong> Details you enter to generate a reading are stored
          and computed locally on your device. This includes birth, home, and family
          information. It is not sent to our servers, and deleting the app removes it.
        </li>
        <li>
          <strong>No account.</strong> The app does not require you to create an account or
          sign in, so there is no profile for us to hold.
        </li>
        <li>
          <strong>On-device AI.</strong> Where your device offers on-device AI to refine your
          report, that processing also happens locally. A complete report is generated even
          without it.
        </li>
      </ul>

      <h2>Information the website handles</h2>
      <ul>
        <li>
          <strong>Waitlist sign-ups.</strong> If you join the waitlist, we collect the{' '}
          <strong>name and email address</strong> you provide so we can notify you when {APP}{' '}
          launches. We use this only for that purpose and related launch updates.
        </li>
        <li>
          <strong>Support messages.</strong> If you email us, we receive your message and email
          address so we can respond and keep a record of the conversation.
        </li>
        <li>
          <strong>Analytics &amp; tracking.</strong> This website does not use advertising or
          third-party tracking cookies, and we do not build advertising profiles about you.
        </li>
      </ul>

      <h2>How we use information</h2>
      <p>We use the limited information above to:</p>
      <ul>
        <li>notify you about the {APP} launch and respond to your inquiries;</li>
        <li>provide, maintain, and improve the website and app; and</li>
        <li>comply with legal obligations and protect against misuse.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information, and we do not share it for
        cross-context behavioral advertising.
      </p>

      <h2>Service providers</h2>
      <p>
        We rely on a small number of trusted providers to operate the website and our support
        inbox. These providers process information on our behalf under their own security and
        privacy commitments:
      </p>
      <ul>
        <li><strong>Cloudflare</strong> — DNS, website delivery, and email routing;</li>
        <li><strong>GitHub Pages</strong> — website hosting;</li>
        <li><strong>Fernand</strong> and <strong>Postmark</strong> — support inbox and email delivery for messages you send us.</li>
      </ul>

      <h2>Data retention</h2>
      <p>
        We keep waitlist and support information only as long as needed for the purposes
        described here — for example, until the waitlist has served its purpose or you ask us to
        remove you. You can request deletion at any time (see below).
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or limit
        the use of your personal information. Because the app keeps your sensitive data on your
        device, you are always in direct control of it — deleting the app deletes that data. For
        anything we hold (waitlist or support email), contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will honor valid requests.
      </p>

      <h2>Children</h2>
      <p>
        {APP} is not directed to children under 13 (or the minimum age required in your
        jurisdiction), and we do not knowingly collect their personal information.
      </p>

      <h2>International users</h2>
      <p>
        We are based in the United States. If you contact us or join the waitlist from outside
        the U.S., the limited information you provide will be processed in the U.S. by our
        providers listed above.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as {APP} evolves toward launch. We will revise the &ldquo;Last
        updated&rdquo; date above and, where appropriate, provide additional notice.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about privacy? Email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. See also our{' '}
        <Link to="/terms">Terms of Service</Link> and{' '}
        <Link to="/support">Support</Link> page.
      </p>
    </LegalLayout>
  )
}
