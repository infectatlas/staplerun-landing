export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Delete Your Account</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Account & Data Deletion Request
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            You have the right to request deletion of your StapleRun account and associated personal data at any time
            under applicable data protection laws, including the GDPR.
          </p>

          <p>
            This page explains what will be deleted, what may be retained for legal or security reasons,
            and how to submit a deletion request.
          </p>
        </section>

        {/* WHAT HAPPENS */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">What happens when you delete your account</h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Your account profile and authentication data are permanently removed</li>
            <li>Your shopping lists and recurring “Staples” are deleted from active systems</li>
            <li>Your preferences and app settings are removed</li>
            <li>You are removed from any household groups you belong to</li>
          </ul>
        </section>

        {/* HOUSEHOLD */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Household data</h2>

          <p className="text-sm text-zinc-700">
            If you are part of a shared household, your personal account data will be deleted.
            Shared household lists may continue to exist for other active members.
          </p>
        </section>

        {/* GUEST MODE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Guest mode data</h2>

          <p className="text-sm text-zinc-700">
            Data stored in guest mode exists only on your device and is not stored on our servers.
            To remove this data, you must clear your browser storage or uninstall the application.
          </p>
        </section>

        {/* HOW TO REQUEST */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">How to request deletion</h2>

          <ol className="list-decimal pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              Email us at{" "}
              <span className="font-medium text-zinc-900">
                support@staplerun.com
              </span>
            </li>

            <li>
              Use the subject line:{" "}
              <span className="font-medium">Account Deletion Request</span>
            </li>

            <li>
              Send the request from the email address associated with your account (if applicable)
            </li>

            <li>
              We may need to verify ownership before processing your request
            </li>
          </ol>
        </section>

        {/* TIMING + CONFIRMATION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Processing time & confirmation</h2>

          <p className="text-sm text-zinc-700">
            Deletion requests are typically processed within 30 days after verification.
            Once completed, you will receive a confirmation of deletion.
          </p>

          <p className="text-xs text-zinc-500">
            Deletion is permanent and cannot be undone. Some limited records may be retained for legal,
            security, fraud prevention, or compliance purposes, where required by law.
          </p>
        </section>

        {/* SECURITY / RETENTION */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Legal retention</h2>

          <p className="text-sm text-zinc-700">
            We may retain minimal information only where necessary to comply with legal obligations,
            prevent fraud or abuse, or ensure system security. This does not include your shopping lists
            or personal app content.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Contact</h2>

          <p className="text-sm text-zinc-700">
            For any questions regarding deletion or data handling:
          </p>

          <p className="text-sm font-medium text-zinc-900">
            support@staplerun.com
          </p>
        </section>

        {/* FOOTER WARNING */}
        <div className="border border-zinc-200 rounded-xl p-4 bg-zinc-50">
          <p className="text-sm text-zinc-700">
            ⚠️ Deletion is permanent and cannot be reversed once completed.
          </p>
        </div>

        {/* FOOTER */}
        <div className="pt-6 border-t border-zinc-100 text-xs text-zinc-400">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}