export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Recurring Essentials Memory System
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            These Terms of Service govern your access to and use of StapleRun, including
            the website, applications, and related services (the "Service").
          </p>

          <p>
            By using StapleRun, you agree to these Terms. If you do not agree, do not use the Service.
          </p>
        </section>

        {/* SERVICE DESCRIPTION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">1. Service Description</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is a shopping list and recurring essentials memory system designed
            to help users create, manage, reuse, and synchronize shopping lists.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Recurring “Staples” memory system based on usage patterns</li>
            <li>Instant rebuilding of shopping lists</li>
            <li>Optional household collaboration and sync</li>
            <li>Offline (guest) and cloud-based modes</li>
          </ul>

          <p className="text-xs text-zinc-500">
            Features may change, be added, or removed at any time.
          </p>
        </section>

        {/* ACCOUNTS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">2. Accounts & Access</h2>

          <p className="text-sm text-zinc-700">
            StapleRun may be used in guest mode without creating an account.
            Certain features such as syncing and household sharing require authentication.
          </p>

          <p className="text-sm text-zinc-700">
            You are responsible for maintaining the security of your account and device access.
          </p>
        </section>

        {/* USER CONTENT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">3. User Content</h2>

          <p className="text-sm text-zinc-700">
            You retain ownership of content you create within the Service, including shopping lists,
            items, categories, and household data.
          </p>

          <p className="text-sm text-zinc-700">
            You grant StapleRun a limited license to store and process this data solely to operate the Service.
          </p>
        </section>

        {/* DATA STORAGE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">4. Data Storage & Synchronization</h2>

          <p className="text-sm text-zinc-700">
            StapleRun uses both local device storage and cloud storage depending on mode.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Guest mode stores data only on your device</li>
            <li>Cloud mode enables multi-device sync and households</li>
            <li>Synchronization may be delayed or interrupted</li>
          </ul>
        </section>

        {/* HOUSEHOLDS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">5. Household Collaboration</h2>

          <p className="text-sm text-zinc-700">
            StapleRun supports optional household sharing where users can collaborate on shopping lists.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Access is granted via invite only</li>
            <li>All members can modify shared lists</li>
            <li>Household owners manage membership</li>
          </ul>

          <p className="text-xs text-zinc-500">
            You are responsible for who you invite into a household.
          </p>
        </section>

        {/* ACCEPTABLE USE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">6. Acceptable Use</h2>

          <p className="text-sm text-zinc-700">
            You agree not to misuse the Service, attempt unauthorized access,
            interfere with operation, or reverse engineer the system.
          </p>
        </section>

        {/* DATA LOSS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">7. Data Risks</h2>

          <p className="text-sm text-zinc-700">
            StapleRun does not guarantee that data will always be available or preserved.
            Data loss may occur due to device failure, browser storage clearing, sync issues,
            or third-party service interruptions.
          </p>
        </section>

        {/* DISCLAIMER */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">8. Disclaimer</h2>

          <p className="text-sm text-zinc-700">
            The Service is provided “as is” and “as available” without warranties of any kind,
            including accuracy, reliability, or uninterrupted operation.
          </p>
        </section>

        {/* LIABILITY */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">9. Limitation of Liability</h2>

          <p className="text-sm text-zinc-700">
            To the maximum extent permitted by law, StapleRun is not liable for indirect,
            incidental, or consequential damages, including loss of data or profits.
          </p>

          <p className="text-sm text-zinc-700">
            Total liability shall not exceed $50 USD or the amount paid in the past 12 months,
            whichever is greater.
          </p>
        </section>

        {/* SUBSCRIPTIONS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">10. Premium Features</h2>

          <p className="text-sm text-zinc-700">
            Some features may require a paid subscription in the future.
            Pricing, billing, and refunds will follow platform policies (Apple/Google).
          </p>
        </section>

        {/* TERMINATION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">11. Termination</h2>

          <p className="text-sm text-zinc-700">
            You may stop using the Service at any time. We may suspend access if misuse or violations occur.
          </p>
        </section>

        {/* LEGAL */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">12. Governing Law</h2>

          <p className="text-sm text-zinc-700">
            These Terms are governed by the laws of the State of Texas, United States.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">13. Arbitration</h2>

          <p className="text-sm text-zinc-700">
            Any disputes will be resolved through binding individual arbitration
            and not class action lawsuits, where permitted by law.
          </p>
        </section>

        {/* FORCE MAJEURE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">14. Force Majeure</h2>

          <p className="text-sm text-zinc-700">
            We are not responsible for service interruptions caused by events beyond our control,
            including outages, disasters, or third-party failures.
          </p>
        </section>

        {/* CHANGES */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">15. Changes to Terms</h2>

          <p className="text-sm text-zinc-700">
            We may update these Terms from time to time. Continued use of the Service means you accept the updates.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">16. Contact</h2>

          <p className="text-sm text-zinc-700">
            If you have questions about these Terms, contact:
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