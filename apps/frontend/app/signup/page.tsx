"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function validate() {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email) next.email = "Email is required";
    if (!form.password) next.password = "Password is required";
    else if (form.password.length < 8) next.password = "Password must be at least 8 characters";
    if (!form.confirmPassword) next.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) next.confirmPassword = "Passwords do not match";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: call signup API
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-black mb-1">Create account</h1>
        <p className="text-sm text-gray-500 mb-8">Fill in the details below to get started</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={set("name")}
            error={errors.name}
            autoComplete="name"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            error={errors.email}
            autoComplete="email"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={set("password")}
            error={errors.password}
            autoComplete="new-password"
          />
          <Input
            id="confirmPassword"
            label="Confirm password"
            type="password"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={set("confirmPassword")}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />

          <Button type="submit" fullWidth>
            Create account
          </Button>
        </form>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium underline underline-offset-2 hover:text-gray-700">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
