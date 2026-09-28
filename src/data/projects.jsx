import { SiPrestashop, SiReact } from "react-icons/si";
import { IoBookOutline, IoPrintOutline, IoSparklesOutline } from "react-icons/io5";

// Single source of truth: the hero, the portfolio grid and the live preview
// modal all read from this list.
export const projects = [
  {
    id: 1,
    icon: <IoPrintOutline />,
    color: "#e34f26",
    name: "Omee India",
    tagline: "Custom printing & design platform",
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    link: "https://omeeindia.in",
    description:
      "A custom printing and design platform for visiting cards, apparel, mugs, corporate gifting and branded merchandise. Includes an online design editor, bulk ordering for B2B clients and a dedicated employee portal with authentication.",
  },
  {
    id: 2,
    icon: <IoSparklesOutline />,
    color: "#764abc",
    name: "AI Tools Wallah",
    tagline: "Curated AI tools directory",
    stack: ["Laravel", "PHP", "MySQL"],
    link: "https://aitoolswallah.in",
    description:
      "A curated AI tools directory covering 68+ categories with daily updates. Features filtering by pricing, category and use-case, editorial reviews and rankings, community submissions and voting, plus AI news and tutorials.",
  },
  {
    id: 3,
    icon: <SiPrestashop />,
    color: "#df0067",
    name: "PrestaShop E-Commerce",
    tagline: "Theme & module development",
    stack: ["PrestaShop", "PHP", "MySQL"],
    description:
      "Customized and developed e-commerce solutions including theme design and module development. Led the migration of 5 PrestaShop stores to the latest version, ensuring data integrity and minimal disruption to business operations.",
  },
  {
    id: 4,
    icon: <IoBookOutline />,
    color: "#e6c315",
    name: "Book Store Application",
    tagline: "Online bookstore in React",
    stack: ["React.js", "Node.js", "Tailwind CSS"],
    description:
      "An advanced online bookstore built with React.js, focused on a high-performance, user-friendly experience. A modern, scalable frontend that improves shopping for users and streamlines book inventory management.",
  },
  {
    id: 5,
    icon: <SiReact />,
    color: "#61dafb",
    name: "Currency Converter",
    tagline: "Real-time exchange rates",
    stack: ["React.js", "REST API"],
    description:
      "A real-time currency converter built with React.js that lets users convert amounts between different currencies using live exchange rates.",
  },
];

// Projects that have a site you can actually open.
export const liveProjects = projects.filter((p) => p.link);
