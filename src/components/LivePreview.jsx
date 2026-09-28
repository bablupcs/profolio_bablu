import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  IoClose,
  IoOpenOutline,
  IoPhonePortraitOutline,
  IoDesktopOutline,
  IoRefresh,
} from "react-icons/io5";

const LivePreviewContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLivePreview = () => useContext(LivePreviewContext);

// PropTypes is not used anywhere in this project (and is deprecated in React 19),
// so the rule is disabled here rather than pulling in a dependency for one prop.
// eslint-disable-next-line react/prop-types
export function LivePreviewProvider({ children }) {
  const [site, setSite] = useState(null);
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const open = useCallback((project) => {
    setSite(project);
    setDevice("desktop");
    setLoading(true);
    setReloadKey((k) => k + 1);
  }, []);

  const close = useCallback(() => setSite(null), []);

  // Esc to close, and stop the page behind from scrolling
  useEffect(() => {
    if (!site) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [site, close]);

  return (
    <LivePreviewContext.Provider value={{ open, close }}>
      {children}

      {site && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 p-2 sm:p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Live preview of ${site.name}`}
        >
          <div
            className="flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* browser chrome */}
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-2.5 sm:px-4">
              <div className="hidden sm:flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-white dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 shadow-inner">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: site.color }}
                  aria-hidden="true"
                />
                <span className="truncate font-medium">{site.link}</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setLoading(true);
                    setReloadKey((k) => k + 1);
                  }}
                  title="Reload"
                  aria-label="Reload"
                  className="rounded-lg p-2 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-800"
                >
                  <IoRefresh />
                </button>

                <div className="hidden sm:flex rounded-lg bg-slate-200 dark:bg-slate-700 p-0.5">
                  <button
                    onClick={() => setDevice("desktop")}
                    title="Desktop view"
                    aria-label="Desktop view"
                    aria-pressed={device === "desktop"}
                    className={`rounded-md p-1.5 transition-colors ${
                      device === "desktop"
                        ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <IoDesktopOutline />
                  </button>
                  <button
                    onClick={() => setDevice("mobile")}
                    title="Mobile view"
                    aria-label="Mobile view"
                    aria-pressed={device === "mobile"}
                    className={`rounded-md p-1.5 transition-colors ${
                      device === "mobile"
                        ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <IoPhonePortraitOutline />
                  </button>
                </div>

                <a
                  href={site.link}
                  target="_blank"
                  rel="noreferrer"
                  title="Open in a new tab"
                  aria-label="Open in a new tab"
                  className="rounded-lg p-2 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-800"
                >
                  <IoOpenOutline />
                </a>

                <button
                  onClick={close}
                  title="Close"
                  aria-label="Close preview"
                  className="rounded-lg p-2 text-slate-500 dark:text-slate-400 transition-colors hover:bg-red-100 hover:text-red-600"
                >
                  <IoClose />
                </button>
              </div>
            </div>

            {/* the site itself */}
            <div className="relative flex-1 overflow-hidden bg-slate-200 dark:bg-slate-700">
              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white dark:bg-slate-800">
                  <span className="loading loading-spinner loading-lg text-secondary" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">Loading {site.name}…</p>
                </div>
              )}

              <iframe
                key={reloadKey}
                src={site.link}
                title={`${site.name} live preview`}
                onLoad={() => setLoading(false)}
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                className={`mx-auto h-full border-0 bg-white dark:bg-slate-800 transition-all duration-300 ${
                  device === "mobile" ? "w-[390px] shadow-xl" : "w-full"
                }`}
              />
            </div>

            <p className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-center text-xs text-slate-500 dark:text-slate-400">
              Live site embedded from {site.link} — if it does not load here,{" "}
              <a
                href={site.link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-red-600 hover:underline"
              >
                open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </LivePreviewContext.Provider>
  );
}
