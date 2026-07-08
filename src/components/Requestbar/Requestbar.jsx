import MethodDropdown from "./MethodDropdown";
import UrlInput from "./UrlInput";
import SendButton from "./SendButton";

const RequestBar = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-6xl overflow-hidden rounded-xl border border-slate-700 shadow-lg">
      <MethodDropdown />
      <UrlInput />
      <SendButton />
    </div>
  );
};

export default RequestBar;