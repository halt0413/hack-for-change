"use client";

type Props = {
    src: string;
    onEnded: () => void;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    onStart: () => void;
    isMuted: boolean;
};

export const VideoLayout = ({
    src,
    onEnded,
    videoRef,
    onStart,
    isMuted,
}: Props) => {
    return (
        <div
            className="fixed inset-0 bg-black overflow-hidden"
        >
            <video
                ref={videoRef}
                src={src}
                onEnded={onEnded}
                muted={isMuted}
                playsInline
                className="fixed top-0 left-0 w-screen h-screen object-contain"
            />
            <button onClick={onStart}>Play</button>
        </div>
    );
};
