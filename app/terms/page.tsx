import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">Terms of Service</h1>

          <div className="prose prose-zinc max-w-none">
            <p>Last Updated: April 8, 2025</p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing our website at browse.dev, you agree to be bound by these terms of service and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
              accessing this site.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on browse.dev's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on browse.dev's website are provided on an 'as is' basis. browse.dev makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall browse.dev or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on browse.dev's website, even if browse.dev or a browse.dev authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on browse.dev's website could include technical, typographical, or photographic
              errors. browse.dev does not warrant that any of the materials on its website are accurate, complete, or
              current. browse.dev may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at legal@browse.dev.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
