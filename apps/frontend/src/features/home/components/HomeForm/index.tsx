"use client";

type Props = {
  onStart: () => void;
  onOpenWeb: () => void;
};

export const HomeForm = ({ onStart, onOpenWeb }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <button
        type="button"
        onClick={onStart}
        className="px-8 py-3 rounded-lg text-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Start
      </button>

      <button
        type="button"
        onClick={onOpenWeb}
        className="px-8 py-3 rounded-lg text-lg font-medium border border-gray-400 hover:bg-gray-100 transition"
      >
        Webへ
      </button>
    </div>
  );
};
