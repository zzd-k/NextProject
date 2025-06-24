"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
  { name: "dashboard", href: "/dashboard" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>

        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              key={link.name}
              className={pathname === link.href ? "text-blue-500" : ""}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
