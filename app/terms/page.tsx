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
            These Terms of Service govern your use of StapleRun, a recurring essentials memory system
            designed to help you manage and reuse shopping lists efficiently.
          </p>

          <p>
            By using StapleRun, you agree to these terms.
          </p>
        </section>

        {/* SERVICE DESCRIPTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">1. Service Description</h2>

          <p className="text-sm text-zinc-700">
            StapleRun allows users to create, reuse, and manage recurring shopping lists (“Staples”).
            The app learns from your usage to help rebuild lists instantly for everyday shopping needs.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2 mt-3">
            <li>Smart Staples memory system based on your shopping behavior</li>
            <li>One-click rebuild of recurring shopping lists</li>
            <li>Optional household sharing and synchronization</li>
            <li>Offline-first sandbox mode for instant onboarding</li>
          </ul>

        </section>

        {/* USER ACCOUNTS */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">2. Accounts & Access</h2>

          <p className="text-sm text-zinc-700">
            StapleRun can be used in sandbox mode without creating an account.
            If you choose to use synced or household features, an account may be required.
          </p>

          <p className="text-sm text-zinc-700">
            You are responsible for maintaining the security of your account and any associated access credentials.
          </p>

        </section>

        {/* DATA & PRIVACY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">3. Data Usage</h2>

          <p className="text-sm text-zinc-700">
            StapleRun stores shopping list data, recurring item patterns, and user preferences
            necessary to provide its core functionality.
          </p>

          <p className="text-sm text-zinc-700">
            Data handling is further described in our Privacy Policy.
          </p>

        </section>

        {/* HOUSEHOLD SYNC */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">4. Household Sharing (Optional)</h2>

          <p className="text-sm text-zinc-700">
            StapleRun supports optional household sharing through invite-based access.
            Users may join shared shopping lists with family members, roommates, or partners.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2 mt-3">
            <li>Access is granted only via secure invite links or codes</li>
            <li>All shared changes are synchronized across connected users</li>
            <li>Users may leave shared households at any time</li>
          </ul>

        </section>

        {/* ACCEPTABLE USE */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">5. Acceptable Use</h2>

          <p className="text-sm text-zinc-700">
            You agree not to misuse StapleRun or attempt to disrupt its functionality.
            This includes attempting to reverse engineer, exploit, or overload the system.
          </p>

        </section>

        {/* AVAILABILITY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">6. Service Availability</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is provided on an “as is” and “as available” basis.
            We may update, modify, or discontinue features at any time without notice.
          </p>

        </section>

        {/* LIABILITY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">7. Limitation of Liability</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is designed to assist with shopping organization but does not guarantee
            completeness, accuracy, or availability of any list or recommendation.
          </p>

          <p className="text-sm text-zinc-700">
            We are not liable for any indirect or incidental damages resulting from use of the app.
          </p>

        </section>

        {/* TERMINATION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">8. Termination</h2>

          <p className="text-sm text-zinc-700">
            You may stop using StapleRun at any time. We may suspend access if misuse or violation
            of these terms is detected.
          </p>

        </section>

        {/* CHANGES */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">9. Changes to Terms</h2>

          <p className="text-sm text-zinc-700">
            These Terms may be updated from time to time. Continued use of StapleRun constitutes acceptance of any updates.
          </p>

        </section>

        {/* CONTACT */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">10. Contact</h2>

          <p className="text-sm text-zinc-700">
            For questions about these Terms, contact:
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