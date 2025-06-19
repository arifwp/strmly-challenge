import {
  MagnifyingGlassIcon,
  PlayIcon,
  PlusIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  PlayIcon as PlayIconSolid,
  PlusIcon as PlusIconSolid,
  UserIcon as UserIconSolid,
  VideoCameraIcon as VideoCameraIconSolid,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface menuNav {
  id: number;
  name: string;
  iconOutline: React.ElementType;
  iconSolid: React.ElementType;
  isMain?: boolean;
  isAvatar?: boolean;
}

export const menuNav: menuNav[] = [
  { id: 1, name: "Home", iconOutline: PlayIcon, iconSolid: PlayIconSolid },
  {
    id: 2,
    name: "Video",
    iconOutline: VideoCameraIcon,
    iconSolid: VideoCameraIconSolid,
  },
  {
    id: 3,
    name: "Add",
    iconOutline: PlusIcon,
    iconSolid: PlusIconSolid,
  },
  {
    id: 4,
    name: "Search",
    iconOutline: MagnifyingGlassIcon,
    iconSolid: MagnifyingGlassIconSolid,
  },
  {
    id: 5,
    name: "Profile",
    iconOutline: UserIcon,
    iconSolid: UserIconSolid,
  },
];

export const BottomNav = () => {
  return (
    <div className="w-full h-[64px] sm:hidden fixed bottom-0 left-0 right-0">
      <div className="max-w-sm mx-auto px-4 pt-2 pb-4 flex items-center justify-between">
        {menuNav.map((item) =>
          item.id === 2 ? (
            <item.iconSolid key={item.id} className={"size-6 cursor-pointer"} />
          ) : item.id === 5 ? (
            <div
              key={item.id}
              className="w-[24px] h-[24px] rounded-full overflow-hidden"
            >
              <Image
                src={"https://randomuser.me/api/portraits/men/75.jpg"}
                width={100}
                height={100}
                className="object-cover"
                alt="Avatar"
              />
            </div>
          ) : (
            <item.iconOutline
              key={item.id}
              className={"size-6 cursor-pointer"}
            />
          )
        )}
      </div>
    </div>
  );
};
