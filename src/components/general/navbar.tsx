import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";
export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Log out
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Sign in</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
