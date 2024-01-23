import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Hello to NextAuthJs</h1>
      {session ? (
        <div>
          <h2>You are logged in</h2>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
