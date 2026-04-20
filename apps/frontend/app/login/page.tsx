"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function validate() {
    const next: typeof errors = {};
    if (!email) next.email = "Email is required";
    if (!password) next.password = "Password is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: call login API
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-black mb-1">Sign in</h1>
        <p className="text-sm text-gray-500 mb-8">Enter your credentials to continue</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            autoComplete="email"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth>
            Sign in
          </Button>
        </form>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-black font-medium underline underline-offset-2 hover:text-gray-700">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
