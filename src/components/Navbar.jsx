import { useEffect, useState } from 'react'
import pic from "../../public/logo.jpg"
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Portfolio" },
  { id: 4, text: "Experiance" },
  { id: 5, text: "Services" },
  { id: 6, text: "Skill" },
  { id: 7, text: "Contacts" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Give the bar a stronger backdrop once the page moves
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-md"
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src={pic}
              alt="Code Capsule logo"
              className="h-11 w-11 rounded-full ring-2 ring-red-500/30 object-cover"
            />
            <h1 className="font-bold text-xl leading-tight cursor-pointer">
              Code <span className="text-red-500">Capsule</span>
              <p className="text-xs font-normal text-slate-500 dark:text-slate-400">Full Stack Developer</p>
            </h1>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center space-x-1">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="!text-red-600 !bg-red-50 dark:!bg-red-950"
                  className="cursor-pointer rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 font-medium transition-colors duration-200 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenu(!menu)}
            className="p-2 text-slate-700 dark:text-slate-200"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            {menu ? <IoClose size={26} /> : <IoMenuOutline size={26} />}
          </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ${
          menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-1">
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={text}
                onClick={() => setMenu(false)}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="!text-red-600 !bg-red-50 dark:!bg-red-950"
                className="block cursor-pointer rounded-lg px-3 py-2.5 font-medium text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
