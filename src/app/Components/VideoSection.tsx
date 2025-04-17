"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function VideoSection() {
  const videos = [
    {
      src: "/videos/user-interaction.mp4",
      type: "video/mp4",
      title: "User Interaction",
      description: "See how users can interact with the application interface.",
    },
    {
      src: "/videos/2fa-deletion.mp4",
      type: "video/mp4",
      title: "2FA Account Deletion",
      description:
        "Learn how to delete an account using two-factor authentication.",
    },
    {
      src: "/videos/feed.mp4",
      type: "video/mp4",
      title: "Exploring Feed",
      description:
        "Discover how the content feed works and how to navigate it.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const handleVideoRef = (element: HTMLVideoElement | null) => {
    setVideoRef(element);
  };

  useEffect(() => {
    if (!videoRef) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setActiveVideo((prev) => (prev + 1) % videos.length);
    };

    videoRef.addEventListener("play", handlePlay);
    videoRef.addEventListener("pause", handlePause);
    videoRef.addEventListener("ended", handleEnded);

    return () => {
      videoRef.removeEventListener("play", handlePlay);
      videoRef.removeEventListener("pause", handlePause);
      videoRef.removeEventListener("ended", handleEnded);
    };
  }, [videoRef]);

  const togglePlay = () => {
    if (!videoRef) return;
    if (isPlaying) {
      videoRef.pause();
    } else {
      videoRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef) return;
    videoRef.muted = !videoRef.muted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.requestFullscreen();
    }
  };

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (!videoRef) return;
    videoRef.load();
    setIsPlaying(false);
  }, [activeVideo, videoRef]);

  return (
    <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 rounded-xl">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-black aspect-video shadow-xl">
            <video
              ref={handleVideoRef}
              className="w-full h-full object-contain"
              poster={`/placeholder.svg?height=720&width=1280&text=${encodeURIComponent(
                videos[activeVideo].title
              )}`}
            >
              <source
                src={videos[activeVideo].src}
                type={videos[activeVideo].type}
              />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay controls */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                className="h-16 w-16 rounded-full bg-black/30 text-white hover:bg-black/50 hover:scale-110 transition-all flex items-center justify-center"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8" />
                )}
              </Button>
            </div>

            {/* Video navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
              onClick={prevVideo}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
              onClick={nextVideo}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Bottom control bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex items-center justify-center text-white hover:bg-white/20"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex items-center justify-center text-white hover:bg-white/20"
                    onClick={toggleMute}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="text-sm font-medium">
                  {videos[activeVideo].title}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex items-center justify-center text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              {videos[activeVideo].title}
            </h3>
            <p className="text-muted-foreground">
              {videos[activeVideo].description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">More Videos</h3>
          <div className="grid gap-3">
            {videos.map((video, index) => (
              <Card
                key={index}
                className={cn(
                  "cursor-pointer transition-all hover:scale-105",
                  activeVideo === index ? "ring-2 ring-primary" : ""
                )}
                onClick={() => setActiveVideo(index)}
              >
                <CardContent className="p-3">
                  <div className="flex gap-3 items-center">
                    <div className="relative bg-black rounded-md overflow-hidden w-24 h-16 flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play
                          className={cn(
                            "w-6 h-6 text-white transition-opacity",
                            activeVideo === index ? "opacity-100" : "opacity-70"
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
