import { SignInForm } from "./signin-form";

export default async function signIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignInForm />
    </div>
  );
}
