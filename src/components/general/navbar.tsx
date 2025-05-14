import Link from "next/link";
import { Button } from "@/components/ui/button";
export function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-xl font-semibold">Navigation</h1>
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-500 transition-colors"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button className="cursor-pointer">Login</Button>
        <Button className="cursor-pointer">Sign up</Button>
      </div>
    </nav>
  );
}
