"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const blogLinks = [
  "Online Marketing",
  "Social Media",
  "Conversion Rate Optimization",
  "Paid Ads",
  "Content Marketing",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // helper: active route check
  const isActive = (path: string) => pathname === path;

  // reusable nav item classes
  const navItem =
    "relative group py-2 text-lg font-medium transition-all duration-300";

  const activeStyles = "text-orange-500 scale-105";

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-orange-500">VIRALAD</span>FUNNEL
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE-IN MENU */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[360px] bg-white px-6 py-6
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-semibold text-gray-400">MENU</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* NAV ITEMS */}
        <nav className="space-y-4">
          {/* BLOG ROW */}
          <div>
            <button
              onClick={() => router.push("/blog")}
              className={`${navItem} ${
                isActive("/blog") ? activeStyles : "text-gray-900"
              } hover:text-orange-500 hover:scale-105`}
            >
              Blog
              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500
                origin-left transition-transform duration-300
                ${
                  isActive("/blog")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            {/* dropdown toggle */}
            <button onClick={() => setBlogOpen(!blogOpen)} className="ml-2 p-2">
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  blogOpen ? "rotate-180 text-orange-500" : ""
                }`}
              />
            </button>
          </div>

          {/* BLOG DROPDOWN */}
          <div
            className={`ml-4 overflow-hidden transition-all duration-300 ${
              blogOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-3 text-gray-600">
              {blogLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block hover:text-orange-500 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* PRICING */}
          <div>
            <Link
              href="/pricing"
              className={`${navItem} ${
                isActive("/pricing") ? activeStyles : "text-gray-900 "
              } hover:text-orange-500 hover:scale-105`}
            >
              Pricing
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500
              origin-left transition-transform duration-300 
              ${
                isActive("/pricing")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
              />
            </Link>
          </div>

          {/* RESULTS */}
          <div>
            <Link
              href="/results"
              className={`${navItem} ${
                isActive("/results") ? activeStyles : "text-gray-900"
              } hover:text-orange-500 hover:scale-105`}
            >
              Results
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>

          {/* TRAINING */}
          <div>
            <Link
              href="/training"
              className={`${navItem} ${
                isActive("/training") ? activeStyles : "text-gray-900"
              } hover:text-orange-500 hover:scale-105`}
            >
              Training
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
