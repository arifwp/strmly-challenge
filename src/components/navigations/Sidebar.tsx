import clsx from "clsx";
import Image from "next/image";
import { menuNav } from "./BottomNav";

export const Sidebar = () => {
  return (
    <div className="w-[210px] hidden sm:flex flex-col gap-y-5 overflow-y-auto bg-(--color-primary) px-6">
      <div className="gap-4 flex h-16 shrink-0 items-center">
        <Image
          alt="Logo"
          src="/assets/images/logo.webp"
          className="h-6 w-auto rounded-full aspect-square"
          width={100}
          height={100}
        />

        <h1 className="font-bold text-md/8">STRMLY</h1>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {menuNav.map((item) => (
                <li key={item.name}>
                  {item.id === 5 ? (
                    <div
                      className={clsx(
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-normal cursor-pointer hover:bg-gray-50/10 transition-colors duration-200"
                      )}
                    >
                      <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                        <Image
                          src={"https://randomuser.me/api/portraits/men/75.jpg"}
                          width={100}
                          height={100}
                          className="object-cover"
                          alt="Avatar"
                        />
                      </div>
                      {item.name}
                    </div>
                  ) : (
                    <div
                      className={clsx(
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-normal cursor-pointer hover:bg-gray-50/10 transition-colors duration-200",
                        {
                          "bg-gray-50/10 hover:bg-gray-50/20": item.id === 2,
                        }
                      )}
                    >
                      {item.id === 2 ? (
                        <item.iconSolid
                          aria-hidden="true"
                          className={clsx("size-6 shrink-0 text-white")}
                        />
                      ) : (
                        <item.iconOutline
                          aria-hidden="true"
                          className={clsx("size-6 shrink-0 text-white")}
                        />
                      )}
                      {item.name}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
