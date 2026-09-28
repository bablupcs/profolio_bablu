import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoSend,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const details = [
  {
    id: 1,
    icon: <IoMailOutline />,
    color: "#e11d48",
    label: "Email",
    value: "bablupcs123@gmail.com",
    hint: "Best for detailed project briefs",
    href: "mailto:bablupcs123@gmail.com",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    color: "#16a34a",
    label: "Phone / WhatsApp",
    value: "+91 91203 37096",
    hint: "Quickest way to reach me",
    href: "https://wa.me/+919120337096",
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    color: "#2563eb",
    label: "Location",
    value: "Noida, India",
    hint: "Open to remote work",
    href: null,
  },
];

const socials = [
  { id: 1, icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/bablu-singh-518589195/", label: "LinkedIn", hover: "hover:bg-[#0a66c2]" },
  { id: 2, icon: <IoLogoGithub />, href: "https://github.com/bablupcs", label: "GitHub", hover: "hover:bg-slate-700" },
  { id: 3, icon: <IoLogoWhatsapp />, href: "https://wa.me/+919120337096", label: "WhatsApp", hover: "hover:bg-[#25d366]" },
];

const helps = [
  "A CRM, CMS or custom web application",
  "A business website or e-commerce store",
  "Fixing, migrating or speeding up an existing site",
  "Full-time or freelance development work",
];

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
];

function Contacts() {
  return (
    <>
      <div name="Contacts" className="relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/60">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl animate-blob" />
          <div className="absolute top-10 -left-16 h-72 w-72 rounded-full bg-red-200/25 blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
          <h1 className="section-heading">
            Contact <span className="text-red-700">Me</span>
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Have a project in mind, or a role you think I would fit? I would
            love to hear about it.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 mt-14">
            {/* left: intro + details */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                Let&rsquo;s build something together.
              </h2>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                Whether you need a complete product built from scratch or an
                extra pair of hands on something that already exists, send me
                the details and I will tell you honestly whether I am the right
                person for it.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  I can help with
                </h3>
                <ul className="space-y-3">
                  {helps.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg text-slate-600 dark:text-slate-300">
                      <IoCheckmarkCircleOutline className="mt-1 shrink-0 text-xl text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                {details.map(({ id, icon, color, label, value, hint, href }) => {
                  const inner = (
                    <div className="glass-card card-accent group overflow-hidden p-6 flex items-center gap-5">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${color}1a`, color }}
                      >
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                          {label}
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 break-words">
                          {value}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{hint}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={id} href={href} target="_blank" rel="noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={id}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Find me online
                </h3>
                <div className="flex gap-3">
                  {socials.map(({ id, icon, href, label, hover }) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-2xl text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:text-white hover:shadow-md ${hover}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* right: form */}
            <div className="lg:w-1/2">
              <form
                action="https://getform.io/f/akkgplda"
                method="POST"
                className="glass-card p-8 md:p-10 hover:translate-y-0 hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]"
              >
                <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                  Send Your Message
                </h2>
                <p className="mt-2 mb-7 text-slate-500 dark:text-slate-400">
                  Fill this in and it lands straight in my inbox.
                </p>

                {fields.map(({ id, label, type, placeholder }) => (
                  <div key={id} className="mb-6">
                    <label htmlFor={id} className="block text-base font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-base text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-red-500"
                    />
                  </div>
                ))}

                <div className="mb-7">
                  <label htmlFor="message" className="block text-base font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project — what you need, roughly when, and anything else that helps."
                    className="w-full resize-none rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3.5 text-base text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary btn-lg w-full rounded-xl normal-case text-base gap-2 shadow-lg shadow-fuchsia-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                  <IoSend />
                </button>

                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                  Prefer to talk directly?{" "}
                  <a
                    href="https://wa.me/+919120337096"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Message me on WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700" />
    </>
  );
}

export default Contacts;
