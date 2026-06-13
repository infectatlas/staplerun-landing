export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Delete Your Account</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun Account & Data Deletion Request
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            You may request deletion of your StapleRun account and associated cloud data at any time.
          </p>

          <p>
            This page explains how deletion works, what data is removed, and what may remain for legal or technical reasons.
          </p>
        </section>

        {/* HOW TO REQUEST */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">How to Request Deletion</h2>

          <ol className="list-decimal pl-5 text-sm text-zinc-700 space-y-2">
            <li>Email us at <strong>support@staplerun.com</strong></li>
            <li>Use the subject line: <strong>Account Deletion Request</strong></li>
            <li>Send the request from the email linked to your StapleRun account</li>
            <li>We may verify account ownership before processing</li>
          </ol>
        </section>

        {/* WHAT GETS DELETED */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">What Will Be Deleted</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Account profile and authentication data (email, user ID)</li>
            <li>Cloud-stored shopping lists and item history</li>
            <li>Staples (recurring item memory system)</li>
            <li>Household membership and shared access records</li>
            <li>Synced preferences and settings stored in cloud systems</li>
          </ul>
        </section>

        {/* HOUSEHOLD CLARIFICATION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Household Data</h2>

          <p className="text-sm text-zinc-700">
            If you are part of a shared household, your personal account data will be removed from the system.
            However, shared household lists may remain active for other members in the household who continue using the Service.
          </p>
        </section>

        {/* GUEST MODE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Guest Mode Data</h2>

          <p className="text-sm text-zinc-700">
            Data stored in Guest Mode is saved locally on your device and is not tied to your account.
          </p>

          <p className="text-sm text-zinc-700">
            To remove Guest Mode data, you must clear your browser/app storage or uninstall the application.
          </p>
        </section>

        {/* RETENTION EXCEPTIONS */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Data Retention Exceptions</h2>

          <p className="text-sm text-zinc-700">
            Some limited data may be retained where required for legal, security, fraud prevention,
            or operational integrity purposes. This does not include your shopping lists or personal content.
          </p>
        </section>

        {/* TIMING */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Processing Time</h2>

          <p className="text-sm text-zinc-700">
            Account deletion requests are typically processed within a reasonable time after verification.
          </p>

          <p className="text-xs text-zinc-500">
            Deletion is permanent and cannot be undone.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Contact</h2>

          <p className="text-sm text-zinc-700">
            For questions about account deletion, contact:
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