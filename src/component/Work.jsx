import React from "react";
import { projects } from "./data";
import Image from "next/image";
import { avatarImg } from "../../public";

function Work() {
  const projects = [
    { title: "LMS", iamge: "" },
    {
      title: "E-commerce",
      iamge: "",
    },
    { title: "Portfolio", iamge: "" },
    { title: "Blog", iamge: "" },
    { title: "Social Media", iamge: "" },
  ];

  return (
    <div>
      <div className=" flex justify-center items-center ">
        <h1 className="text-4xl font-bold">My Work</h1>

        <div className="bg-gray-200">
          <div className="w-5/6 h-5/6 ">
            <Image src={avatarImg} width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
