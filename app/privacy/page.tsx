import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <main className="mx-auto max-w-3xl px-4 py-24 text-zinc-800">
          <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-4">
            We only collect your email address when you voluntarily join our waitlist. We use this to send you updates
            about Meteor. We do not sell, share, or misuse your information.
          </p>
          <p className="mb-4">
            If you'd like to be removed from the waitlist or have your data deleted, just contact us.
          </p>
          <p className="text-sm text-zinc-500 mt-12">Last updated: April 2025</p>
        </main>
        </div>
      </section>
    </main>
  )
}
