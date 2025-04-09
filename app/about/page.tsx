import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Twitter, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">About browse.dev</h1>

          {/* Summary */}
          <div className="mb-12 space-y-4 text-lg text-zinc-700">
            <p>browse.dev is an AI-powered browser that automates your web workflows with one click.</p>
            <p>We blend the flexibility of a modern browser with the power of intelligent task automation.</p>
            <p>Our vision is to remove the friction between browsing and development, letting you focus on creation.</p>
            <p>Join us in shaping the future where the web anticipates your needs and acts on your behalf.</p>
          </div>

          {/* Team */}
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {/* Pranav */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full bg-zinc-100">
                <img src="/pranav.jpg" alt="Pranav" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Pranav</h3>
              <p className="mb-2 text-zinc-600">Co-founder & CEO</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/your_pranav_handle" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/your_pranav_handle" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            {/* Farhan */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full bg-zinc-100">
                <img src="/farhan.jpg" alt="Farhan" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Farhan</h3>
              <p className="mb-2 text-zinc-600">Co-founder & CTO</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/your_farhan_handle" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/your_farhan_handle" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900">Join Us</h2>
          <div className="prose prose-zinc max-w-none">
            <p>
              We're currently in private beta, refining our product with a select group of developers. If you're
              interested in being among the first to experience browse.dev, join our waitlist on the homepage.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
