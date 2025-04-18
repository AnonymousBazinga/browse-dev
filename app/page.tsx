import Link from "next/link"
import { ArrowRight } from "lucide-react"
import VideoSection from "@/components/video-section"
import WaitlistForm from "@/components/waitlist-form"
import SocialShare from "@/components/social-share"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Waitlist Form */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100 to-white" />
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
            Meteor.
          </h1>
          <p className="mb-10 text-xl text-zinc-600">
            The world's first agentic browser — understand pages, suggest actions, and automate tasks with one click.
          </p>

          {/* Waitlist Form added directly in the hero section */}
          <div className="mb-10">
            <WaitlistForm />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#video"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
            >
              Watch Demo
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex animate-bounce cursor-pointer flex-col items-center justify-center">
            <span className="text-sm text-zinc-500">Scroll to explore</span>
            <svg
              className="mt-1 h-6 w-6 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Footer */}
      <footer className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} browse.dev. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900">
                About
              </Link>
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900">
                Privacy
              </Link>
              {/* <Link href="/terms" className="text-sm text-zinc-500 hover:text-zinc-900">
                Terms
              </Link> */}
              {/* <SocialShare /> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}