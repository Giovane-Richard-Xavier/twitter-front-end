"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const SigninForm = () => {
  const router = useRouter();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <>
      <Input type="password" />

      <Button size="icon">...</Button>
    </>
  );
};
