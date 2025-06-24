import React from "react";
import Image, { StaticImageData } from "next/image";
import { object } from "framer-motion/client";

interface IProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Home(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          alt={props.altTxt}
           
          fill
          style={{ objectFit: "cover" }}
          src={props.imgUrl}
           
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-4xl font-bold">{props.content}</h1>
      </div>
    </div>
  );
}
