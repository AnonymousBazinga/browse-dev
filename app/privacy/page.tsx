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

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">Privacy Policy</h1>

          <div className="prose prose-zinc max-w-none">
            <p>Last Updated: April 8, 2025</p>

            <h2>Introduction</h2>
            <p>
              At browse.dev, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>

            <h2>Data We Collect</h2>
            <p>
              When you join our waitlist, we collect your email address and any other information you voluntarily
              provide. We use this information solely to communicate with you about our product launch and updates.
            </p>

            <h2>How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Manage your registration on our waitlist</li>
              <li>Notify you about product launches and updates</li>
              <li>Improve our website and user experience</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way, altered, or disclosed.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to request access, correction, erasure, restriction, transfer, or to object to
              processing.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at
              privacy@browse.dev.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
