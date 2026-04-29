"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WHATSAPP_ADMISSION_URL } from "@/lib/links";
import { FaWhatsapp } from "react-icons/fa";
import { track } from "@vercel/analytics";

const navLinks = [
  { href: "#home", label: "Home" } ,
  { href: "#academics", label: "Academics" },
  { href: "#sports", label: "Sports" },
  { href: "#artCulture", label: "Art & Culture" },
  { href: "#realEducation", label: "Real Education" },
  { href: "#reviews", label: "Reviews" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200">
      
      {/* MAIN NAV */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3">
        
        {/* LOGO */}
    <Link href="/#home" className="flex items-center gap-3">

  <div className="relative h-16 w-16 sm:h-20 sm:w-20">
    <Image
      src="/Logo/Krishna School Logo 1.png"
      alt="Krishna School"
      fill
      className="object-contain scale-125"
      sizes="80px"
      priority
    />
  </div>

  <div className="leading-tight">
    <p className="text-base sm:text-lg font-semibold text-gray-800">
      Krishna School
    </p>
    <p className="text-xs sm:text-sm text-gray-500">
      Jamnagar
    </p>
  </div>

</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          
          {/* WHATSAPP BUTTON (ALWAYS VISIBLE) */}
          <Link
            href={WHATSAPP_ADMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("Admission_Click")}
            className="whatsapp-attention flex items-center gap-1.5 
                       h-10 px-7 
                       bg-[#25D366] text-white 
                       px-4 py-2 rounded-full 
                       text-s sm:text-sm font-semibold 
                       shadow-md 
                       hover:scale-105 active:scale-95 
                       transition-all duration-300"
          >
            <FaWhatsapp className="text-lg sm:text-xl scale-110" />
            <span className="hidden sm:inline">Enquiry Now</span>
          </Link>

          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 items-center justify-center 
            rounded-full border bg-white px-6 
            text-sm font-medium shadow-sm"
          >
            Menu
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100"
              >
                {l.label}
              </Link>
            ))}

            {/* EXTRA WHATSAPP CTA */}
            <Link
              href={WHATSAPP_ADMISSION_URL}
              target="_blank"
              onClick={() => track("Admission_Click")}
              className="flex items-center justify-center gap-2 
                         mt-2 rounded-full 
                         bg-[#25D366] text-white 
                         px-5 py-3 text-sm font-semibold 
                         shadow-md"
            >
              <FaWhatsapp />
              Enquiry Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}