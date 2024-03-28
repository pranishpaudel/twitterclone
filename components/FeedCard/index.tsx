import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
export const FeedCard: React.FC = () => {
  return (
    <div className="text-white border border-r-0 border-b-0 border-l-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/122670872?s=96&v=4"
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5 className="font-semibold ml-1">Piyush Garg</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div className="mt-3 flex justify-evenly text-xl items-center">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <CiHeart />
            </div>

            <div>
              <GoUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
