import { IoLogoGithub } from "react-icons/io";
import { IoOpenOutline, IoEyeOutline } from "react-icons/io5";
import { projects } from "../data/projects.jsx";
import { useLivePreview } from "./LivePreview.jsx";

function Portfolio() {
  const { open } = useLivePreview();

  return (
    <>
      <div name="Portfolio" className="relative overflow-hidden">
        {/* soft ambient glow */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl animate-blob" />
          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-red-200/25 blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            My <span className="text-red-700">Recent </span>Work
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Live products and applications I have designed and built. Open any
            live site right here without leaving the page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => {
              const { id, icon, color, name, tagline, stack, description, link } = project;
              return (
                <div
                  key={id}
                  className="glass-card card-accent group overflow-hidden p-7 flex flex-col"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${color}1a`, color }}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 leading-snug">
                        {name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{tagline}</p>
                    </div>
                    {link && (
                      <span className="ml-auto shrink-0 rounded-full bg-green-50 dark:bg-green-950 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                        Live
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {link && (
                    <div className="mt-6 flex gap-2">
                      <button
                        onClick={() => open(project)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-white transition-all duration-200 hover:brightness-110"
                        style={{ backgroundColor: color }}
                      >
                        <IoEyeOutline className="text-lg" />
                        Preview
                      </button>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        title="Open in a new tab"
                        aria-label={`Open ${name} in a new tab`}
                        className="flex items-center justify-center rounded-xl border-2 px-4 py-2.5 transition-colors duration-200"
                        style={{ borderColor: color, color }}
                      >
                        <IoOpenOutline className="text-lg" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <a
              className="btn btn-outline btn-secondary rounded-xl px-8 normal-case text-base gap-2 hover:-translate-y-0.5 transition-transform duration-200"
              href="https://github.com/bablupcs"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl" />
              See more on GitHub
            </a>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700" />
    </>
  );
}

export default Portfolio;
