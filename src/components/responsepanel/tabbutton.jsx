const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
        active
          ? "border-cyan-400 text-cyan-400"
          : "border-transparent text-slate-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;