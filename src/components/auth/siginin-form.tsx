"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { IconEye, IconEyeOff, IconMail } from "@tabler/icons-react";

export const SigninForm = () => {
  const router = useRouter();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <div className="flex flex-col gap-5 max-w-lg p-8 rounded-sm border border-zinc-200">
      <Input
        // label="E-mail"
        label={<Label required>E-mail</Label>}
        id="email"
        placeholder="Digite seu e-mail"
        type="text"
        className="w-xs"
        rightIcon={<IconMail size={18} />}
      />

      <Input
        // label="Senha"
        label={<Label required>Senha</Label>}
        id="password"
        placeholder="Digite sua senha"
        type="password"
        className="w-xs"
        showPasswordToggle
      />

      <Button className="w-xs mt-5">Entrar</Button>
    </div>
  );
};
