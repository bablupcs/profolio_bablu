import pics from "../../public/bablu.jpeg";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoWhatsapp,
  IoMdMail,
} from "react-icons/io";
import { SiLaravel, SiMysql, SiPhp } from "react-icons/si";
import { IoLogoReact, IoEyeOutline, IoDownloadOutline } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { liveProjects } from "../data/projects.jsx";
import { useLivePreview } from "./LivePreview.jsx";

// Kept in the gutters between the text column and the portrait so nothing
// sits on top of readable content. Decorative only, so large screens only.
const glyphs = [
  { char: "</>", pos: "top-28 left-[52%]", size: "text-5xl", delay: "" },
  { char: "{ }", pos: "top-20 right-[2%]", size: "text-4xl", delay: "animation-delay-2000" },
  { char: "( )", pos: "bottom-20 left-[47%]", size: "text-3xl", delay: "animation-delay-4000" },
  { char: "[ ]", pos: "bottom-10 right-[3%]", size: "text-4xl", delay: "animation-delay-2000" },
  { char: "$_", pos: "bottom-28 left-[2%]", size: "text-3xl", delay: "animation-delay-4000" },
];

const socials = [
  { id: 1, icon: <IoMdMail />, href: "mailto:bablupcs123@gmail.com", label: "Email", hover: "hover:text-red-500" },
  { id: 2, icon: <IoLogoWhatsapp />, href: "https://wa.me/+919120337096", label: "WhatsApp", hover: "hover:text-green-500" },
  { id: 3, icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/bablu-singh-518589195/", label: "LinkedIn", hover: "hover:text-blue-600" },
  { id: 4, icon: <IoLogoGithub />, href: "https://github.com/bablupcs", label: "GitHub", hover: "hover:text-slate-900 dark:hover:text-white" },
];

const stack = [
  { id: 1, icon: <IoLogoReact />, label: "React", color: "hover:text-[#61dafb]" },
  { id: 2, icon: <IoLogoNodejs />, label: "Node.js", color: "hover:text-[#6cc24a]" },
  { id: 3, icon: <SiLaravel />, label: "Laravel", color: "hover:text-[#ff2d20]" },
  { id: 4, icon: <SiPhp />, label: "PHP", color: "hover:text-[#777bb4]" },
  { id: 5, icon: <SiMysql />, label: "MySQL", color: "hover:text-[#00758f]" },
];

const stats = [
  { id: 1, value: "3+", label: "Years Experience" },
  { id: 2, value: "2", label: "Live Products" },
  { id: 3, value: "5+", label: "Projects Shipped" },
];

function Home() {
  const { open } = useLivePreview();

  return (
    <>
      <div
        name="Home"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
      >
        {/* ---------- animated background ---------- */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-300/50 blur-3xl animate-blob" />
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-blue-300/50 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl animate-blob animation-delay-4000" />

          {glyphs.map(({ char, pos, size, delay }) => (
            <span
              key={char}
              className={`hidden lg:block absolute ${pos} ${size} ${delay} font-mono font-bold text-slate-400/40 select-none animate-float-slow`}
            >
              {char}
            </span>
          ))}
        </div>

        {/* ---------- content ---------- */}
        <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* text */}
            <div className="md:w-3/5 text-center md:text-left">
              <p className="fade-up inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950 px-4 py-1.5 text-sm font-medium text-green-700 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Currently at Aleph India
              </p>

              <h2 className="fade-up animation-delay-200 mt-6 text-3xl md:text-4xl font-medium text-slate-600 dark:text-slate-300">
                Hi There, I&apos;m
              </h2>
              <h1 className="fade-up animation-delay-200 mt-1 text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                Bablu Singh
              </h1>

              <div className="fade-up animation-delay-400 flex flex-wrap items-baseline justify-center md:justify-start gap-x-3 mt-4">
                <span className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                  I&apos;m a
                </span>
                <ReactTyped
                  className="text-4xl md:text-5xl font-extrabold text-red-600"
                  strings={["Full Stack Developer", "React Developer", "Problem Solver"]}
                  typeSpeed={55}
                  backSpeed={35}
                  backDelay={1600}
                  loop
                />
              </div>

              <p className="fade-up animation-delay-400 mt-7 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                Full Stack Developer with 3+ years of hands-on experience
                building web applications end to end — from responsive React
                interfaces to Laravel and PHP backends. I have shipped live
                products used by real businesses, and I care about clean code
                and experiences people actually enjoy using.
              </p>

              {/* stats */}
              <div className="fade-up animation-delay-400 mt-8 flex justify-center md:justify-start divide-x divide-slate-200">
                {stats.map(({ id, value, label }) => (
                  <div key={id} className="px-6 first:pl-0 text-center md:text-left">
                    <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                      {value}
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* browse the live sites without leaving the page */}
              <div className="fade-up animation-delay-600 mt-9">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Browse my live websites
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  {liveProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => open(project)}
                      className="group flex items-center gap-3 rounded-xl border-2 bg-white dark:bg-slate-800 px-4 py-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                      style={{ borderColor: `${project.color}55` }}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${project.color}1a`, color: project.color }}
                      >
                        {project.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-slate-800 dark:text-slate-100 leading-tight">
                          {project.name}
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 truncate">
                          {project.link.replace("https://", "")}
                        </span>
                      </span>
                      <IoEyeOutline
                        className="ml-auto text-xl shrink-0"
                        style={{ color: project.color }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="fade-up animation-delay-600 flex flex-col sm:flex-row gap-10 mt-9 justify-center md:justify-start">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Available on
                  </h3>
                  <ul className="flex gap-3 justify-center md:justify-start">
                    {socials.map(({ id, icon, href, label, hover }) => (
                      <li key={id}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={label}
                          title={label}
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xl text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${hover}`}
                        >
                          {icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Working with
                  </h3>
                  <ul className="flex gap-3 justify-center md:justify-start">
                    {stack.map(({ id, icon, label, color }) => (
                      <li key={id}>
                        <span
                          title={label}
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xl text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${color}`}
                        >
                          {icon}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                className="fade-up animation-delay-600 btn btn-secondary btn-lg mt-9 rounded-xl px-8 normal-case text-base gap-2 shadow-lg shadow-fuchsia-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                href="https://drive.google.com/file/d/1UlkHSdsFvowyMcHi3fsjyulGiZUjwb_-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <IoDownloadOutline className="text-xl" />
                Download Resume
              </a>
            </div>

            {/* portrait */}
            <div className="md:w-2/5 flex justify-center">
              <div className="relative animate-float">
                {/* rotating gradient ring */}
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-red-500 via-fuchsia-500 to-blue-500 opacity-70 blur-lg animate-spin-slow" />
                <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-tr from-red-500 via-fuchsia-500 to-blue-500" />
                <img
                  src={pics}
                  className="relative w-64 sm:w-80 md:w-[360px] aspect-[4/5] object-cover object-top rounded-[1.65rem]"
                  alt="Bablu Singh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700" />
    </>
  );
}

export default Home;
