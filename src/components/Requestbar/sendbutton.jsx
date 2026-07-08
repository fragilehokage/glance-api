import { SendHorizontal } from "lucide-react";

const SendButton = () => {
  return (
    <button
      className="
        flex
        h-12
        items-center
        gap-2
        rounded-r-xl
        bg-cyan-500
        px-6
        font-medium
        text-slate-900
        transition-all
        duration-200
        hover:bg-cyan-400
        hover:scale-[1.02]
        active:scale-95
      "
    >
      <SendHorizontal size={18} />
      Send
    </button>
  );
};

export default SendButton;