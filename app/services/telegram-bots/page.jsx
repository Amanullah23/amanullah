import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Telegram Bots & Automation – Amanullah Yawari",
  description:
    "Smart Telegram bots with deep-link attribution, Supabase backends, and real-time notifications — by Amanullah Yawari.",
};

export default function TelegramBotsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-sky-700 bg-sky-50 dark:bg-sky-950 dark:text-sky-400 rounded-full px-4 py-1.5 mb-6">
            Telegram Bots
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Telegram Bots &<br />Automation
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I build production Telegram bots — not toy demos. Deep-link attribution,
            Supabase-backed user data, scheduled jobs, and webhook architectures that
            stay up under real traffic.
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
              { value: "FastAPI", label: "Webhook architecture"  },
              { value: "Vercel",  label: "Serverless deployment" },
              { value: "Cron",    label: "Scheduled scraping"    },
              { value: "Supabase",label: "User & job data"       },
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
              { name: "Python",        color: "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200" },
              { name: "Node.js",       color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"     },
              { name: "FastAPI",       color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"         },
              { name: "Telegraf",      color: "bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-200"             },
              { name: "Supabase",      color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"     },
              { name: "Vercel Cron",   color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"        },
              { name: "Webhooks",      color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"         },
              { name: "Deep-link Attribution", color: "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200" },
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
                title: "Aggregator bots",
                desc: "Bots that scrape, normalize, and push fresh listings — jobs, news, deals — straight into a user's DMs.",
                tag: "Aggregation", badge: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300", color: "border-sky-100 dark:border-sky-900",
              },
              {
                title: "Notification bots",
                desc: "Real-time alerts tied to your backend — order updates, billing reminders, system status.",
                tag: "Notifications", badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300", color: "border-blue-100 dark:border-blue-900",
              },
              {
                title: "Onboarding & attribution",
                desc: "Deep-link registration flows that connect a Telegram user back to a web account, with full source tracking.",
                tag: "Growth", badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300", color: "border-teal-100 dark:border-teal-900",
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
              { step: "01", title: "Flow design",  desc: "Map commands, states, and triggers"   },
              { step: "02", title: "Backend",       desc: "Supabase schema and API routes"       },
              { step: "03", title: "Bot logic",     desc: "Webhook handlers and scheduled jobs"  },
              { step: "04", title: "Deploy & monitor", desc: "Vercel deployment with logging"    },
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

        {/* FEATURED PROJECT */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Portfolio</p>
          <h2 className="text-center text-3xl font-bold mb-10">Flagship bot project</h2>
          <div className="max-w-3xl mx-auto">
            <a
              href="https://t.me/karjo_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300 block"
            >
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                KarJo (کارجو) — Afghanistan's first automated job aggregator ↗
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                A Telegram bot that scrapes and normalizes listings from multiple Afghan job
                sources, with a public broadcast channel plus personalized DMs, deep-link
                onboarding tied to a Next.js web app, and a Supabase backend. Migrated from
                Render to Vercel using a FastAPI webhook architecture with Vercel Cron Jobs.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Python", "FastAPI", "Telegraf", "Supabase", "Vercel Cron"].map((tag) => (
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
          <h2 className="text-3xl font-bold mb-4">Have a bot idea in mind?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's turn it into a bot that actually stays running.
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
