import { SigninForm } from "@/components/auth/siginin-form";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioButton } from "@/components/ui/Radiobutton";
import { TextArea } from "@/components/ui/TextArea";

export default function Page() {
  function onSubmit() {
    // console.log(data);
  }

  return (
    <main className="w-screen min-h-screen">
      <section className="flex items-center justify-center h-screen">
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
        <SigninForm />
      </section>
    </main>
  );
}
