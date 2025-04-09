"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-zinc-900">browse.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="/#video" className="text-sm text-zinc-600 hover:text-zinc-900">
            Demo
          </Link>
          <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900">
            About
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 pt-6">
              <Link href="/#video" className="text-lg font-medium text-zinc-900 hover:text-zinc-600">
                Demo
              </Link>
              <Link href="/about" className="text-lg font-medium text-zinc-900 hover:text-zinc-600">
                About
              </Link>
              <Link
                href="/#waitlist"
                className="rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Join Waitlist
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
