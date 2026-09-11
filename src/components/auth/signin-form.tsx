"use client";

import { IconMail } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const SigninForm = () => {
  const router = useRouter();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSubmit = () => {
    console.log("email ->", emailField);
    console.log("senha ->", passwordField);
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col gap-6 p-8 rounded-sm border border-zinc-200 mt-10 mb-14">
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

        <Button type="submit" className="w-xs mt-5">
          Entrar
        </Button>
      </div>
    </form>
  );
};
