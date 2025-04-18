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

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">About Meteor</h1>

          {/* Summary */}
          <div className="mb-12 space-y-4 text-lg text-zinc-700">
            <p>Meteor is an agentic browser that can do stuff for you.</p>
            <p>We blend the flexibility of a modern browser with the power of intelligent task automation.</p>
            <p>Our vision is to make a browser that knows you, understands what you need and execute on your behalf — almost like your very own personal assistant.</p>
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
              {/* <p className="mb-2 text-zinc-600">Co-founder & CEO</p> */}
              <div className="flex space-x-4">
                <a href="https://x.com/pranavcmadhukar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/pranav-madhukar-pcm/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
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
              {/* <p className="mb-2 text-zinc-600">Co-founder & CTO</p> */}
              <div className="flex space-x-4">
                <a href="https://x.com/FarhanK85141" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/farhankhan4/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900">Join Us</h2>
          <div className="prose prose-zinc max-w-none">
            <p>
              If you're building something similar and want to work 100 hours/week with us, reach out!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
