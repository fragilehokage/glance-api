import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800 bg-[#0f172a]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Code2 className="h-6 w-6 text-cyan-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Glance<span className="text-cyan-400">API</span>
            </h1>

            <p className="text-xs text-gray-400">
              Inspect APIs at a glance
            </p>
          </div>
        </div>

        {/* Version */}
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          v1.0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;