import { Link } from "react-scroll";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  IoPeopleOutline,
  IoLayersOutline,
  IoGlobeOutline,
  IoCartOutline,
  IoCodeSlashOutline,
  IoConstructOutline,
  IoMailOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

const services = [
  {
    id: 1,
    icon: <IoPeopleOutline />,
    color: "#2563eb",
    title: "CRM Development",
    description:
      "Custom CRM systems to manage leads, customers and your sales pipeline — with role-based logins, dashboards and reports.",
    points: ["Lead & customer management", "Role-based admin panel", "Reports and dashboards"],
  },
  {
    id: 2,
    icon: <IoLayersOutline />,
    color: "#7c3aed",
    title: "CMS Development",
    description:
      "Content management systems that let you update your own website — no developer needed for everyday changes.",
    points: ["Easy content editing", "Media & page manager", "SEO-friendly structure"],
  },
  {
    id: 3,
    icon: <IoGlobeOutline />,
    color: "#e11d48",
    title: "Business Websites",
    description:
      "Fast, responsive websites for businesses and personal brands that look right on every screen size.",
    points: ["Responsive on all devices", "Fast loading", "Contact & enquiry forms"],
  },
  {
    id: 4,
    icon: <IoCartOutline />,
    color: "#ea580c",
    title: "E-Commerce Stores",
    description:
      "Online stores built on PrestaShop or custom-built, with product management, carts and payment integration.",
    points: ["Product & order management", "Payment gateway setup", "PrestaShop customisation"],
  },
  {
    id: 5,
    icon: <IoCodeSlashOutline />,
    color: "#0891b2",
    title: "Custom Web Applications",
    description:
      "Tailor-made web apps built with React, Laravel and PHP when off-the-shelf software does not fit your workflow.",
    points: ["React + Laravel stack", "REST API development", "Built around your process"],
  },
  {
    id: 6,
    icon: <IoConstructOutline />,
    color: "#16a34a",
    title: "Maintenance & Support",
    description:
      "Keeping existing sites healthy — bug fixes, version migrations, speed improvements and ongoing changes.",
    points: ["Bug fixing & updates", "Version migration", "Speed optimisation"],
  },
];

function Services() {
  return (
    <>
      <div name="Services" className="relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/60">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl animate-blob" />
          <div className="absolute bottom-10 -left-16 h-72 w-72 rounded-full bg-fuchsia-200/25 blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            What I <span className="text-red-700">Build </span>For You
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Need a CRM, a CMS or a website for your business? I build these end
            to end — design, development and deployment. Let&apos;s talk about
            your project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map(({ id, icon, color, title, description, points }) => (
              <div
                key={id}
                className="glass-card card-accent group overflow-hidden p-7 flex flex-col"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}1a`, color }}
                >
                  {icon}
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-slate-800 dark:text-slate-100">
                  {title}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                  {description}
                </p>

                <ul className="mt-5 space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <IoCheckmarkCircle
                        className="mt-0.5 shrink-0 text-base"
                        style={{ color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* call to action */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 md:px-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              If you need a CRM, CMS, website or web application built, get in
              touch — I am happy to discuss what you need and what it takes.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/+919120337096"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <IoLogoWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:bablupcs123@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-6 py-3 font-semibold text-slate-800 dark:text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <IoMailOutline className="text-xl" />
                Send an Email
              </a>

              <Link
                to="Contacts"
                smooth={true}
                duration={600}
                offset={-80}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-slate-600 px-6 py-3 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:text-white"
              >
                Fill the Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700" />
    </>
  );
}

export default Services;
