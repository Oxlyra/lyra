"use client";

import React from "react";
// import { motion } from "framer-motion";
import { MotionDiv } from "@/constants/motionProps";

import { List, Handshake } from "lucide-react";
import { DotGrid, Button, Motion, Logo } from "@/components";
import { variants } from "@/constants";

interface IGameStats {
  label: string;
  value: string | number;
}

const ChatSidebar = ({
  about,
  stats,
}: {
  about: string;
  stats: IGameStats[];
}) => {
  return (
    <div className="relative h-full bg-dark overflow-x-clip overflow-y-auto">
      <div
        className={`
            w-full md:w-[30vw] md:min-w-[300px] min-h-screen md:max-w-[380px] px-4 md:px-5 flex flex-col gap-5 py-5 overflow-hidden relative
        `}
      >
        <DotGrid w={40} h={100} id={0} />
        <div className="hide-md">
          <Logo showName />
        </div>
        <MotionDiv
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ staggerChildren: 0.1 }}
          className={`sidebar-card`}
        >
          {stats.map(({ label, value }, i: number) => (
            <MotionDiv
              variants={variants.slideInBottom}
              key={i}
              className="space-y-[6px]"
            >
              <h2 className="stats-value">{value}</h2>
              <p className="uppercase text-xs md:text-sm">{label}</p>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ staggerChildren: 0.1 }}
          className={`sidebar-card`}
        >
          <MotionDiv variants={variants.slideInBottom}>
            <h2 className="uppercase">About:</h2>
          </MotionDiv>
          <MotionDiv variants={variants.slideInBottom}>
            <p className="">{about}</p>
          </MotionDiv>
          <div className="flex-v-center">
            <Motion>
              <Button
                text="FAQ"
                link="/faq"
                className="btn-3 !px-3"
                icon={<List className="size-4" />}
              />
            </Motion>
            <Motion>
              <Button
                text="Terms"
                link="/terms"
                className="btn-4 !px-3"
                icon={<Handshake className="size-4" />}
              />
            </Motion>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default ChatSidebar;
