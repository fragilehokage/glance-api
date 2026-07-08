import HistoryItem from "./HistoryItem";

const HistoryTab = ({
  history,
  setMethod,
  setUrl,
}) => {
  if (history.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          No requests yet.
        </p>
      </div>
    );
  }

  const replayRequest = (item) => {
    setMethod(item.method);
    setUrl(item.url);
  };

  return (
    <div className="space-y-3 p-5">
      {history.map((item) => (
        <HistoryItem
          key={item.id}
          item={item}
          onReplay={replayRequest}
        />
      ))}
    </div>
  );
};

export default HistoryTab;