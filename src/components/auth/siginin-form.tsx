"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

export const SigninForm = () => {
  const router = useRouter();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <>
      <Input
        // label="E-mail"
        label={<Label required>E-mail</Label>}
        id="email"
        placeholder="Digite seu e-mail"
        type="text"
        className="w-xs"
      />

      <Input
        // label="Senha"
        label={<Label required>Senha</Label>}
        id="password"
        placeholder="Digite sua senha"
        type="password"
        className="w-xs"
      />

      <Button className="w-xs mt-5">Entrar</Button>
    </>
  );
};
