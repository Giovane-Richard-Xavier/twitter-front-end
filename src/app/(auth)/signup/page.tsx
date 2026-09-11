import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function SignupPage() {
  return (
    <section className="max-w-lg mx-auto mt-12 px-6">
      <div className="flex flex-col items-center gap-6 mb-5">
        <Logo size={80} />
        <h1 className="text-2xl">Crie a sua conta</h1>
      </div>

      <div className="flex flex-col gap-4 items-center justify-start mb-5">
        <SignupForm />
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row gap-1">
        <div className="text-gray-500">Já tem uma conta?</div>
        <Link href="/signin" className="text-blue-500 hover:underline">
          Entrar
        </Link>
      </div>
    </section>
  );
}
