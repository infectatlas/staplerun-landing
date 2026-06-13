import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100/60 backdrop-blur-md bg-white/75">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon-512.png"
            alt="StapleRun"
            width={44}
            height={44}
            className="rounded-xl"
          />
          <span className="font-bold text-lg tracking-tight">
            StapleRun
          </span>
        </Link>

        <div className="text-sm text-zinc-500 hidden sm:block">
          Recurring essentials memory system
        </div>

      </div>
    </header>
  );
}