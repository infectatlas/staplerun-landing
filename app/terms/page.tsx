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
            These Terms of Service govern your use of StapleRun, a shopping list and recurring
            essentials memory system designed to help users manage and reuse shopping lists efficiently.
          </p>

          <p>
            By using StapleRun, you agree to these Terms.
          </p>
        </section>

        {/* SERVICE DESCRIPTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">1. Service Description</h2>

          <p className="text-sm text-zinc-700">
            StapleRun allows users to create, manage, and reuse shopping lists (“Staples”).
            The application learns from user activity to improve list rebuilding and organization.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2 mt-3">
            <li>Recurring shopping list memory system based on user activity</li>
            <li>Instant rebuilding of previous shopping lists</li>
            <li>Optional household collaboration features</li>
            <li>Offline and cloud-based usage modes</li>
          </ul>

        </section>

        {/* ACCOUNTS */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">2. Accounts & Access</h2>

          <p className="text-sm text-zinc-700">
            StapleRun may be used without creating an account in guest mode.
            In this mode, data is stored locally on the device and may not persist across devices.
          </p>

          <p className="text-sm text-zinc-700">
            When using cloud sync or household features, an authenticated account may be required.
            You are responsible for maintaining the security of your account and credentials.
          </p>

        </section>

        {/* DATA & PRIVACY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">3. Data Usage</h2>

          <p className="text-sm text-zinc-700">
            StapleRun stores shopping list data, usage patterns, and preferences necessary
            for core functionality including list creation, syncing, and recommendations.
          </p>

          <p className="text-sm text-zinc-700">
            Data handling is described in our Privacy Policy.
          </p>

        </section>

        {/* HOUSEHOLD */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">4. Household Collaboration</h2>

          <p className="text-sm text-zinc-700">
            StapleRun supports optional household collaboration where users can join shared shopping lists
            within a household group using authenticated access.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2 mt-3">
            <li>Only authenticated users added to a household group can access shared data</li>
            <li>Changes are synchronized in real time across household members</li>
            <li>Household access is managed by the household owner or creator</li>
          </ul>

        </section>

        {/* ACCEPTABLE USE */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">5. Acceptable Use</h2>

          <p className="text-sm text-zinc-700">
            You agree not to misuse StapleRun, interfere with its operation, or attempt to access
            systems or data you are not authorized to access.
          </p>

        </section>

        {/* SERVICE LIMITATIONS */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">6. Service Availability</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is provided on an “as is” and “as available” basis.
            We may modify, suspend, or discontinue features at any time without liability.
          </p>

        </section>

        {/* LIABILITY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">7. Limitation of Liability</h2>

          <p className="text-sm text-zinc-700">
            StapleRun assists with shopping organization but does not guarantee accuracy,
            completeness, or availability of any data or recommendations.
          </p>

          <p className="text-sm text-zinc-700">
            We are not liable for indirect, incidental, or consequential damages arising from use of the app.
          </p>

        </section>

        {/* TERMINATION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">8. Termination</h2>

          <p className="text-sm text-zinc-700">
            You may stop using StapleRun at any time.
            We may suspend or terminate access if misuse or violation of these Terms is detected.
          </p>

          <p className="text-sm text-zinc-700">
            Data deletion is governed by our Privacy Policy.
          </p>

        </section>

        {/* CHANGES */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">9. Changes to Terms</h2>

          <p className="text-sm text-zinc-700">
            We may update these Terms from time to time.
            Continued use of StapleRun constitutes acceptance of the updated Terms.
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