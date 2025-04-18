"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        // Pause YouTube video
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      } else {
        // Play YouTube video
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        // Unmute YouTube video
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*')
      } else {
        // Mute YouTube video
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*')
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="video" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          See Meteor in action
        </h2>
        <p className="mb-10 text-center text-lg text-zinc-600">
          Watch our product demo to see how Meteor transforms how you search the web.
        </p>

        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 shadow-xl">
          {/* YouTube iframe */}
          <iframe
            ref={videoRef}
            className="h-full w-full object-cover"
            src="https://www.youtube.com/embed/rjPMMhqyApc?enablejsapi=1"
            title="browse.dev product demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Custom video controls */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <button
              onClick={togglePlay}
              className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleMute}
              className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-zinc-500">
          Join the waitlist for early access!
        </p>
      </div>
    </section>
  )
}