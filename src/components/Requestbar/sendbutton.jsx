import { SendHorizontal, LoaderCircle } from "lucide-react";

const SendButton = ({ loading, handleRequest }) => {
  return (
    <button
      disabled={loading}
      onClick={handleRequest}
      className="flex h-12 items-center gap-2 rounded-r-xl bg-cyan-500 px-6 font-medium text-slate-900 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <LoaderCircle
          size={18}
          className="animate-spin"
        />
      ) : (
        <SendHorizontal size={18} />
      )}

      {loading ? "Sending..." : "Send"}
    </button>
  );
};

export default SendButton;