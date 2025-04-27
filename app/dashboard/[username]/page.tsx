import { authClient } from "@/lib/auth/auth-client";

export default async function Dashboard() {
  const { data: session, error } = await authClient.getSession();
  return <div>{`Hello ${session?.user?.username}`}</div>;
}
