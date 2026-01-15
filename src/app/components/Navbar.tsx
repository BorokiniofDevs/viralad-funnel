"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react"; // optional but clean

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Training", href: "/training" },
  { label: "Tools", href: "/tools" },
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close search on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#f05a28]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-wide text-white"
        >
          VIRALAD
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    relative pb-1 text-sm font-medium text-white
                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                    after:w-full after:origin-right after:scale-x-0
                    after:bg-white after:transition-transform after:duration-300
                    hover:after:origin-left hover:after:scale-x-100
                    ${isActive ? "after:scale-x-100 after:origin-left" : ""}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="relative flex items-center gap-4">
          {/* Search toggle */}
          <button
            aria-label="Open search"
            onClick={() => setOpen((prev) => !prev)}
            className="text-white transition-opacity hover:opacity-80"
          >
            <Search size={18} />
          </button>

          {/* Search dropdown */}
          <div
            ref={dropdownRef}
            className={`
              absolute right-0 top-12 w-64 rounded-md bg-white p-3 shadow-lg
              transition-all duration-200
              ${
                open
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }
            `}
          >
            <input
              type="search"
              placeholder="Search blog..."
              className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500"
              autoFocus={open}
            />
          </div>

          {/* Sign in */}
          <Link
            href="/signin"
            className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}
