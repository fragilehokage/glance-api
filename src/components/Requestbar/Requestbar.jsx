import MethodDropdown from "./MethodDropdown";
import UrlInput from "./UrlInput";
import SendButton from "./SendButton";
import formatTime from "../../utils/formatTime";

import { sendRequest } from "../../services/api";

const RequestBar = ({
  method,
  setMethod,
  url,
  setUrl,
  loading,
  setLoading,
  setResponse,
  history,
  setHistory,
}) => {
  const handleRequest = async () => {
    if (!url.trim()) return;

    setLoading(true);

    const result = await sendRequest({
      method,
      url,
    });

    setResponse(result);

    if (result.success) {
      setHistory((prev) => {
  const filtered = prev.filter(
    (item) => !(item.method === method && item.url === url)
  );


  return [
    {
      id: Date.now(),
      method,
      url,
      status: result.status,
      time: formatTime(),
    },
    ...filtered,
  ].slice(0, 15);
});
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto mt-8 flex max-w-6xl overflow-hidden rounded-xl border border-slate-700 shadow-lg">
      <MethodDropdown
        method={method}
        setMethod={setMethod}
      />

      <UrlInput
        url={url}
        setUrl={setUrl}
      />

      <SendButton
        loading={loading}
        handleRequest={handleRequest}
      />
    </div>
  );
};

export default RequestBar;