import SignInWithGithub from "@/components/signin-with-github";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "@/components/signin-form";

type Props = {};

export default async function AuthPage({}: Props) {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
          <CardDescription>
            To access the private pages you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <SignInForm />
            <SignInWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
