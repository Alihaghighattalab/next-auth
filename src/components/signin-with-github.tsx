"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

type Props = {};

export default function SignInWithGithub({}: Props) {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      variant="secondary"
    >
      Login with Github <Github className="m-2 size-4" />{" "}
    </Button>
  );
}
