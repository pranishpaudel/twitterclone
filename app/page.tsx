import Image from "next/image";
import { FaTwitter, FaHashtag } from "react-icons/fa";
import { RiHome7Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import ComGoogle from "@/components/google/index";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiCircleMore } from "react-icons/ci";
import "./globals.css";
import React from "react";
import { FeedCard } from "@/components/FeedCard/index";

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
      <div className="grid grid-cols-12 overflow-auto h-screen w-screen px-56 bg-black">
        <div className="col-span-3   pt-8">
          <div className="text-4xl h-fit text-white hover:bg-gray-600 rounded-full p-1 cursor-pointer transition-all w-fit">
            <FaTwitter />
          </div>
          <div className="mt-4 pr-4">
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
            <div className="mx-4 mt-5  pr-3 mr-5">
              <button className="text-white text-lg  font-semibold bg-sky-500 p-3 w-full rounded-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 text-white">
          <ComGoogle />
        </div>
      </div>
    </div>
  );
}
