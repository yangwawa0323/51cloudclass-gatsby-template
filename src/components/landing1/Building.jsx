import * as React from "react";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccessAlarm from "@mui/icons-material/AccessAlarm";
import ArrowForward from "@mui/icons-material/ArrowForward";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import Extension from "@mui/icons-material/Extension";
import Search from "@mui/icons-material/Search";
import Smartphone from "@mui/icons-material/Smartphone";

const BuildingBlock = () => {
  return (
    <div className="building-block flex flex-col gap-20 p-24 justify-center items-center ">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <p className="uppercase text-sm text-purple-700 font-extrabold">
          complete toolkit
        </p>
        <h2 className="text-center">Building blocks for your next website.</h2>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <BorderColorIcon htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h4>CMS</h4>
              <p className="text-center font-medium text-sm text-gray-500">
                Write, edit and update content across CMS pages.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <Smartphone htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h4>Fully responsive</h4>
              <p className="text-center font-medium text-sm text-gray-500">
                Layouts that adapt to any device.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <AccessAlarm htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h4>Easy to customize</h4>
              <p className="text-center font-medium text-sm text-gray-500">
                Change anything with just a few clicks.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <Search htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h4>Optimized for SEO</h4>
              <p className="text-center font-medium text-sm text-gray-500">
                Pages optimized for search engines.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <AutoAwesome htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h5 className="text-center">Animations &amp; Effects</h5>
              <p className="text-center font-medium text-sm text-gray-500">
                A variety of dynamic interactions.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl duration-700 border-[1px] p-10 flex flex-col gap-10 justify-center items-center">
            <div
              style={{
                background: "rgb(246,244,255)",
              }}
              className="w-12 h-12 rounded-md flex flex-col justify-center items-center"
            >
              <Extension htmlColor="rgb(136,0,255)" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center ">
              <h4>Plugins</h4>
              <p className="text-center font-medium text-sm text-gray-500">
                Forms, videos, socials and more.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <p className="text-sm font-extrabold  text-purple-700 ">
              See all features
            </p>
            <ArrowForward
              className="hover:translate-x-2 transition-all duration-700"
              fontSize="12px"
              htmlColor="rgb(136,0,255)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingBlock;
