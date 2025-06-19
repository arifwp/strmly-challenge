"use client";

import dynamic from "next/dynamic";
import { VideoPlayerOverlay } from "./VideoPlayerOverlay";
import { useEffect, useState, useRef } from "react";
import { useActiveVideoIndex } from "@/hooks/useActiveVideoIndex";
import { SpinnerLoading } from "./loadings/SpinnerLoading";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface VideoItem {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
  userName: string;
  userImage: string;
  likes: string;
  comments: string;
  shares: string;
  earnings: string;
  isPaid: boolean;
}

export const VideoPlayer = ({ videos }: { videos: VideoItem[] }) => {
  const [dataVideo, setDataVideo] = useState<VideoItem[]>([]);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    new Array(videos.length).fill(true)
  );
  const { activeIndex, containerRef } = useActiveVideoIndex(dataVideo.length);
  const [progressStates, setProgressStates] = useState<number[]>(
    new Array(videos.length).fill(0)
  );
  const playerRefs = useRef<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setDataVideo(videos);
    }, 5000);
  }, [videos]);

  useEffect(() => {
    setPlayingStates((prev) => {
      const newStates = [...prev];
      newStates[activeIndex] = true;
      return newStates;
    });
  }, [activeIndex]);

  const handleVideoClick = (index: number) => {
    if (index === activeIndex) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);

      const player = playerRefs.current[index];
      if (player && player.getInternalPlayer) {
        try {
          const internalPlayer = player.getInternalPlayer();
          if (internalPlayer) {
            if (newMutedState) {
              internalPlayer.mute();
            } else {
              internalPlayer.unMute();
            }
          }
        } catch (error) {
          console.log("Error controlling player:", error);
        }
      }
    }
  };

  const handleProgress = (progress: any, index: number) => {
    if (index === activeIndex) {
      setProgressStates((prev) => {
        const newStates = [...prev];
        newStates[index] = progress.played * 100;
        return newStates;
      });
    }
  };

  const handlePlayPause = () => {
    setPlayingStates((prev) => {
      const newStates = [...prev];
      newStates[activeIndex] = !newStates[activeIndex];
      return newStates;
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full py-4 max-w-sm h-[calc(100dvh-70px)] sm:h-screen mx-auto gap-4 flex flex-col snap-y snap-mandatory overflow-y-scroll hide-scrollbar"
    >
      {dataVideo.length === 0 ? (
        <SpinnerLoading />
      ) : (
        videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full h-full snap-center flex-shrink-0"
            style={{ aspectRatio: "var(--main-aspect-ratio)" }}
          >
            <div className="relative h-full w-full overflow-hidden bg-black rounded-lg">
              <ReactPlayer
                ref={(el: any) => (playerRefs.current[index] = el)}
                url={video.videoUrl}
                width="100%"
                height="100%"
                loop
                playing={index === activeIndex && playingStates[index]}
                muted={index === activeIndex ? isMuted : true}
                playsinline
                controls={false}
                onProgress={(progress) => handleProgress(progress, index)}
                onReady={() => {
                  const player = playerRefs.current[index];
                  if (
                    player &&
                    player.getInternalPlayer &&
                    index === activeIndex
                  ) {
                    try {
                      const internalPlayer = player.getInternalPlayer();
                      if (internalPlayer) {
                        if (isMuted) {
                          internalPlayer.mute();
                        } else {
                          internalPlayer.unMute();
                        }
                      }
                    } catch (error) {
                      console.log("Error setting initial mute state:", error);
                    }
                  }
                }}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0,
                      playsinline: 1,
                      autoplay: 1,
                      mute: isMuted ? 1 : 0,
                    },
                  },
                  file: {
                    attributes: {
                      muted: index === activeIndex ? isMuted : true,
                    },
                  },
                }}
              />

              {index === activeIndex && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${progressStates[index]}%` }}
                  />
                </div>
              )}

              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => handleVideoClick(index)}
                onDoubleClick={handlePlayPause}
              />

              <VideoPlayerOverlay video={video} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
