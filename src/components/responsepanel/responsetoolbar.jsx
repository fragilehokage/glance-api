import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";

const ResponseToolbar = ({ data }) => {
  return (
    <div className="flex items-center justify-end gap-3 border-b border-slate-700 p-4">
      <CopyButton data={data} />
      <DownloadButton data={data} />
    </div>
  );
};

export default ResponseToolbar;