import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import HistoryItem from "./HistoryItem";

const HistoryTab = ({
  history,
  setHistory,
  setMethod,
  setUrl,
}) => {
  const replayRequest = (item) => {
    setMethod(item.method);
    setUrl(item.url);
  };

  const clearHistory = () => {
    localStorage.removeItem("glance-history");
    setHistory([]);

    toast.success("History cleared");
  };

  if (history.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center text-slate-500">
        No request history yet.
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-end">
        <button
          onClick={clearHistory}
          className="flex items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500/10"
        >
          <Trash2 size={16} />
          Clear History
        </button>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <HistoryItem
            key={item.id}
            item={item}
            onReplay={replayRequest}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryTab;