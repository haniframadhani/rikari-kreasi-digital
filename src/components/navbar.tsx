"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Navbar({links}:{links: { id: string; label: string }[]}) {
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      role="banner"
      aria-label="Primary"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToId("hero")}
          aria-label="Go to top"
        >
          <Image src={logo} alt="logo" className="w-9 h-9 rounded-md" />
          <span className="text-sm font-semibold tracking-tight text-gray-900 md:text-base">
            Rikari Kreasi Digital
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => scrollToId(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Right actions (Desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" onClick={() => scrollToId("contact")}>
            <Phone className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={() => scrollToId("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Start Project
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <Button
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={() => scrollToId(link.id)}
                    >
                      {link.label}
                    </Button>
                  </SheetClose>
                ))}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      onClick={() => scrollToId("contact")}
                    >
                      Contact
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => scrollToId("contact")}
                    >
                      Start
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
