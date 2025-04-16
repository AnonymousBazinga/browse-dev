"use client"

import { useState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <div className="mx-auto w-full max-w-md">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center">
          <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
          <h3 className="mb-2 text-2xl font-semibold">You're on the waitlist!</h3>
          <p className="mb-6 text-zinc-600 max-w-md">
            Thank you for your interest in browse.dev. We'll notify you when we launch.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=Just+joined+the+waitlist+for+%40browse_dev+%F0%9F%9A%80+An+agentic+browser+that+automates+your+workflow+on+the+web.+Get+in+line%3A+browse.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-blue-500 transition hover:bg-blue-50"
            >
              Share on X
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbrowse.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-b-2 border-zinc-300 bg-transparent px-2 py-2 text-lg focus:border-zinc-900 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-900 disabled:text-zinc-400"
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