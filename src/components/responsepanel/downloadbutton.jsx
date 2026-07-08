import { Download } from "lucide-react";
import toast from "react-hot-toast";

const DownloadButton = ({ data }) => {
  const handleDownload = () => {
    if (!data) {
      toast.error("Nothing to download");
      return;
    }

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "response.json";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    toast.success("Download started");
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:border-cyan-500 hover:bg-slate-700"
    >
      <Download size={16} />
      Download
    </button>
  );
};

export default DownloadButton;