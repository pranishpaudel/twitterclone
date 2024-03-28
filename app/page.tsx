import Image from "next/image";
import { FaTwitter, FaHashtag } from "react-icons/fa";
import { RiHome7Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiCircleMore } from "react-icons/ci";
import "./globals.css";
import React from "react";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <RiHome7Line />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple />,
  },
  {
    title: "Twitter Blue",
    icon: <LiaTwitterSquare />,
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56 bg-black">
        <div className="col-span-3   pt-8">
          <div className="text-4xl h-fit text-white hover:bg-gray-600 rounded-full p-1 cursor-pointer transition-all w-fit">
            <FaTwitter />
          </div>
          <div className="mt-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center  text-white font-semibold gap-3 text-2xl hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all w-fit h-fit"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-r-slate-500 border-l-slate-500"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
