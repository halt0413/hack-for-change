"use client";

import Image from "next/image";

const frames = [
  { id: "fish", title: "サカナ", src: "/sakana.png" },
  { id: "human", title: "ヒト", src: "/hito.png" },
];

export const WebInfluence = () => {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-wide mb-16 drop-shadow">影響</h1>

        <div className="flex flex-row items-center justify-center gap-16">
          {frames.map(({ id, title, src }) => (
            <div key={id} className="flex flex-col items-center">
              <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-3xl font-bold leading-relaxed text-slate-900 text-left rounded-2xl px-6 py-6 w-[720px] max-w-full translate-x-20">
          マイクロプラスチックは水中以外にも
          <br />
          大気中で確認されており
          <br />
          呼吸で体内に入ることで
          <br />
          呼吸器障害が引き起こされる恐れがある
        </p>
      </div>
    </main>
  );
}
