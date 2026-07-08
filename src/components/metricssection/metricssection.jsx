import {
  CheckCircle2,
  Clock3,
  Database,
  XCircle,
} from "lucide-react";

import InfoCard from "../InfoCard/InfoCard";
import formatBytes from "../../utils/formatBytes";

const MetricsSection = ({ response }) => {
  const success = response?.success;

  return (
    <section className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
      <InfoCard
        icon={
          success ? (
            <CheckCircle2 className="text-green-400" />
          ) : (
            <XCircle className="text-red-400" />
          )
        }
        title="Status"
        value={
          response
            ? `${response.status} ${response.statusText}`
            : "---"
        }
        color={success ? "bg-green-500/10" : "bg-red-500/10"}
      />

      <InfoCard
        icon={<Clock3 className="text-yellow-400" />}
        title="Response Time"
        value={
          response
            ? `${response.status || ""} ${response.statusText || ""}`.trim()
            : "---"
        }
        color="bg-yellow-500/10"
      />

      <InfoCard
        icon={<Database className="text-cyan-400" />}
        title="Response Size"
        value={
          response
            ? formatBytes(response.size)
            : "---"
        }
        color="bg-cyan-500/10"
      />
    </section>
  );
};

export default MetricsSection;