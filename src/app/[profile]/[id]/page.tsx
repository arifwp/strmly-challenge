"use client";

import { mockVideos } from "@/app/page";
import { AvatarSkeleton } from "@/components/loadings/AvatarSkeleton";
import { TextSkeleton } from "@/components/loadings/TextSkeleton";
import { VideoItem } from "@/components/VideoPlayer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataUser, setDataUser] = useState<VideoItem | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const findUser = mockVideos.find((v) => v.id === Number(id));
      setTimeout(() => {
        setDataUser(findUser);
        setIsLoading(false);
      }, 5000);
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <AvatarSkeleton className="size-24" />
      ) : (
        <Image
          className="object-cover aspect-square rounded-full"
          width={100}
          height={100}
          src={dataUser?.userImage ?? ""}
          alt="Profile"
        />
      )}

      {isLoading ? (
        <TextSkeleton />
      ) : (
        <h1 className="text-md">{dataUser?.userName}</h1>
      )}
    </>
  );
}
