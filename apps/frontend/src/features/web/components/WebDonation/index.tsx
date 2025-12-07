"use client";

"use client";

import Image from "next/image";

export const WebDonation = () => {
  return (
    <main className="relative min-h-screen bg-[#1f3c68] text-white flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl px-6 py-16 text-center space-y-12 z-10">
        <div className="space-y-30 -translate-y-6 md:-translate-y-14">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            寄付することでできること
          </h1>
          <div className="text-lg md:text-2xl font-semibold leading-relaxed space-y-4">
            <p>海洋プラスチックの発生源や漂流実態の調査研究を進め</p>
            <p>生分解性プラスチックなどの代替素材の開発を支援することで</p>
            <p>環境教育と広報活動による意識改革を促し</p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-4xl md:text-5xl font-extrabold">
            問題の根本解決
            <span className="text-2xl md:text-3xl font-semibold">に貢献します。</span>
          </p>

          <button
            type="button"
            className="mt-4 inline-block bg-[#fbc100] text-[#1f3c68] text-2xl md:text-3xl font-bold px-10 py-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform"
          >
            ここから寄付する
          </button>
        </div>
      </div>

      {/* 底面の演出 */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 md:h-24"
        style={{
          backgroundImage: "url('/bar.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
          backgroundPosition: "bottom center",
        }}
      />

      <Image
        src="/ikari.png"
        alt="アンカー"
        width={220}
        height={220}
        className="absolute bottom-3 left-4"
      />

      <div className="absolute left-0 w-full h-28 bottom-10 pointer-events-none">
        {[
          { left: "26%", size: 38, bottom: 26 },
          { left: "45%", size: 32, bottom: 26 },
          { left: "64%", size: 36, bottom: 25 },
          { left: "82%", size: 34, bottom: 26 },
        ].map(({ left, size, bottom }, idx) => (
          <Image
            key={idx}
            src="/gomi.png"
            alt="ごみ"
            width={size}
            height={size}
            className="absolute drop-shadow-sm opacity-85"
            style={{ left, bottom }}
          />
        ))}
      </div>
    </main>
  );
};
