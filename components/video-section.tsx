"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="video" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          See browse.dev in action
        </h2>
        <p className="mb-10 text-center text-lg text-zinc-600">
          Watch our product demo to see how browse.dev transforms your development workflow.
        </p>

        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 shadow-xl">
          {/* Placeholder for video - replace src with your actual video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">Your video will appear here</p>
          </div>

          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="/placeholder.svg?height=720&width=1280"
            controls={false}
          >
            {/* Add your video source when available */}
            {/* <source src="/your-video-file.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>

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
          Upload your product demo video to showcase browse.dev's features.
        </p>
      </div>
    </section>
  )
}
