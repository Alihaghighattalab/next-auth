"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";

type Props = {};

export default function SignInForm({}: Props) {
  const [email, setEmail] = useState<null | string>(null);
  const signInWithEmail = async () => {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signInResult?.ok)
      return toast({
        title: "Well this did not work ....",
        description: "something went wrong, please try again",
        variant: "destructive",
      });
    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  };
  return (
    <form action={signInWithEmail}>
      <div className="flex flex-col gap-y-5">
        <Label>Email</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          name="email"
          type="email"
          placeholder="name@example.com"
        />
        <Button type="submit">Login with email</Button>
      </div>
    </form>
  );
}
