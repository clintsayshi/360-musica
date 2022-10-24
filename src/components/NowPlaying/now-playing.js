import React from "react";
import { IoShuffle } from "react-icons/io5";
import { TbRepeatOnce, TbRepeat } from "react-icons/tb";
import {
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsFillPlayFill,
} from "react-icons/bs";
import cover from "../../images/cover-01.png";

function NowPlaying() {
  return (
    <footer className="fixed inset-x-0 border bg-green-500 bottom-0 w-full py-4">
      <div className="container border mx-auto sm:grid grid-cols-4">
        <div className="flex items-center space-x-3 col-span-1">
          <div className="border">
            <figure className="">
              <img className="w-14 aspect-square" src={cover} alt="" />
            </figure>
          </div>
          <div className="border">
            <h3 className="text-base leading-none font-medium">Seasons in</h3>
            <p className="text-sm">James</p>
          </div>
        </div>

        <div className="hidden sm:flex bg-black col-span-2 border flex-col">
          <div className="space-x-4 flex justify-center">
            <button>
              <IoShuffle className="text-2xl text-white" />
            </button>
            <button>
              <BsFillSkipStartFill className="text-2xl text-white" />
            </button>
            <button className="p-1 rounded-full bg-yellow-400">
              <BsFillPlayFill className="text-2xl text-white" />
            </button>

            <button>
              <BsFillSkipEndFill className="text-2xl text-white" />
            </button>
            <button>
              <TbRepeatOnce className="text-2xl text-white" />
            </button>
          </div>

          <div></div>
        </div>

        <div className="hidden sm:flex col-span-1">volume</div>
      </div>
    </footer>
  );
}

export default NowPlaying;
