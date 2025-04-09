"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Twitter, Linkedin } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
    <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
          <h3 className="mb-2 text-2xl font-semibold">You're on the waitlist!</h3>
          <p className="mb-6 text-zinc-600 max-w-md">
            Thank you for your interest in browse.dev. We'll notify you when we launch.
          </p>
          <p className="mb-4 text-sm text-zinc-500">Want early access? Share it and jump the line ↓</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=Just+joined+the+waitlist+for+%40browse_dev+%F0%9F%9A%80+An+agentic+browser+that+automates+your+workflow+on+the+web.+Get+in+line%3A+browse.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-blue-500 transition hover:bg-blue-50"
            >
              <Twitter className="h-4 w-4" /> Share on X
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbrowse.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
            >
              <Linkedin className="h-4 w-4" /> Share on LinkedIn
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
          <div className="w-full sm:flex-1">
            <Label htmlFor="name" className="text-sm text-zinc-600">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="w-full sm:flex-1">
            <Label htmlFor="email" className="text-sm text-zinc-600">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="mt-2 sm:mt-6 whitespace-nowrap">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
