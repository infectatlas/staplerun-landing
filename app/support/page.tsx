export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-sm text-zinc-500 mt-2">
            StapleRun — Help & troubleshooting
          </p>
        </div>

        {/* INTRO */}
        <section className="space-y-3 text-sm text-zinc-700">
          <p>
            Need help with StapleRun? This page provides guidance for common issues and explains how to contact support.
          </p>

          <p>
            We typically respond to support requests within 1–3 business days, depending on volume.
          </p>
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Support</h2>

          <p className="text-sm text-zinc-700">
            For assistance, email our support team:
          </p>

          <a
            href="mailto:support@staplerun.com"
            className="text-sm font-medium text-zinc-900 underline"
          >
            support@staplerun.com
          </a>

          <p className="text-xs text-zinc-500">
            Please include your device type, app version (if available), and a clear description of the issue.
          </p>
        </section>

        {/* COMMON ISSUES */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold">Common Issues</h2>

          <div className="space-y-5 text-sm text-zinc-700">

            <div>
              <p className="font-medium text-zinc-900">Account & login issues</p>
              <p>
                Ensure you are using the correct email address. If issues persist, try logging out and logging back in.
              </p>
            </div>

            <div>
              <p className="font-medium text-zinc-900">Missing or unsynced data</p>
              <p>
                Make sure you are signed into the same account on all devices and have a stable internet connection for sync.
              </p>
            </div>

            <div>
              <p className="font-medium text-zinc-900">Household sharing issues</p>
              <p>
                Only invited users can access shared household lists. Confirm your invitation status with the household owner.
              </p>
            </div>

            <div>
              <p className="font-medium text-zinc-900">Unexpected behavior or bugs</p>
              <p>
                Refresh the app or restart it. If the issue persists, please report it with steps to reproduce.
              </p>
            </div>

          </div>
        </section>

        {/* DATA & LEGAL ROUTE */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Account & Data Requests</h2>

          <p className="text-sm text-zinc-700">
            For account deletion or personal data requests, please use the dedicated page below:
          </p>

          <a
            href="/delete-account"
            className="text-sm text-zinc-900 underline"
          >
            Account Deletion →
          </a>

          <p className="text-xs text-zinc-500">
            Requests may require verification to protect account security.
          </p>
        </section>

        {/* LIMITATION (IMPORTANT LEGAL SAFETY LINE) */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Support Scope</h2>

          <p className="text-sm text-zinc-700">
            StapleRun support is provided for application functionality, account access, and data-related issues.
            We do not provide support for third-party services, devices, or operating system-level problems.
          </p>
        </section>

        {/* SECURITY / TRUST */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Security & Privacy</h2>

          <p className="text-sm text-zinc-700">
            StapleRun does not sell user data. All information is used strictly to operate core features such as shopping lists, syncing, and household sharing.
          </p>
        </section>

        {/* FOOTER */}
        <div className="pt-6 border-t border-zinc-100 text-xs text-zinc-400">
          StapleRun Support • Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}ç