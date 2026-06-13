import Header from "@/components/Header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* SHARED HEADER */}
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        {/* TITLE */}
        <div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Recurring Essentials Memory System
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            These Terms govern your use of StapleRun, a recurring essentials memory system
            designed to help users manage and reuse shopping lists efficiently.
          </p>

          <p>
            By using StapleRun, you agree to these Terms.
          </p>
        </section>

        {/* SERVICE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">1. Service Description</h2>

          <p className="text-sm text-zinc-700">
            StapleRun allows users to create, manage, and reuse shopping lists (“Staples”).
            The app may analyze usage patterns to improve list rebuilding and organization.
          </p>
        </section>

        {/* ACCOUNTS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">2. Accounts & Access</h2>

          <p className="text-sm text-zinc-700">
            You may use StapleRun in guest mode without an account. Cloud sync and household
            features require an authenticated account.
          </p>
        </section>

        {/* DATA */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">3. Data Usage</h2>

          <p className="text-sm text-zinc-700">
            We store shopping lists, usage patterns, and preferences required for core functionality.
            Full details are available in the Privacy Policy.
          </p>
        </section>

        {/* HOUSEHOLD */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">4. Household Sharing</h2>

          <p className="text-sm text-zinc-700">
            Household sharing allows multiple users to collaborate on shared shopping lists.
            Access is controlled by invitations and authentication.
          </p>
        </section>

        {/* ACCEPTABLE USE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">5. Acceptable Use</h2>

          <p className="text-sm text-zinc-700">
            You agree not to misuse or attempt to disrupt StapleRun services.
          </p>
        </section>

        {/* LIABILITY */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">6. Limitation of Liability</h2>

          <p className="text-sm text-zinc-700">
            StapleRun is provided “as is” without warranties. We are not liable for indirect damages
            resulting from use of the app.
          </p>
        </section>

        {/* TERMINATION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">7. Termination</h2>

          <p className="text-sm text-zinc-700">
            We may suspend or terminate access if misuse is detected. You may stop using the app at any time.
          </p>
        </section>

        {/* CHANGES */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">8. Changes</h2>

          <p className="text-sm text-zinc-700">
            We may update these Terms from time to time. Continued use means acceptance of updates.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">9. Contact</h2>

          <p className="text-sm text-zinc-700">
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