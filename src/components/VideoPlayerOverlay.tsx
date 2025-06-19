"use client";

import {
  ArrowDownIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  CurrencyRupeeIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  HeartIcon,
  PaperAirplaneIcon,
  PlusIcon,
  ViewfinderCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VideoItem } from "./VideoPlayer";

export const VideoPlayerOverlay = ({ video }: { video: VideoItem }) => {
  const router = useRouter();
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 p-4 text-white z-20">
        <div className="w-full gap-4 flex justify-between">
          <WalletIcon className="size-6 text-white" />

          <BellIcon className="size-6 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent z-20">
        <div className="gap-2 flex items-center">
          <HashtagIcon className="size-4 text-yellow-400" />

          <h1 className="font-semibold text-sm">Startup India</h1>
          <div className="p-1 border border-white rounded-md">
            <PlusIcon className="size-3 font-semibold text-white" />
          </div>
        </div>

        <div className="mt-4 gap-2 flex cursor-pointer">
          <div
            className="gap-2 flex items-center"
            onClick={() => router.push("profile")}
          >
            <Image
              src={video.userImage}
              alt={video.userName}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />

            <p className="font-bold">{video.userName}</p>
          </div>

          <div className="flex items-center">
            <p
              className="font-semibold border text-xs tracking-wide border-white px-1 py-[2px] rounded-md"
              onClick={() => setIsFollowed((prev) => !prev)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </p>
          </div>
        </div>

        <div className="w-full mt-2 gap-4 flex">
          <div className="flex flex-col">
            <div className="gap-4 flex flex-row items-center">
              <p className="text-sm line-clamp-3">{video.title}</p>

              <div className="gap-2 flex flex-row items-center justify-center text-xs font-light border border-white py-[0.5px] px-2 rounded-full opacity-70">
                <p>EN</p> <ArrowDownIcon className="size-3 text-white" />
              </div>
            </div>

            <p className="text-xs my-2 line-clamp-3 font-light">
              {video.description}
            </p>
          </div>

          <div className="gap-2 flex flex-col items-end justify-end">
            <div className="p-1 border border-white/50 rounded-md">
              <p className="text-xs font-semibold text-yellow-400">
                {video.isPaid ? "PAID" : "UNPAID"}
              </p>
            </div>

            <ViewfinderCircleIcon className="size-8 text-white/50" />
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-30 flex flex-col items-center gap-4">
        <button className="flex flex-col items-center">
          <HeartIcon className="size-8 text-white/60" />
          <span className="text-xs mt-1">{video.likes}</span>
        </button>

        <button className="flex flex-col items-center">
          <ChatBubbleOvalLeftIcon className="size-8 text-white/60" />
          <span className="text-xs mt-1">{video.comments}</span>
        </button>

        <button className="flex flex-col items-center">
          <PaperAirplaneIcon className="size-8 text-white/60" />
          <span className="text-xs mt-1">{video.shares}</span>
        </button>

        <button className="flex flex-col items-center">
          <CurrencyRupeeIcon className="size-8 text-white/60" />
          <span className="text-xs mt-1">{video.earnings}</span>
        </button>

        <button className="flex flex-col items-center">
          <EllipsisHorizontalIcon className="size-8 text-white/60" />
        </button>
      </div>
    </>
  );
};
