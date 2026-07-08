const UrlInput = ({ url, setUrl }) => {
  return (
    <input
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="https://jsonplaceholder.typicode.com/posts"
      className="h-12 flex-1 bg-slate-800 px-4 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
};

export default UrlInput;