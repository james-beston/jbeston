import Link from "next/link";

export default function Header() {
  return (
    <header className="backdrop-blur-sm bg-white/10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold">
            JBeston
          </Link>
        </div>
      </nav>
    </header>
  )
}