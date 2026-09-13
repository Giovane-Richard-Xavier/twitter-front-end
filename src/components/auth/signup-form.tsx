"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const SignupForm = () => {
  const router = useRouter();

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSubmit = () => {
    console.log("email ->", emailField);
    console.log("senha ->", passwordField);
    router.replace("/");
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col gap-6 p-8 mt-10 mb-14">
        <Input
          label="Nome"
          // label={<Label required>E-mail</Label>}
          id="name"
          placeholder="Digite seu nome"
          type="text"
          className="w-xs"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />

        <Input
          label="E-mail"
          // label={<Label required>E-mail</Label>}
          id="email"
          placeholder="Digite seu e-mail"
          type="text"
          className="w-xs"
          // rightIcon={<IconMail size={18} />}
          value={emailField}
          onChange={(e) => setEmailField(e.target.value)}
        />

        <Input
          label="Senha"
          // label={<Label required>Senha</Label>}
          id="password"
          placeholder="Digite sua senha"
          type="password"
          className="w-xs"
          showPasswordToggle
          value={passwordField}
          onChange={(e) => setPasswordField(e.target.value)}
        />

        <Button type="submit" className="w-xs mt-16">
          Criar conta
        </Button>
      </div>
    </form>
  );
};
