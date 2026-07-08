import {
  CheckCircle2,
  Clock3,
  Database,
} from "lucide-react";

import InfoCard from "../InfoCard/InfoCard";

const MetricsSection = () => {
  return (
    <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">

      <InfoCard
        icon={<CheckCircle2 className="text-green-400" />}
        title="Status"
        value="---"
        color="bg-green-500/10"
      />

      <InfoCard
        icon={<Clock3 className="text-yellow-400" />}
        title="Response Time"
        value="---"
        color="bg-yellow-500/10"
      />

      <InfoCard
        icon={<Database className="text-cyan-400" />}
        title="Response Size"
        value="---"
        color="bg-cyan-500/10"
      />

    </section>
  );
};

export default MetricsSection;