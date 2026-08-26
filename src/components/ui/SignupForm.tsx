"use client";

import { useState, type FormEvent } from "react";

type SignupFormProps = {
  productName: string;
  ctaLabel?: string;
};

export default function SignupForm({
  productName,
  ctaLabel = "Notify Me",
}: SignupFormProps) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-sm font-medium text-primary">
        Thanks, you&apos;re on the list for {productName}.
      </p>
    );
  }

  const field =
    "w-full rounded-full bg-surface-container-lowest px-4 py-3 text-sm text-on-surface ring-1 ring-outline-variant placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary sm:flex-1";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor={`${productName}-name`} className="sr-only">
        Name
      </label>
      <input
        id={`${productName}-name`}
        name="name"
        type="text"
        required
        placeholder="Name"
        className={field}
      />
      <label htmlFor={`${productName}-email`} className="sr-only">
        Email
      </label>
      <input
        id={`${productName}-email`}
        name="email"
        type="email"
        required
        placeholder="Email"
        className={field}
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-md3 transition-all hover:brightness-110"
      >
        {ctaLabel}
      </button>
    </form>
  );
}
