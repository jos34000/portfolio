import { authClient } from "@/lib/auth/auth-client";

export default async function Dashboard() {
  const { data: session } = await authClient.getSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      Dashboard
    </div>
  );
}
