import { Twitter, Github, Linkedin } from "lucide-react"

export default function SocialShare() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://twitter.com/intent/tweet?text=Check%20out%20browse.dev%20-%20a%20revolutionary%20development%20environment%20that%20transforms%20how%20you%20browse%2C%20code%2C%20and%20build%20on%20the%20web.&url=https%3A%2F%2Fbrowse.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-500 transition hover:text-zinc-900"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/browse-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-500 transition hover:text-zinc-900"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbrowse.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-500 transition hover:text-zinc-900"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  )
}
