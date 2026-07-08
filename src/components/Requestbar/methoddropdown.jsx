import HTTP_METHODS from "../../utils/httpMethods";

const MethodDropdown = ({ method, setMethod }) => {
  return (
    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      className="h-12 rounded-l-xl border-r border-slate-700 bg-slate-800 px-4 text-white outline-none transition hover:bg-slate-700 focus:ring-2 focus:ring-cyan-500"
    >
      {HTTP_METHODS.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default MethodDropdown;