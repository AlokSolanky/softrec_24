import React, { useState } from "react";
import Carousel from "../components/Carousel";

const AboutUs = () => {
  const [list, setList] = useState([
    "It’s the oldest club of MCA which was introduced in the year 1989.",
    "SOFTREC stands for Students OF Tiruchirappalli Regional Engineering College.",
    "SOFTREC acts as a bridge between the current batches and the alumni batches.",
    "It is an association which maintains a world-wide interaction between the previous batches and the present batches.",
    "The community is expected to be a portal for knowledge & education and to forge relationships with NITT Students.",
  ]);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="text-3xl font-bold mt-[25px] mb-[25px]">About Us</div>
      <div className="flex w-[80%] max-sm:flex-col max-sm:mt-0  flex-row justify-evenly mt-[30px] lg:w-[50%] p-2">
        <div className="w-full flex justify-center items-center mr-[10px]">
          <img src="/icons/softrec_icon.png" />
        </div>
        <div className="overflow-hidden ml-[10px]">
          {list.map((value, index) => (
            <li
              key={index}
              className={`opacity-0 animate-slideInRight`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {value}
            </li>
          ))}
        </div>
      </div>
      <div className="w-[70%] flex justify-center items-center">
        <Carousel />
      </div>
    </div>
  );
};

export default AboutUs;
