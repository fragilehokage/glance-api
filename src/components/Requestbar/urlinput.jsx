const UrlInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter API endpoint..."
      className="
        h-12
        flex-1
        bg-slate-800
        px-4
        text-white
        placeholder:text-slate-400
        outline-none
        transition
        focus:ring-2
        focus:ring-cyan-500
      "
    />
  );
};

export default UrlInput;