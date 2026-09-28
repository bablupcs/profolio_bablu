import tiw from "../../public/tiw.png";
import Bootstrap from "../../public/Bootstrap.png";
import html from "../../public/html.png";
import css3 from "../../public/css3.png";
import javascript from "../../public/javascript.png";
import react from "../../public/react.png";
import node from "../../public/node.png";
import {
  SiPhp,
  SiMysql,
  SiRedux,
  SiLaravel,
  SiPrestashop,
  SiGit,
} from "react-icons/si";

const iconClass = "h-14 w-14";

const cardItems = [
  { id: 1, logo: javascript, name: "JavaScript", color: "#e6c315" },
  { id: 2, logo: react, name: "React JS", color: "#61dafb" },
  { id: 3, logo: node, name: "Node JS", color: "#6cc24a" },
  { id: 4, icon: <SiRedux className={iconClass} />, name: "Redux", color: "#764abc" },
  { id: 5, logo: html, name: "HTML5", color: "#e34f26" },
  { id: 6, logo: css3, name: "CSS3", color: "#1572b6" },
  { id: 7, logo: tiw, name: "Tailwind", color: "#38bdf8" },
  { id: 8, logo: Bootstrap, name: "Bootstrap", color: "#563d7c" },
  { id: 9, icon: <SiPhp className={iconClass} />, name: "Core PHP", color: "#777bb4" },
  { id: 10, icon: <SiLaravel className={iconClass} />, name: "Laravel", color: "#ff2d20" },
  { id: 11, icon: <SiPrestashop className={iconClass} />, name: "PrestaShop", color: "#df0067" },
  { id: 12, icon: <SiMysql className={iconClass} />, name: "MySQL", color: "#00758f" },
  { id: 13, icon: <SiGit className={iconClass} />, name: "Git / GitHub", color: "#f05032" },
];

function Skill() {
  return (
    <>
      <div name="Skill" className="relative bg-slate-50/60 dark:bg-slate-900/60">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            My <span className="text-red-700">Technical </span>Skills
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            The languages, frameworks and tools I reach for day to day.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-12">
            {cardItems.map(({ id, logo, icon, name, color }) => (
              <div
                key={id}
                className="glass-card card-accent group overflow-hidden p-6 flex flex-col items-center justify-center gap-4"
                style={{ "--tw-shadow-color": color }}
              >
                {/* colour wash that fades in on hover */}
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                <div
                  className="relative transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                >
                  {logo ? (
                    <img src={logo} className="h-14 w-14 object-contain" alt={name} />
                  ) : (
                    icon
                  )}
                </div>
                <div className="relative text-center font-semibold text-slate-700 dark:text-slate-200 text-sm md:text-base">
                  {name}
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

export default Skill;
