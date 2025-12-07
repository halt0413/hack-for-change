"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  onAnswer?: () => void;
};

export const WebProblem = ({ onAnswer }: Props) => {
  const waveMaskStyle: CSSProperties = {
    ["--mask" as string]:
      "radial-gradient(33.6px at 50% 47px, #000 99%, #0000 101%) calc(50% - 40px) 0/80px 100% repeat-x, radial-gradient(33.6px at 50% -27px, #0000 99%, #000 101%) 50% 20px/80px calc(100% - 20px) repeat-x",
    WebkitMask: "var(--mask)",
    mask: "var(--mask)",
  };

  return (
    <main className="min-h-screen bg-transparent text-white">
      <section
        className="relative w-full min-h-screen overflow-hidden flex"
        style={waveMaskStyle}
      >
        {/* コンテンツ */}
        <div className="relative flex flex-col flex-1 px-10 py-16">
          {/* 「問題」ラベル */}
          <p className="text-4xl font-bold mb-8 drop-shadow">問題</p>

          {/* 質問テキスト */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="max-w-4xl translate-x-4">
              <p className="text-5xl font-bold leading-tight drop-shadow">
                日本から1年で海に流れているプラごみは
                <br />
                イメージでいえばどれくらいなの？？
              </p>
            </div>

            {/* ゴミアイコン */}
            <div className="w-14 h-14 md:ml-6 rounded-full bg-sky-300/70 flex items-center justify-center overflow-hidden shadow">
              <Image
                src="/gomi.png"
                alt="ごみのアイコン"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>

          {/* 答えボタン */}
          <div className="flex justify-end pt-10 gap-4">
            {["生態", "人体", "どっちも"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={onAnswer}
                className="px-6 py-3 rounded-2xl bg-red-500 text-white text-lg font-bold shadow-md hover:bg-red-600 active:bg-red-700 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
