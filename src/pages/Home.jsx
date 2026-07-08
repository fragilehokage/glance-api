import Navbar from "../components/Navbar/Navbar";
import RequestBar from "../components/RequestBar/RequestBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />

      <main className="px-6 py-8">
        <RequestBar />
      </main>
    </div>
  );
};

export default Home;