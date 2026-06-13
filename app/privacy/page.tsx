export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Recurring Essentials Memory System
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            This Privacy Policy explains how StapleRun (“Service”) collects, uses, and protects your data.
            By using the Service, you agree to this Policy.
          </p>

          <p>
            StapleRun is designed to store only the minimum data necessary to manage recurring shopping lists.
          </p>
        </section>

        {/* DATA CONTROLLER */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">1. Data Controller</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is operated by the service provider responsible for determining how and why personal data is processed.
            For privacy-related inquiries, contact: support@staplerun.com
          </p>
        </section>

        {/* DATA WE COLLECT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">2. Data We Collect</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Shopping Data</strong> — items added, removed, or completed in your lists.
            </li>

            <li>
              <strong>Staples Data</strong> — patterns derived from repeated purchases used to rebuild lists.
            </li>

            <li>
              <strong>Preferences</strong> — optional settings such as categories and interface behavior.
            </li>

            <li>
              <strong>Account Identifiers</strong> — email address or anonymous identifier for authentication and syncing.
            </li>

            <li>
              <strong>Device / Local Storage Data</strong> — locally stored list data when using guest mode.
            </li>
          </ul>

          <p className="text-xs text-zinc-500">
            We do not collect financial data, contacts, or advertising identifiers.
          </p>
        </section>

        {/* LEGAL BASIS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">3. Legal Basis for Processing (GDPR)</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li><strong>Contract</strong> — to provide core functionality of the Service</li>
            <li><strong>Legitimate Interest</strong> — to improve performance and user experience</li>
            <li><strong>Consent</strong> — for optional features such as cloud sync and household sharing</li>
          </ul>
        </section>

        {/* HOW DATA IS USED */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">4. How We Use Data</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>To generate and rebuild recurring shopping lists</li>
            <li>To store and sync your Staples across devices</li>
            <li>To enable optional household collaboration</li>
            <li>To improve usability and system performance</li>
          </ul>
        </section>

        {/* STORAGE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">5. Data Storage</h2>

          <p className="text-sm text-zinc-700">
            <strong>Local Mode:</strong> Data remains on your device and is not transmitted to servers.
          </p>

          <p className="text-sm text-zinc-700">
            <strong>Cloud Sync:</strong> When enabled, data is securely stored and synchronized using encrypted connections.
          </p>
        </section>

        {/* PROCESSORS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">6. Data Processors</h2>

          <p className="text-sm text-zinc-700">
            We may use third-party infrastructure providers (such as hosting and database services)
            to operate the Service. These providers process data only on our behalf and are not permitted to use it for their own purposes.
          </p>
        </section>

        {/* HOUSEHOLD */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">7. Household Sharing</h2>

          <p className="text-sm text-zinc-700">
            Household sharing allows authenticated users to collaborate on shared shopping lists.
            Access is strictly controlled through invitations.
          </p>

          <p className="text-sm text-zinc-700">
            Users are responsible for all activity within their household group.
          </p>
        </section>

        {/* SECURITY */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">8. Security</h2>

          <p className="text-sm text-zinc-700">
            We implement reasonable technical and organizational measures to protect your data.
            However, no system can be guaranteed to be 100% secure.
          </p>
        </section>

        {/* RETENTION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">9. Data Retention</h2>

          <p className="text-sm text-zinc-700">
            We retain data only as long as necessary to provide the Service or as required by law.
            You may request deletion at any time.
          </p>
        </section>

        {/* USER RIGHTS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">10. Your Rights (GDPR)</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Request export of your data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        {/* CHILDREN */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">11. Children’s Privacy</h2>

          <p className="text-sm text-zinc-700">
            The Service is not intended for children under the age of 13 (or the applicable age of digital consent in your jurisdiction).
            We do not knowingly collect data from children.
          </p>
        </section>

        {/* INTERNATIONAL */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">12. International Data Transfers</h2>

          <p className="text-sm text-zinc-700">
            Your data may be processed in countries outside your own jurisdiction.
            We take reasonable steps to ensure appropriate safeguards are in place.
          </p>
        </section>

        {/* CHANGES */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">13. Changes to This Policy</h2>

          <p className="text-sm text-zinc-700">
            We may update this Privacy Policy from time to time. Material changes will be reflected on this page.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Contact</h2>

          <p className="text-sm text-zinc-700">
            For privacy-related inquiries:
          </p>

          <p className="text-sm font-medium text-zinc-900">
            support@staplerun.com
          </p>
        </section>

        {/* FOOTER */}
        <div className="pt-6 border-t border-zinc-100 text-xs text-zinc-400">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}