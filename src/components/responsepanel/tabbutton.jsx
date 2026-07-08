const TabButton = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-b-2 px-5 py-3 text-sm font-medium transition-all duration-200 ${
        active
          ? "border-cyan-400 text-cyan-400"
          : "border-transparent text-slate-400 hover:text-white"
      }`}
    >
      {title}
    </button>
  );
};

export default TabButton;