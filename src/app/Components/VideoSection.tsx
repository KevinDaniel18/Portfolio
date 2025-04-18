"use client";

import { useState, useEffect, useRef } from "react";
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
import YouTube, { YouTubePlayer } from "react-youtube";

function VideoSection() {
  const videos = [
    {
      videoId: "AWigCFx8pzU",
      title: "User Interaction",
      description: "See how users can interact with the application interface.",
    },
    {
      videoId: "OXKCjeEVn-o",
      title: "2FA Account Deletion",
      description:
        "Learn how to delete an account using two-factor authentication.",
    },
    {
      videoId: "vZaiwuO0Vz4",
      title: "Exploring Feed",
      description:
        "Discover how the content feed works and how to navigate it.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef<YouTubePlayer>();

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    playerRef.current?.pauseVideo();
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    isMuted ? playerRef.current.unMute() : playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    const iframe = playerRef.current.getIframe();
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 rounded-xl">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-black aspect-video shadow-xl">
            <YouTube
              videoId={videos[activeVideo].videoId}
              onReady={onReady}
              className="absolute top-0 left-0 w-full h-full"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 0,
                  controls: 0,
                  modestbranding: 1,
                },
              }}
            />

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
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 flex items-center justify-center"
              onClick={prevVideo}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 flex items-center justify-center"
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
