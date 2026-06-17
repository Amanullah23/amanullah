import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Services – Amanullah Yawari",
  description:
    "Full-stack web development, mobile apps, UI/UX design, ISP management systems, Telegram bots, and network infrastructure — by Amanullah Yawari.",
};

const services = [
  {
    slug: "web-development",
    title: "Full-Stack Web Development",
    short: "Next.js, TypeScript, Tailwind CSS, Supabase, Prisma — complete web products from database to deployment.",
    tag: "Web",
    color: "border-blue-100 dark:border-blue-900",
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    accent: "#2563eb",
    icon: "🌐",
  },
  {
    slug: "mobile-apps",
    title: "Flutter & Mobile Development",
    short: "Cross-platform Android & iOS apps with Flutter, Firebase, and REST API integrations.",
    tag: "Mobile",
    color: "border-teal-100 dark:border-teal-900",
    badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
    accent: "#0d9488",
    icon: "📱",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Clean, conversion-focused interfaces designed in Figma with smooth Framer Motion animations.",
    tag: "Design",
    color: "border-purple-100 dark:border-purple-900",
    badge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    accent: "#7c3aed",
    icon: "🎨",
  },
  {
    slug: "management-systems",
    title: "Management Systems",
    short: "Custom ISP, finance, and business management systems with role-based access, billing, and reporting.",
    tag: "Systems",
    color: "border-amber-100 dark:border-amber-900",
    badge: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    accent: "#d97706",
    icon: "🖥️",
  },
  {
    slug: "telegram-bots",
    title: "Telegram Bots & Automation",
    short: "Smart Telegram bots with AI, deep-link attribution, Supabase backends, and real-time notifications.",
    tag: "Bot",
    color: "border-sky-100 dark:border-sky-900",
    badge: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    accent: "#0284c7",
    icon: "🤖",
  },
  {
    slug: "networking",
    title: "Networking & IT Infrastructure",
    short: "Enterprise network design, Cisco/MikroTik configuration, system administration, and IT consulting.",
    tag: "Network",
    color: "border-orange-100 dark:border-orange-900",
    badge: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    accent: "#ea580c",
    icon: "🔌",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 rounded-full px-4 py-1.5 mb-6">
            What I offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight dark:text-white">
            My services
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            7+ years of experience across web, mobile, systems, and networking —
            delivering high-quality digital solutions for Afghan organizations
            and international clients.
          </p>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-500 dark:text-gray-400">
            {[["7+", "Years experience"], ["20+", "Projects delivered"], ["6", "Service areas"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">{n}</p>
                <p className="text-xs">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* SERVICES GRID */}
        <section className="w-full px-[8%] py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ slug, title, short, tag, color, badge, icon }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className={`group border rounded-2xl p-7 bg-white dark:bg-gray-900
                  hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col gap-4 ${color}`}
              >
                {/* Icon + tag */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{icon}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge}`}>{tag}</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {short}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors mt-1 font-medium">
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA BANNER */}
        <section className="w-full px-[8%] py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Ready to start a project?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Whether you need a full product, a landing page, or a custom system —
            let's talk about what you need.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in touch
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}