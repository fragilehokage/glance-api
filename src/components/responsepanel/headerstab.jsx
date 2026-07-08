const HeadersTab = ({ headers }) => {
  if (!headers) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          No headers available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-auto p-5">
      <table className="w-full text-left text-sm">
        <tbody>
          {Object.entries(headers).map(([key, value]) => (
            <tr
              key={key}
              className="border-b border-slate-700"
            >
              <td className="py-2 font-semibold text-cyan-400">
                {key}
              </td>

              <td className="py-2 text-slate-300 break-all">
                {String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeadersTab;