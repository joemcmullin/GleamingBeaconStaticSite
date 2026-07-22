import LegalLayout from './LegalLayout'
import { Link } from '../../router'
import { COMPANY, APP, DOMAIN, SUPPORT_EMAIL } from './legalMeta'

export default function TermsOfService() {
  return (
    <LegalLayout
      current="/terms"
      title="Terms of Service"
      intro={`These terms govern your use of the ${DOMAIN} website and the ${APP} app. Please read them carefully.`}
    >
      <h2>1. Acceptance of these terms</h2>
      <p>
        By accessing the {DOMAIN} website or using the {APP} application (together, the
        &ldquo;Service&rdquo;), you agree to these Terms of Service and our{' '}
        <Link to="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the
        Service. The Service is provided by {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;).
      </p>

      <h2>2. About the Service</h2>
      <p>
        {APP} brings together astronomy, numerology, and other traditional alignment systems to
        produce a personalized report on your device. The app is currently in development; this
        website presently offers information and a launch waitlist. Features, availability, and
        timing may change.
      </p>

      <h2>3. For reflection, not professional advice</h2>
      <p>
        {APP} offers reflective guidance for <strong>entertainment and lifestyle purposes only</strong>{' '}
        and is <strong>not</strong> professional, medical, financial, legal, or psychological
        advice. Do not rely on the Service as a substitute for advice from a qualified
        professional. Any decisions you make based on the Service are your own responsibility.
      </p>

      <h2>4. Waitlist</h2>
      <p>
        Joining the waitlist expresses interest and lets us notify you at launch. It does not
        create any obligation on our part to release the app, guarantee availability in your
        region, or reserve any price or feature.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service in violation of any law or these terms;</li>
        <li>interfere with, disrupt, or attempt to gain unauthorized access to the Service or its infrastructure;</li>
        <li>copy, modify, or create derivative works of the Service except as permitted; or</li>
        <li>misrepresent your identity or submit another person&rsquo;s information without authorization.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        The Service, including the {APP}&trade; name, branding, text, graphics, and software, is
        owned by {COMPANY} or its licensors and is protected by intellectual-property laws. We
        grant you a limited, personal, non-exclusive, non-transferable license to use the Service
        for its intended purpose. All rights not expressly granted are reserved.
      </p>

      <h2>7. App stores</h2>
      <p>
        When the app is released, your download and use will also be subject to the terms of the
        applicable app marketplace (such as the Apple App Store or Google Play). Those
        marketplaces are not parties to these terms and are not responsible for the Service.
      </p>

      <h2>8. Disclaimer of warranties</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind, whether express or implied, including implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not
        warrant that the Service will be uninterrupted, error-free, or that any result or
        reading is accurate, reliable, or suitable for any particular purpose.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {COMPANY} and its owners, employees, and
        providers will not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of data, profits, or goodwill, arising from or related to
        your use of the Service. Where liability cannot be excluded, it is limited to the maximum
        extent permitted by law.
      </p>

      <h2>10. Changes to the Service and these terms</h2>
      <p>
        We may modify or discontinue the Service, and we may update these terms from time to
        time. When we make material changes, we will revise the &ldquo;Last updated&rdquo; date
        above. Your continued use of the Service after changes take effect constitutes acceptance
        of the updated terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of the United States and the state in which {COMPANY}{' '}
        is organized, without regard to its conflict-of-law rules. Any disputes will be subject to
        the exclusive jurisdiction of the courts located there, unless applicable law requires
        otherwise.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or visit our{' '}
        <Link to="/support">Support</Link> page.
      </p>
    </LegalLayout>
  )
}
