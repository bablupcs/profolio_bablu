import { IoBriefcaseOutline } from "react-icons/io5";

const timeline = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Aleph India",
    period: "2024 — Present",
    current: true,
    description:
      "Building and maintaining web applications end to end, delivering responsive interfaces and reliable backend integrations.",
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Weblytic Labs",
    period: "2023 — 2024",
    description:
      "Customized and developed e-commerce solutions using PrestaShop, including theme design and module development. Led the migration of 5 PrestaShop stores to the latest version with zero data loss and minimal business disruption.",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Adyan Company, Noida",
    period: "Feb 2023 — Aug 2023",
    description:
      "Revamped client websites with creative, user-friendly designs and built interactive interfaces using React and Redux, consistently improving the online experience.",
  },
];

function Experiance() {
  return (
    <>
      <div name="Experiance" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-fuchsia-200/25 blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            Work <span className="text-red-700">Experience</span>
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Where I have worked, and what I shipped there.
          </p>

          {/* vertical rail with a card per role */}
          <div className="relative max-w-3xl mx-auto mt-14 pl-8 md:pl-0">
            <div
              className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-red-400 via-fuchsia-400 to-blue-400 md:-translate-x-1/2"
              aria-hidden="true"
            />

            {timeline.map(({ id, role, company, period, description, current }, i) => (
              <div
                key={id}
                className={`relative mb-10 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                {/* node on the rail */}
                <span
                  className={`absolute -left-8 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white dark:border-slate-900 shadow-md ${
                    current ? "bg-green-500" : "bg-slate-400"
                  } md:left-auto ${
                    i % 2 === 0 ? "md:-right-3" : "md:-left-3"
                  }`}
                  aria-hidden="true"
                >
                  {current && (
                    <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  )}
                </span>

                <div className="glass-card card-accent group overflow-hidden p-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-xl text-slate-600 dark:text-slate-300 transition-transform duration-300 group-hover:scale-110">
                      <IoBriefcaseOutline />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                        {role}
                      </h3>
                      <p className="font-semibold text-slate-600 dark:text-slate-300">{company}</p>
                    </div>
                    {current && (
                      <span className="ml-auto rounded-full bg-green-50 dark:bg-green-950 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-semibold text-red-600">{period}</p>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700" />
    </>
  );
}

export default Experiance;
