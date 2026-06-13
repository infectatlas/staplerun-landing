export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Recurring Essentials Memory System
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            Need help with StapleRun? We’re here to support issues related to your account,
            shopping lists, syncing, or data management.
          </p>

          <p>
            Most requests are handled within 1–3 business days.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Support</h2>

          <p className="text-sm text-zinc-700">
            Email us directly:
          </p>

          <a
            href="mailto:support@staplerun.com"
            className="text-sm font-medium text-zinc-900 underline"
          >
            support@staplerun.com
          </a>
        </section>

        {/* WHAT YOU CAN ASK */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">What we can help with</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Account access or login issues</li>
            <li>Missing or synced data problems</li>
            <li>Household sharing / invite issues</li>
            <li>Bug reports or app errors</li>
            <li>Data deletion requests</li>
          </ul>
        </section>

        {/* DELETE ACCOUNT POINTER */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Data Deletion</h2>

          <p className="text-sm text-zinc-700">
            If you want to delete your account or data, you can submit a request here:
          </p>

          <a
            href="/delete-account"
            className="text-sm text-zinc-900 underline"
          >
            Delete Account Page →
          </a>
        </section>

        {/* FOOTER NOTE */}
        <div className="pt-6 border-t border-zinc-100 text-xs text-zinc-400">
          StapleRun Support • Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}