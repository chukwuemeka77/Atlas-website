// src/pages/Whitelist.tsx
import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { toast } from "../lib/toast";

export default function Whitelist() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    const res = await fetch("/api/whitelist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(`Email sent to ${email}!`);
      setEmail("");
    } else {
      toast.error(data.error || "Something went wrong");
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-lg mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Join the Atlas Whitelist</h1>

        <input
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-atlasBlue hover:bg-atlasPink transition text-white w-full p-3 rounded-lg"
        >
          Join Whitelist
        </button>
      </div>
    </PageWrapper>
  );
}
