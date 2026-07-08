import JsonView from "@uiw/react-json-view";

const ResponseTab = ({ response }) => {
  if (!response)
    return (
      <div className="flex h-80 items-center justify-center">
        <p className="text-slate-500">
          Send a request to view the response.
        </p>
      </div>
    );

  if (!response.success)
    return (
      <div className="flex h-80 items-center justify-center">
        <p className="text-red-400">
          {response.error}
        </p>
      </div>
    );

  return (
    <div className="max-h-[500px] overflow-auto rounded-b-xl bg-slate-900 p-5">
      <JsonView
        value={response.data}
        displayDataTypes={false}
        displayObjectSize={true}
        enableClipboard={true}
        collapsed={2}
        style={{
          backgroundColor: "#0f172a",
        }}
      />
    </div>
  );
};

export default ResponseTab;