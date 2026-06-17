import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Full-Stack Web Development – Amanullah Yawari",
  description:
    "Next.js, TypeScript, Tailwind CSS, Supabase, Prisma — complete web products from database to deployment.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-700 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 rounded-full px-4 py-1.5 mb-6">
            Web Development
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Full-Stack Web<br />Development
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            From a simple landing page to a complex multi-role management system —
            I build complete, production-ready web applications using the modern
            Next.js stack, deployed to Vercel with a real database backend.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300">
              Hire me
            </Link>
            <Link href="/#work" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300">
              See my work
            </Link>
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* STATS */}
        <section className="w-full px-[8%] py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15+",    label: "Web projects built"   },
              { value: "7+",     label: "Years experience"     },
              { value: "Vercel", label: "Deployment platform"  },
              { value: "100%",   label: "Client satisfaction"  },
            ].map(({ value, label }) => (
              <div key={label} className="text-center border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-gray-50 dark:bg-gray-900">
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* TECH STACK */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Stack</p>
          <h2 className="text-center text-3xl font-bold mb-10">Technologies & tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { name: "Next.js 15",    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"           },
              { name: "TypeScript",    color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"            },
              { name: "Tailwind CSS",  color: "bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-200"                },
              { name: "Framer Motion", color: "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200"    },
              { name: "Supabase",      color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"        },
              { name: "Prisma ORM",    color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"            },
              { name: "PostgreSQL",    color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"            },
              { name: "Vercel",        color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"           },
            ].map(({ name, color }) => (
              <div key={name} className={`text-center text-sm font-medium rounded-xl px-4 py-3 ${color}`}>
                {name}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* WHAT I BUILD */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Services</p>
          <h2 className="text-center text-3xl font-bold mb-10">What I can build for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Corporate & landing pages",
                desc: "Professional company websites, portfolios, and marketing landing pages — fast, SEO-ready, and mobile-first.",
                tag: "Marketing", badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300", color: "border-blue-100 dark:border-blue-900",
              },
              {
                title: "SaaS & dashboards",
                desc: "Multi-role SaaS platforms with authentication, billing, dashboards, onboarding flows, and user management.",
                tag: "SaaS", badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300", color: "border-teal-100 dark:border-teal-900",
              },
              {
                title: "Management systems",
                desc: "Custom internal tools — finance trackers, ISP management, HR systems, or anything with complex business logic.",
                tag: "Systems", badge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300", color: "border-purple-100 dark:border-purple-900",
              },
            ].map(({ title, desc, tag, badge, color }) => (
              <div key={title} className={`border rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300 ${color}`}>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge}`}>{tag}</span>
                <h3 className="text-base font-semibold mt-4 mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* PROCESS */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">How it works</p>
          <h2 className="text-center text-3xl font-bold mb-10">My development process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Discovery",    desc: "Requirements, scope, and timeline discussion"   },
              { step: "02", title: "Design",       desc: "Figma wireframes and UI design approval"        },
              { step: "03", title: "Development",  desc: "Clean, typed Next.js code with full backend"    },
              { step: "04", title: "Delivery",     desc: "Testing, deployment to Vercel, and handoff"     },
            ].map(({ step, title, desc }) => (
              <div key={step} className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900 text-center">
                <p className="text-xs font-medium text-gray-400 mb-2">{step}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* FEATURED PROJECTS */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Portfolio</p>
          <h2 className="text-center text-3xl font-bold mb-10">Featured web projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: "AfghanRoutes",
                desc: "Tourism discovery platform for Afghanistan with multilingual support (Dari/English RTL), animated hero, and Framer Motion scroll reveals.",
                tags: ["Next.js 15", "Framer Motion", "Tailwind CSS"],
                url: "https://afghanroutes.vercel.app",
              },
              {
                title: "Flowe",
                desc: "SaaS UI/UX platform with full auth flow, onboarding dashboard, and GSAP ScrollTrigger animations — built on Supabase.",
                tags: ["Next.js", "Supabase", "GSAP"],
                url: "https://flowe.vercel.app",
              },
              {
                title: "KabulHire",
                desc: "Afghan job portal with real company listings, TypeScript-strict codebase, and a conditional NavFooterWrapper for auth routes.",
                tags: ["Next.js", "TypeScript", "Supabase"],
                url: "https://kabul-job.vercel.app",
              },
              {
                title: "NOVA INC.",
                desc: "Dark industrial website for a Kabul engineering firm with amber/gold accent system and Web3Forms contact integration.",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                url: "https://nova-one-gamma.vercel.app",
              },
            ].map(({ title, desc, tags, url }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300 block"
              >
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {title} ↗
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA */}
        <section className="w-full px-[8%] py-16 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold mb-4">Ready to build your web project?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's turn your idea into a fast, modern, production-ready web application.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300">
              Get in touch
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300">
              All services
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}