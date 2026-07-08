import JsonView from "@uiw/react-json-view";

const ResponseTab = ({ data }) => {
  if (!data) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Send a request to view the response.
        </p>
      </div>
    );
  }

  return (
    <div className="max-h-[600px] overflow-auto bg-slate-900 p-5">
      <JsonView
        value={data}
        collapsed={true}          // <-- IMPORTANT
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={true}
      />
    </div>
  );
};

export default ResponseTab;