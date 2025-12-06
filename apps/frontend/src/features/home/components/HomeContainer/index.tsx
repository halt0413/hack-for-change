"use client";

export const HomeContainer = () => {
	return (
		//半分にする
		<main className="relative min-h-screen flex px-6 overflow-hidden bg-white">
			<div className="w-1/2 flex items-center justify-center left-0">
				<div className="absolute left-[-450px] rounded-full bg-gray-200 w-[1300px] h-[1300px]" />				{/* <div className="relative "> */}
				<img src="/logoHome.png" alt="logo" className="relative w-[700px] h-auto top-0 left-0" />
			</div>

			<div className="w-1/2">

				<div className="relative text-center justify-center top-[40%]">
					<h1 className="text-black text-[40px] font-extrabold leading-tight">
						海洋生物とプラスチックごみ問題を
					</h1>
					<h2 className="mt-4 text-black text-[52px] font-extrabold leading-tight">
						もっと実感できる形に
					</h2>

					<a
						href="#"
						className="mt-10 inline-flex items-center gap-4 text-white bg-[#628ff5] px-10 py-5 rounded-2xl text-[32px] font-bold shadow hover:bg-[#628ff5]/80 transition"
					>
						体感する
						<span className="inline-grid place-items-center w-12 h-12 rounded-full bg-black/80">
							<svg viewBox="0 0 24 24" width="22" height="22" fill="white" aria-hidden="true">
								<path d="M8 5v14l11-7z" />
							</svg>
						</span>
					</a>
				</div>
			</div>
		</main>
	);
};
