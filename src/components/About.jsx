import pics from "../../public/about.gif";
import {
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoBulbOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoRocketOutline,
} from "react-icons/io5";

const facts = [
  { id: 1, icon: <IoLocationOutline />, label: "Based in Noida, India" },
  { id: 2, icon: <IoTimeOutline />, label: "3+ Years Experience" },
  { id: 3, icon: <IoSchoolOutline />, label: "MCA Graduate" },
  { id: 4, icon: <IoRocketOutline />, label: "2 Live Products Shipped" },
];

const blocks = [
  {
    id: 1,
    icon: <IoCodeSlashOutline />,
    color: "#e11d48",
    title: "What I do",
    body: (
      <>
        I build web applications end to end — the interface people click on and
        the backend that keeps it running. On the frontend I work with{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          React, Redux, JavaScript, HTML5, CSS3, Tailwind and Bootstrap
        </span>
        . On the backend it is{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          Core PHP, Laravel, Node.js and MySQL
        </span>
        , plus PrestaShop for e-commerce work.
      </>
    ),
  },
  {
    id: 2,
    icon: <IoBulbOutline />,
    color: "#ea580c",
    title: "How I work",
    body: (
      <>
        I care about clean, maintainable code as much as about how a product
        feels to use. I am comfortable owning a feature from the first commit
        through to production, I pick up unfamiliar tools quickly, and I work
        well with a team — most of what I have shipped was built alongside
        designers, clients and other developers.
      </>
    ),
  },
  {
    id: 3,
    icon: <IoBriefcaseOutline />,
    color: "#2563eb",
    title: "Experience",
    body: (
      <>
        I started as a{" "}
        <span className="font-semibold text-slate-900 dark:text-white">Frontend Developer</span>{" "}
        at Adyan Company, Noida (Feb &rsquo;23 &mdash; Aug &rsquo;23), revamping
        client websites with React and Redux. At{" "}
        <span className="font-semibold text-slate-900 dark:text-white">Weblytic Labs</span> I
        moved into PrestaShop and full stack work, including migrating five
        stores to a new version without data loss. Today I build web
        applications at{" "}
        <span className="font-semibold text-slate-900 dark:text-white">Aleph India</span>.
      </>
    ),
  },
  {
    id: 4,
    icon: <IoSchoolOutline />,
    color: "#7c3aed",
    title: "Education",
    body: (
      <>
        <span className="font-semibold text-slate-900 dark:text-white">
          Master of Computer Applications
        </span>{" "}
        — Veer Bahadur Singh Purvanchal University (2020 &mdash; 2022).
        <br />
        <span className="font-semibold text-slate-900 dark:text-white">
          Bachelor of Computer Applications
        </span>{" "}
        — Deen Dayal Upadhyaya Gorakhpur University (2017 &mdash; 2020).
        <br />
        Alongside that I work day to day with Git, GitHub, VS Code and Postman
        for API testing.
      </>
    ),
  },
];

function About() {
  return (
    <>
      <div name="About" className="relative bg-slate-50/60 dark:bg-slate-900/60">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            All <span className="text-red-700">About </span>Me
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            A closer look at my background, how I work, and what I bring to a
            team.
          </p>

          {/* intro + illustration */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-14">
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                Hi, I&apos;m Bablu &mdash; I turn ideas into working software.
              </h2>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                I am a Full Stack Developer based in Noida with{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  3+ years of hands-on experience
                </span>{" "}
                across the whole stack. I have built responsive React
                interfaces, written Laravel and PHP backends, and shipped live
                products that real businesses run on every day.
              </p>

              <p className="mt-5 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                The part of this job I enjoy most is watching a rough idea turn
                into something people can actually use. That is why I pay as
                much attention to clean, maintainable code as I do to how a
                product feels in someone&rsquo;s hands.
              </p>

              {/* quick facts */}
              <div className="mt-8 flex flex-wrap gap-3">
                {facts.map(({ id, icon, label }) => (
                  <span
                    key={id}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm"
                  >
                    <span className="text-lg text-red-600">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center">
              <img
                src={pics}
                className="w-full max-w-md rounded-2xl animate-float"
                alt="Developer illustration"
              />
            </div>
          </div>

          {/* detail cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {blocks.map(({ id, icon, color, title, body }) => (
              <div key={id} className="glass-card card-accent group overflow-hidden p-7">
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}1a`, color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">
                      {title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {body}
                    </p>
                  </div>
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

export default About;
