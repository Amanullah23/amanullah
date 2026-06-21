import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Management Systems – Amanullah Yawari",
  description:
    "Custom ISP, finance, and business management systems with role-based access, billing, and reporting — by Amanullah Yawari.",
};

export default function ManagementSystemsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-700 bg-amber-50 dark:bg-amber-950 dark:text-amber-400 rounded-full px-4 py-1.5 mb-6">
            Management Systems
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Internal systems that<br />run your business
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I build custom management systems — ISP billing, finance tracking, customer
            and subscription management — with role-based access, automated reporting,
            and a database designed around how your business actually operates.
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
              { value: "~500",   label: "Customers in one system" },
              { value: "4",      label: "Role types managed"      },
              { value: "Prisma", label: "Type-safe ORM"            },
              { value: "WhatsApp",label: "Automated notifications" },
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
              { name: "Next.js 15",    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"     },
              { name: "Prisma ORM",    color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"       },
              { name: "PostgreSQL",    color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"       },
              { name: "Supabase",      color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"   },
              { name: "Role-Based Access", color: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200" },
              { name: "Automated Billing", color: "bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-200" },
              { name: "WhatsApp Notifications", color: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" },
              { name: "TypeScript",    color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"       },
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
                title: "ISP & finance systems",
                desc: "Customer, package, and billing management for internet service providers — built around real Afghan business workflows.",
                tag: "ISP", badge: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300", color: "border-amber-100 dark:border-amber-900",
              },
              {
                title: "Role-based dashboards",
                desc: "Admin, finance, registration, and collector roles — each with exactly the access and views they need, nothing more.",
                tag: "Access control", badge: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300", color: "border-orange-100 dark:border-orange-900",
              },
              {
                title: "Reporting & automation",
                desc: "Automated billing cycles, WhatsApp bill delivery, and reporting that saves hours of manual work every month.",
                tag: "Automation", badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300", color: "border-emerald-100 dark:border-emerald-900",
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
          <h2 className="text-center text-3xl font-bold mb-10">My build process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Requirements",  desc: "Map your roles, data, and workflows"   },
              { step: "02", title: "Schema design",desc: "Database tables and relationships"      },
              { step: "03", title: "Build in phases",desc: "Ship core flows first, iterate after" },
              { step: "04", title: "Handoff",       desc: "Training, docs, and ongoing support"   },
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
          <h2 className="text-center text-3xl font-bold mb-10">Systems I've built</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white">Quika Finance System</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">In development</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Internal finance management system for Quika, a licensed Afghan ISP — built
                for ~500 wireless internet customers with 4 roles, automated AFN billing,
                and WhatsApp bill delivery.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Next.js 15", "Prisma", "PostgreSQL"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://kabul-job.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300 block"
            >
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                KabulHire ↗
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Job portal for the Afghan market with full Supabase authentication, profiles,
                saved/applied jobs, and row-level security.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Next.js", "Supabase", "RLS"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA */}
        <section className="w-full px-[8%] py-16 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold mb-4">Need a system built for your business?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's design a system around how your team actually works.
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
