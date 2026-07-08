const InfoCard = ({ icon, title, value, color }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className={`rounded-xl p-3 ${color}`}>
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <h2 className="mt-1 text-xl font-bold text-white">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default InfoCard;