import { BottomNav } from "@/components/navigations/BottomNav";
import { Sidebar } from "@/components/navigations/Sidebar";
import { VideoItem, VideoPlayer } from "@/components/VideoPlayer";

export const mockVideos: VideoItem[] = [
  {
    id: 1,
    videoUrl: "https://youtube.com/shorts/Vn07XKVBs0A?si=pEyf8pGF9W4rj2Vk",
    title: "Example",
    description: "Lorem Ipsum",
    userName: "johndoe",
    userImage: "https://randomuser.me/api/portraits/men/75.jpg",
    likes: "200K",
    comments: "1.3K",
    shares: "456",
    earnings: "₹ 2.1K",
    isPaid: false,
  },
  {
    id: 2,
    videoUrl: "https://youtube.com/shorts/8rS-x3z2zp0?si=LOK6BUYNHsDlned8",
    title: "Hindia - Cincin",
    description: "Cincin",
    userName: "claralauren",
    userImage: "https://randomuser.me/api/portraits/men/12.jpg",
    likes: "200K",
    comments: "1.3K",
    shares: "456",
    earnings: "₹ 2.1K",
    isPaid: true,
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <div className="w-full flex flex-row">
        <Sidebar />

        <div className="flex flex-1 relative overflow-hidden">
          <VideoPlayer videos={mockVideos} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
