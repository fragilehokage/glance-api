import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const CopyButton = ({ data }) => {
  const handleCopy = async () => {
    if (!data) {
      toast.error("Nothing to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(
        JSON.stringify(data, null, 2)
      );

      toast.success("Response copied!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:border-cyan-500 hover:bg-slate-700"
    >
      <Copy size={16} />
      Copy
    </button>
  );
};

export default CopyButton;