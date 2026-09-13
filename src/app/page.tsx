import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";

export default function Page() {
  // redirect("/home");

  return (
    <main className="w-screen min-h-screen flex items-center justify-center">
      <section className="flex items-center justify-center h-screen">
        <Logo size={180} />
      </section>
    </main>
  );
}
