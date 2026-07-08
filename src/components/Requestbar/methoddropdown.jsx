import HTTP_METHODS from "../../utils/httpMethods";

const MethodDropdown = () => {
  return (
    <select
      className="h-12 rounded-l-xl border-r border-slate-700 bg-slate-800 px-4 text-white outline-none transition hover:bg-slate-700 focus:ring-2 focus:ring-cyan-500"
      defaultValue="GET"
    >
      {HTTP_METHODS.map((method) => (
        <option key={method} value={method}>
          {method}
        </option>
      ))}
    </select>
  );
};

export default MethodDropdown;