"use client";

type Props = {
    src: string;
    onEnded: () => void;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    onStart: () => void;
    isMuted: boolean;
    showOverlay: boolean;
};

export const VideoLayout = ({
    src,
    onEnded,
    videoRef,
    onStart,
    isMuted,
    showOverlay,
}: Props) => {
    return (
        <div className="fixed inset-0 bg-black overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                onEnded={onEnded}
                muted={isMuted}
                playsInline
                className="fixed top-0 left-0 h-screen w-screen object-contain"
            />

            {showOverlay && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <button
                        onClick={onStart}
                        aria-label="再生"
                        className="pointer-events-auto flex items-center justify-center rounded-full bg-white/90 p-6 text-black shadow-xl transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-10 w-10 fill-current"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
