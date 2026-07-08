import { useState } from "react";
import ResponseToolbar from "./ResponseToolbar";
import TabButton from "./TabButton";
import ResponseTab from "./ResponseTab";
import HeadersTab from "./HeadersTab";
import HistoryTab from "./HistoryTab";

const ResponsePanel = ({
  response,
  history,
  setHistory,
  setMethod,
  setUrl,
}) => {
  const [activeTab, setActiveTab] = useState("response");

  return (
    <section className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
      <div className="flex border-b border-slate-700">
        <TabButton
          title="Response"
          active={activeTab === "response"}
          onClick={() => setActiveTab("response")}
        />

        <TabButton
          title="Headers"
          active={activeTab === "headers"}
          onClick={() => setActiveTab("headers")}
        />

        <TabButton
          title="History"
          active={activeTab === "history"}
          onClick={() => setActiveTab("history")}
        />
      </div>

      {activeTab === "response" && (
        <>
          <ResponseToolbar data={response?.data} />
          <ResponseTab data={response?.data} />
        </>
      )}

      {activeTab === "headers" && (
        <HeadersTab headers={response?.headers} />
      )}

      {activeTab === "history" && (
        <HistoryTab
            history={history}
            setHistory={setHistory}
            setMethod={setMethod}
            setUrl={setUrl}
        />
      )}
    </section>
  );
};

export default ResponsePanel;