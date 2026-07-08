import { useState } from "react";

import TabButton from "./TabButton";
import ResponseTab from "./ResponseTab";
import HeadersTab from "./HeadersTab";
import HistoryTab from "./HistoryTab";

const ResponsePanel = ({ response }) => {
  const [activeTab, setActiveTab] = useState("Response");

  const renderTab = () => {
    switch (activeTab) {
      case "Headers":
        return <HeadersTab />;

      case "History":
        return <HistoryTab />;

      default:
        return<ResponseTab response={response} />;
    }
  };

  return (
    <section className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">

      <div className="flex border-b border-slate-700">

        <TabButton
          label="Response"
          active={activeTab === "Response"}
          onClick={() => setActiveTab("Response")}
        />

        <TabButton
          label="Headers"
          active={activeTab === "Headers"}
          onClick={() => setActiveTab("Headers")}
        />

        <TabButton
          label="History"
          active={activeTab === "History"}
          onClick={() => setActiveTab("History")}
        />

      </div>

      {renderTab()}
    </section>
  );
};

export default ResponsePanel;