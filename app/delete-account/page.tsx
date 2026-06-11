export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

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
            You may request deletion of your StapleRun account and associated
            cloud-synchronized data at any time.
          </p>

          <p>
            This page explains how to submit a deletion request and what data
            will be removed.
          </p>
        </section>

        {/* HOW TO REQUEST */}
        <section className="space-y-4">

          <h2 className="text-lg font-semibold">
            How to Request Account Deletion
          </h2>

          <ol className="list-decimal pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              Send an email to <strong>support@staplerun.com</strong>.
            </li>

            <li>
              Send the request from the email address associated with your
              StapleRun account.
            </li>

            <li>
              Use the subject line:
              <strong> Account Deletion Request</strong>.
            </li>

            <li>
              We may contact you to verify account ownership before processing
              the request.
            </li>
          </ol>

        </section>

        {/* DATA REMOVED */}
        <section className="space-y-4">

          <h2 className="text-lg font-semibold">
            Data That May Be Deleted
          </h2>

          <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>Account profile information</li>
            <li>Email address associated with the account</li>
            <li>Household membership information</li>
            <li>Shopping lists</li>
            <li>Staples and recurring item history</li>
            <li>Cloud-synchronized preferences and settings</li>
          </ul>

        </section>

        {/* GUEST MODE */}
        <section className="space-y-4">

          <h2 className="text-lg font-semibold">
            Guest Mode Data
          </h2>

          <p className="text-sm text-zinc-700">
            If you use StapleRun in Guest Mode without creating an account,
            your information is stored locally on your device.
          </p>

          <p className="text-sm text-zinc-700">
            You can remove Guest Mode data by clearing app data, clearing
            browser storage, or uninstalling the application.
          </p>

        </section>

        {/* RETENTION */}
        <section className="space-y-4">

          <h2 className="text-lg font-semibold">
            Processing Time
          </h2>

          <p className="text-sm text-zinc-700">
            Account deletion requests are typically processed within a
            reasonable period after verification of account ownership.
          </p>

        </section>

        {/* CONTACT */}
        <section className="space-y-3">

          <h2 className="text-lg font-semibold">
            Contact
          </h2>

          <p className="text-sm text-zinc-700">
            For questions regarding account deletion:
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