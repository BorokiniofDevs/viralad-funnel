"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const [url, setUrl] = useState("");

  return (
    <section className="relative bg-white px-6 pt-24 pb-28">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Let’s Grow Your <span className="text-orange-500">Revenue</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-500">
          Through Digital Marketing.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button>Start My Analysis</Button>
        </div>

        <p className="mt-4 text-sm text-gray-400">Get answers in minutes.</p>
      </div>
    </section>
  );
}
