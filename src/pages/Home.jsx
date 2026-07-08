import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "../components/Navbar/Navbar";
import RequestBar from "../components/RequestBar/RequestBar";
import MetricsSection from "../components/MetricsSection/MetricsSection";
import ResponsePanel from "../components/ResponsePanel/ResponsePanel";

const Home = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
 const [loading, setLoading] = useState(false);

const [history, setHistory] = useLocalStorage(
  "glance-history",
  []
);
  useEffect(() => {
    console.log("Response State:", response);
  }, [response]);

  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />

      <main className="px-6 py-8">
        <RequestBar
          method={method}
          setMethod={setMethod}
          url={url}
          setUrl={setUrl}
          loading={loading}
          setLoading={setLoading}
          setResponse={setResponse}
          history={history}
          setHistory={setHistory}
      />

        <MetricsSection response={response} />

        <ResponsePanel
            response={response}
            history={history}
            setMethod={setMethod}
            setUrl={setUrl}
        />
      </main>
    </div>
  );
};

export default Home;