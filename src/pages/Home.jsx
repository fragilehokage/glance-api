import Navbar from "../components/Navbar/Navbar";
import RequestBar from "../components/RequestBar/RequestBar";
import MetricsSection from "../components/MetricsSection/MetricsSection";
import ResponsePanel from "../components/responsePanel/responsePanel";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />

      <main className="px-6 py-8">
        <RequestBar />

        <MetricsSection />
        <ResponsePanel />
      </main>
    </div>
  );
};

export default Home;