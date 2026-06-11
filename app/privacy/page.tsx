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
            StapleRun helps you manage recurring shopping essentials by learning what you repeatedly
            buy and storing them as reusable “Staples.”
          </p>

          <p>
            This Privacy Policy explains how data is handled across the app, including optional cloud
            syncing and household collaboration features.
          </p>
        </section>

        {/* DATA COLLECTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">1. Data We Collect</h2>

          <p className="text-sm text-zinc-700">
            StapleRun collects only the data necessary to provide core functionality:
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Shopping activity data</strong> — items you add, complete, and reuse to build your shopping lists.
            </li>
            <li>
              <strong>Staples data</strong> — recurring items derived from your shopping behavior.
            </li>
            <li>
              <strong>Usage preferences</strong> — optional settings such as categories and interface preferences.
            </li>
            <li>
              <strong>Authentication identifiers</strong> — Firebase user IDs or anonymous session identifiers used to manage login state and sync data.
            </li>
          </ul>

          <p className="text-xs text-zinc-500">
            StapleRun does not collect payment or financial information.
          </p>

        </section>

        {/* HOW DATA IS USED */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">2. How We Use Your Data</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>To remember items you repeatedly purchase</li>
            <li>To generate instant shopping lists from your Staples</li>
            <li>To improve list organization and recommendations</li>
            <li>To sync data across devices when you enable account login</li>
          </ul>

        </section>

        {/* STORAGE MODEL */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">3. Local and Cloud Storage</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Sandbox Mode</strong> — Data is stored locally on your device. A temporary anonymous
              identifier may be generated to enable limited functionality.
            </li>

            <li>
              <strong>Synced Mode</strong> — When you sign in, your data is securely stored in cloud
              infrastructure and synchronized across devices.
            </li>
          </ul>

        </section>

        {/* HOUSEHOLD SYNC */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">4. Household Sharing (Optional)</h2>

          <p className="text-sm text-zinc-700">
            StapleRun supports optional household collaboration where users can join shared shopping lists
            within a household group.
          </p>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Only authenticated users added to a household can access shared data</li>
            <li>Changes sync in real time between household members</li>
            <li>Access is controlled by the household owner</li>
          </ul>

          <p className="text-xs text-zinc-500">
            Data is not shared with third-party companies.
          </p>

        </section>

        {/* DATA RETENTION */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">5. Data Retention</h2>

          <p className="text-sm text-zinc-700">
            Data is retained until you delete it, remove your account, or clear local device storage.
            You can delete your data at any time through the app settings.
          </p>

        </section>

        {/* SECURITY */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">6. Security</h2>

          <p className="text-sm text-zinc-700">
            All data transmitted in synced mode is encrypted in transit using HTTPS/TLS.
            Access to household data is restricted to authorized users only.
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
            If you have any questions, contact:
          </p>

          <p className="text-sm text-zinc-900 font-medium">
            support@staplerun.app
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