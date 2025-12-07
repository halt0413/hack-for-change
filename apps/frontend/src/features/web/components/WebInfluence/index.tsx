"use client";

import Image from "next/image";
import { useState } from "react";

const frames = [
  { id: "fish", title: "サカナ", src: "/sakana.png" },
  { id: "human", title: "ヒト", src: "/hito.png" },
];

const texts: Record<string, string[]> = {
  fish: [
    "有害化学物質の蓄積は、",
    "生物の生殖機能の低下や",
    "免疫力の低下など、",
    "健康に深刻な影響を与えることが",
    "懸念されており、",
    "生態系全体のバランスを崩す",
    "要因となります。",
  ],
  human: [
    "マイクロプラスチックは水中以外にも",
    "大気中で確認されており",
    "呼吸で体内に入ることで",
    "呼吸器障害が",
    "引き起こされる恐れがある",
  ],
};

export const WebInfluence = () => {
  const [selected, setSelected] = useState<"fish" | "human">("human");

  return (
    <main className="min-h-screen bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-wide mb-16 drop-shadow">影響</h1>

        <div className="flex flex-row items-center justify-center gap-16">
          {frames.map(({ id, title, src }) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelected(id as "fish" | "human")}
              className={`relative w-52 h-52 rounded-full overflow-hidden shadow-lg focus:outline-none transition ring-4 ${
                selected === id ? "ring-white/70" : "ring-transparent"
              }`}
            >
              <Image src={src} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <span className="sr-only">{title}</span>
            </button>
          ))}
        </div>

        <p className="mt-16 text-3xl font-bold leading-relaxed text-slate-900 text-left rounded-2xl px-6 py-6 w-[720px] max-w-full translate-x-20">
          {texts[selected].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </main>
  );
};
