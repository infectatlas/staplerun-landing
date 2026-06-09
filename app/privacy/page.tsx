export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

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
            StapleRun is designed to help you manage recurring shopping essentials by learning what you
            repeatedly buy and storing them as reusable “Staples.”
          </p>

          <p>
            This Privacy Policy explains how data is handled across the app, including optional household
            syncing features.
          </p>
        </section>

        {/* DATA COLLECTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">1. Data We Collect</h2>

          <p className="text-sm text-zinc-700">
            StapleRun collects only the data necessary to provide its core functionality:
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Shopping activity data</strong> — items you add, check off, and reuse to build your
              “Staples” memory.
            </li>
            <li>
              <strong>Staples data</strong> — your saved recurring essentials (e.g. groceries, toiletries,
              household items).
            </li>
            <li>
              <strong>Usage preferences</strong> — optional settings like categories, collections, and UI preferences.
            </li>
          </ul>

          <p className="text-xs text-zinc-500">
            No financial, payment, or sensitive personal identity data is collected.
          </p>

        </section>

        {/* HOW DATA IS USED */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">2. How We Use Your Data</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>To remember items you repeatedly purchase</li>
            <li>To generate instant shopping lists from your Staples</li>
            <li>To improve list organization and suggestions</li>
            <li>To sync data across devices when enabled</li>
          </ul>

        </section>

        {/* STORAGE MODEL */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">3. Local and Cloud Storage</h2>

          <p className="text-sm text-zinc-700">
            StapleRun supports two storage modes:
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Sandbox Mode (default)</strong> — All data is stored locally on your device.
              No account is required.
            </li>

            <li>
              <strong>Synced Mode (optional)</strong> — If enabled, your data is securely stored and
              synchronized using cloud infrastructure to support multi-device access and household sharing.
            </li>
          </ul>

        </section>

        {/* HOUSEHOLD SYNC */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">4. Household Sharing (Optional)</h2>

          <p className="text-sm text-zinc-700">
            StapleRun allows optional household collaboration through secure invite links.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Users can join shared shopping lists using an invite code</li>
            <li>Changes sync in real-time between connected users</li>
            <li>Only users explicitly added to a household can access shared data</li>
          </ul>

          <p className="text-xs text-zinc-500">
            Users control whether they participate in shared households at all times.
          </p>

        </section>

        {/* DATA RETENTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">5. Data Retention</h2>

          <p className="text-sm text-zinc-700">
            Your data is retained as long as your account or local storage remains active.
            You may delete your data at any time by clearing the app data or removing your account (if synced mode is enabled).
          </p>

        </section>

        {/* SECURITY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">6. Security</h2>

          <p className="text-sm text-zinc-700">
            Data transmitted in synced mode is encrypted in transit. Access to shared household data
            is restricted to invited users only.
          </p>

        </section>

        {/* CHILDREN */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">7. Children’s Privacy</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is not intended for children under 13. We do not knowingly collect personal data from children.
          </p>

        </section>

        {/* CHANGES */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">8. Changes to This Policy</h2>

          <p className="text-sm text-zinc-700">
            This Privacy Policy may be updated as the app evolves. Users will be notified of significant changes.
          </p>

        </section>

        {/* CONTACT */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">9. Contact</h2>

          <p className="text-sm text-zinc-700">
            If you have any questions about this Privacy Policy, you can contact:
          </p>

          <p className="text-sm text-zinc-900 font-medium">
            support@staplerun.app
          </p>

        </section>

        {/* FOOTER NOTE */}
        <div className="pt-6 border-t border-zinc-100 text-xs text-zinc-400">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}