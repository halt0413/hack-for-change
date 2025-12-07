"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

type Props = {
  onAnswer?: () => void;
};

type Feedback = { label: string; correct: boolean } | null;

export const WebProblem = ({ onAnswer }: Props) => {
  const [feedback, setFeedback] = useState<Feedback>(null);

  const waveMaskStyle: CSSProperties = {
    ["--mask" as string]:
      "radial-gradient(33.6px at 50% 47px, #000 99%, #0000 101%) calc(50% - 40px) 0/80px 100% repeat-x, radial-gradient(33.6px at 50% -27px, #0000 99%, #000 101%) 50% 20px/80px calc(100% - 20px) repeat-x",
    WebkitMask: "var(--mask)",
    mask: "var(--mask)",
  };

  const handleClick = (label: string) => {
    const isCorrect = label === "どっちも";
    setFeedback({ label, correct: isCorrect });
  };

  const closeModal = () => setFeedback(null);
  const proceed = () => {
    closeModal();
    onAnswer?.();
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
            <div className="w-14 h-14 md:ml-6 rounded-full flex items-center justify-center">
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
          <div className="flex justify-center pt-10 gap-6">
            {["生態", "人体", "どっちも"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => handleClick(label)}
                className="px-10 py-4 rounded-3xl bg-red-500 text-white text-2xl font-extrabold shadow-lg hover:bg-red-600 active:bg-red-700 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {feedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          {feedback.correct ? (
            <div
              className="bg-white text-slate-900 rounded-2xl px-8 py-10 shadow-2xl w-[360px] max-w-[90vw] text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 text-2xl font-bold text-slate-500 hover:text-slate-700"
                aria-label="閉じる"
              >
                ×
              </button>
            <div className="text-6xl text-green-500 mb-4">◯</div>
              <p className="text-2xl font-bold mb-6">正解！</p>
            </div>
          ) : (
            <div
              className="bg-white text-slate-900 rounded-2xl px-8 py-10 shadow-2xl w-[320px] max-w-[90vw] text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 text-2xl font-bold text-slate-500 hover:text-slate-700"
                aria-label="閉じる"
              >
                ×
              </button>
              <div className="text-6xl text-red-500 mb-4">×</div>
              <p className="text-xl font-bold">{feedback.label} はちがうよ</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
