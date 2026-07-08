const HistoryItem = ({ item, onReplay }) => {
  return (
    <button
      onClick={() => onReplay(item)}
      className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-left transition-all duration-200 hover:border-cyan-500 hover:bg-slate-700"
    >
      <div className="flex items-center justify-between">
        <span className="rounded bg-cyan-500/20 px-2 py-1 text-xs font-bold text-cyan-400">
          {item.method}
        </span>

        <span className="text-xs text-slate-400">
          {item.time}
        </span>
      </div>

      <p className="mt-2 truncate text-sm text-white">
        {item.url}
      </p>

      <p className="mt-2 text-xs text-green-400">
        Status {item.status}
      </p>
    </button>
  );
};

export default HistoryItem;