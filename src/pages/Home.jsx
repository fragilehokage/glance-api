import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import RequestBar from "../components/RequestBar/RequestBar";
import MetricsSection from "../components/MetricsSection/MetricsSection";
import ResponsePanel from "../components/ResponsePanel/ResponsePanel";

const Home = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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
          setResponse={setResponse}
          loading={loading}
          setLoading={setLoading}
        />

        <MetricsSection response={response} />

        <ResponsePanel response={response} />
      </main>
    </div>
  );
};

export default Home;