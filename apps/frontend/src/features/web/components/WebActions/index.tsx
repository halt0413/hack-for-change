"use client";

export const WebActions = () => {
  return (
    <main className="min-h-screen bg-[#4A6DAC] text-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16">
          私たちにできる小さなこと
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <section className="bg-white text-black rounded-3xl shadow-lg p-10 md:p-12 space-y-6">
            <div className="inline-block bg-[#568FF3] text-white text-xl md:text-2xl font-bold px-8 py-3 rounded-full">
              不要なごみを出さない
            </div>
            <div className="text-left leading-relaxed text-xl md:text-2xl font-semibold space-y-4">
              <p>マイバック・マイボトルを持ち歩き</p>
              <p>使い捨て容器を使用する事を</p>
              <p>なるべく避けよう</p>
            </div>
          </section>

          <section className="bg-white text-black rounded-3xl shadow-lg p-10 md:p-12 space-y-6">
            <div className="inline-block bg-[#568FF3] text-white text-xl md:text-2xl font-bold px-8 py-3 rounded-full">
              海や川での活動で意識
            </div>
            <div className="text-left leading-relaxed text-xl md:text-2xl font-semibold space-y-4">
              <p>海水浴場や川沿いで出たゴミは</p>
              <p>必ず持ち帰る</p>
              <p className="pt-3">ビーチクリーンイベントへ</p>
              <p>参加してみる</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
