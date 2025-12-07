"use client";

import Image from "next/image";

export const WebHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="w-full px-5 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-20 h-20">
            <Image
              src="/headericon.png"
              alt="Shape Sea"
              width={200}
              height={200}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold text-[#181818]">Shape Sea</span>
        </div>

        <nav className="flex items-center gap-6 text-base md:text-lg font-semibold text-[#181818]">
          <a href="#about" className="px-2 hover:underline underline-offset-4">概要</a>
          <a href="#problem" className="px-2 hover:underline underline-offset-4">問題</a>
          <a href="#influence" className="px-2 hover:underline underline-offset-4">影響</a>
          <a href="#actions" className="px-2 hover:underline underline-offset-4">アクション</a>
          <a href="#donation" className="px-2 hover:underline underline-offset-4">寄付</a>
        </nav>
      </div>
    </header>
  );
};
