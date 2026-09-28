import { Link } from 'react-scroll'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoArrowUpOutline, IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5'

const navItems = ["Home", "About", "Portfolio", "Experiance", "Services", "Skill", "Contacts"];

const serviceLinks = [
  "CRM Development",
  "CMS Development",
  "Business Websites",
  "E-Commerce Stores",
  "Custom Web Applications",
  "Maintenance & Support",
];

const contactItems = [
  { id: 1, icon: <IoMailOutline />, value: "bablupcs123@gmail.com", href: "mailto:bablupcs123@gmail.com" },
  { id: 2, icon: <IoCallOutline />, value: "+91 91203 37096", href: "https://wa.me/+919120337096" },
  { id: 3, icon: <IoLocationOutline />, value: "Noida, India", href: null },
];

const socials = [
  { id: 1, icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/bablu-singh-518589195/", label: "LinkedIn", hover: "hover:bg-[#0a66c2]" },
  { id: 2, icon: <IoLogoGithub />, href: "https://github.com/bablupcs", label: "GitHub", hover: "hover:bg-slate-600" },
  { id: 3, icon: <IoLogoWhatsapp />, href: "https://wa.me/+919120337096", label: "WhatsApp", hover: "hover:bg-[#25d366]" },
  { id: 4, icon: <IoMdMail />, href: "mailto:bablupcs123@gmail.com", label: "Email", hover: "hover:bg-red-500" },
];

const linkClass = "cursor-pointer text-slate-400 transition-colors duration-200 hover:text-white";

function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 dark:border-t dark:border-slate-800 text-slate-300">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              Code <span className="text-red-500">Capsule</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Bablu Singh &middot; Full Stack Developer
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              I build web applications end to end &mdash; CRM and CMS systems,
              business websites and e-commerce stores &mdash; using React,
              Laravel, PHP and MySQL.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ id, icon, href, label, hover }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-xl text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:text-white ${hover}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navItems.map((text) => (
                <li key={text}>
                  <Link to={text} smooth={true} duration={600} offset={-80} className={linkClass}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="font-bold text-white mb-4">What I Build</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((text) => (
                <li key={text}>
                  <Link to="Services" smooth={true} duration={600} offset={-80} className={linkClass}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              {contactItems.map(({ id, icon, value, href }) => (
                <li key={id} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-0.5 shrink-0 text-lg text-red-500">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="break-words transition-colors duration-200 hover:text-white"
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="Contacts"
              smooth={true}
              duration={600}
              offset={-80}
              className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-500"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} &middot; All rights
            reserved by{" "}
            <span className="font-bold text-white">Code</span>{" "}
            <span className="font-bold text-red-500">Capsule</span>
          </p>

          <div className="flex items-center gap-5">
            <p className="text-sm text-slate-500">
              Built with React &amp; Tailwind CSS
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              title="Back to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:bg-slate-700 hover:text-white"
            >
              <IoArrowUpOutline />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
