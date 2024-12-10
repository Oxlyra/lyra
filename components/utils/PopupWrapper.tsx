/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import { X } from "lucide-react";

const PopupWrapper = ({
  children,
  close,
}: Readonly<{
  children: React.ReactNode;
  close?: () => void;
}>) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const handleClickOutside: (
  //     event: EventListener | MouseEvent | any
  //   ) => void = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       if (close) {
  //         close();
  //       } else {
  //         router.back();
  //       }
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside, true);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="bg-black/20 backdrop-blur-md overflow-hidden !z-[10000000000000] w-full h-full">
      {children}
      <button onClick={close} className="absolute top-7 right-5 text-light">
        <X />
      </button>
    </div>
  );
};

export default PopupWrapper;
