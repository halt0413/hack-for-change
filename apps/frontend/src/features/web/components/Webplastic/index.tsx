"use client";

import Image from 'next/image';

// imageUrlをpropsとして受け取るように修正しました。
export const Weblastic = ({ imageUrl = '/beach.png' }) => {
    return (
        // 💡 パディング調整: 左パディングを増やし (pl-32)、右側にコンテンツが寄るように調整
        <div className="bg-white min-h-screen pl-43 pr-24 pt-30 pb-16 font-sans flex flex-col justify-start">
            
            {/* 🚀 メインコンテンツエリア */}
            <div className="flex-grow pt-10">
                
                {/* 💡 タイトルフォントを4xlから5xlに拡大 */}
                <h1 className="text-7xl font-bold mb-20 text-black">
                    マイクロプラスチック？
                </h1>
                
                {/* テキストと画像を左右に配置するコンテナ */}
                {/* 💡 space-x-12をspace-x-16に増やして、間隔を広げます */}
                <div className="flex justify-between items-start space-x-16">
                    
                    {/* 📝 左側のテキストエリア */}
                    {/* 💡 w-1/2を維持 */}
                    <div className="w-1/2 text-black leading-relaxed">
                        
                        <div className="flex flex-col w-fit mb-18">
                            {/* 💡 テキストサイズを2xlから3xlに拡大 */}
                            <span className="text-5xl font-bold pb-1 ">
                                直径が5mm以下の
                            </span>
                            <span className="text-5xl font-bold pb-1 ">
                                プラスチックのこと
                            </span>
                        </div>
                        
                        {/* その他の説明 */}
                        <div className="mt-10 text-3xl font-normal">
                            {/* 💡 テキストサイズをxlから2xlに拡大 */}
                            <p className="mb-6">
                                肉眼で確認できない
                            </p>
                            <p className="mb-6">
                                ナノメートルサイズプラスチックである
                            </p>
                            <p >
                                ナノプラスチック
                                も着眼されている
                            </p>
                        </div>
                    </div>
                    
                    {/* 🖼️ 右側の画像エリア */}
                    <div className="w-1/2">
                        <Image
                            src={imageUrl} 
                            alt="砂浜に散乱したマイクロプラスチックやゴミ"
                            // 💡 画像サイズを600x400から800x533に拡大
                            width={800} 
                            height={533} 
                            className="shadow-lg h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}