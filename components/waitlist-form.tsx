"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [checkmarkProgress, setCheckmarkProgress] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    // Animate the checkmark when success state is true
    if (isSuccess) {
      const timer = setTimeout(() => {
        setCheckmarkProgress(100)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      toast({
        title: "You're on the list!",
        description: "Thanks for joining. Share to get priority access 🚀",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // SVG path for the checkmark
  const checkPath = "M 12 22 C 17.5 22 22 17.5 22 12 C 22 6.5 17.5 2 12 2 C 6.5 2 2 6.5 2 12 C 2 17.5 6.5 22 12 22 Z M 7.75 12 L 11 15.25 L 16.25 8.75"

  return (
    <div className="mx-auto w-full max-w-md">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 h-12 w-12 text-green-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full"
            >
              <path
                d="M 12 22 C 17.5 22 22 17.5 22 12 C 22 6.5 17.5 2 12 2 C 6.5 2 2 6.5 2 12 C 2 17.5 6.5 22 12 22 Z"
                strokeDasharray="100"
                strokeDashoffset={100 - checkmarkProgress * 0.6}
                className="transition-all duration-700 ease-out"
              />
              <path
                d="M 7.75 12 L 11 15.25 L 16.25 8.75"
                strokeDasharray="100"
                strokeDashoffset={100 - checkmarkProgress}
                className="transition-all duration-700 ease-out"
                style={{ transitionDelay: "0.3s" }}
              />
            </svg>
          </div>
          <h3 className="mb-2 text-2xl font-semibold">You're on the waitlist!</h3>
          <p className="mb-6 text-zinc-600 max-w-md">
            Thank you for your interest in Meteor. We'll notify you when we launch.
          </p>
          <div className="flex gap-4">
            <a
              href="https://x.com/intent/post?text=Just%20joined%20the%20waitlist%20for%20Meteor%20-%20an%20agentic%20browser%20that%20can%20do%20stuff%20for%20you!%20Go%20to%20browse.dev%20to%20check%20it%20out."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.2 10.7L21.6 2h-1.9l-6.4 7.5L8.7 2H2.8l6.9 10.1L2 21h1.9l6.8-8L16.3 21h5.9l-7.2-10.3zm-1 3.4l-.8-1.1L5.6 3.4h2.5l5.5 7.8.8 1.1L21.4 20h-2.5l-5.7-7.9z" />
              </svg>
              Share on X
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbrowse.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              <Linkedin size={16} />
              Share on LinkedIn
            </a>
          </div>

          <hr className="my-8 w-full border-t border-zinc-200" />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-full border border-zinc-300 bg-transparent px-4 py-2 text-lg
                     focus:border-zinc-400 focus:outline-none focus:shadow-[0_0_20px_rgba(218,165,32,0.7)]
                     transition-all duration-300"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-900 disabled:text-zinc-400"
            aria-label="Join waitlist"
          >
            {isLoading ? (
              <div className="h-5 w-5 rounded-full border-2 border-zinc-300 border-t-zinc-900 animate-spin"></div>
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </button>
        </form>
      )}
    </div>
  )
}