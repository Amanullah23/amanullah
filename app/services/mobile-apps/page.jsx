import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Flutter & Mobile Development – Amanullah Yawari",
  description:
    "Cross-platform Android & iOS apps built with Flutter, Dart, and Firebase — by Amanullah Yawari.",
};

export default function MobileDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-teal-700 bg-teal-50 dark:bg-teal-950 dark:text-teal-400 rounded-full px-4 py-1.5 mb-6">
            Mobile Development
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Flutter & Mobile<br />App Development
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I build cross-platform mobile apps with Flutter and Dart — one codebase,
            native performance on both Android and iOS, backed by Firebase or a
            Supabase/Postgres backend when you need it.
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
              { value: "Flutter",  label: "Primary framework"   },
              { value: "7+",       label: "Years in IT & dev"    },
              { value: "iOS & Android", label: "Single codebase" },
              { value: "Firebase", label: "Backend & auth"       },
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
              { name: "Flutter",          color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"     },
              { name: "Dart",              color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"     },
              { name: "Firebase",          color: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200" },
              { name: "REST APIs",         color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"   },
              { name: "Supabase",          color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200" },
              { name: "Push Notifications",color: "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200" },
              { name: "State Management",  color: "bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-200"         },
              { name: "Google Maps",       color: "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"         },
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
                title: "Business apps",
                desc: "Apps for managing customers, payments, orders, and reports — built for real business workflows.",
                tag: "Business", badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300", color: "border-teal-100 dark:border-teal-900",
              },
              {
                title: "Companion apps",
                desc: "Mobile companions for an existing web platform — same backend, native mobile experience.",
                tag: "Companion", badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300", color: "border-blue-100 dark:border-blue-900",
              },
              {
                title: "Custom solutions",
                desc: "Tailored mobile applications designed for your unique needs, from idea to App Store / Play Store.",
                tag: "Custom", badge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300", color: "border-purple-100 dark:border-purple-900",
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
              { step: "01", title: "Planning",     desc: "Requirements, scope, and timeline"        },
              { step: "02", title: "UI / UX design",desc: "Wireframes and visual design in Figma"    },
              { step: "03", title: "Development",  desc: "Clean, tested Flutter code"                },
              { step: "04", title: "Launch",       desc: "Testing, store submission, and support"    },
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
          <h2 className="text-center text-3xl font-bold mb-10">Mobile work</h2>
          <div className="max-w-3xl mx-auto">
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white">KarJo Mobile (کارجو)</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">In development</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                The Flutter mobile companion to KarJo, Afghanistan's automated job aggregator —
                bringing the same job-matching experience from the Telegram bot and web app to
                a native Android/iOS app, backed by the same Supabase database.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Flutter", "Supabase", "Dart"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              Mobile is a growing part of my practice — see{" "}
              <Link href="/#work" className="underline hover:text-gray-600 dark:hover:text-gray-300">my web projects</Link>{" "}
              for the full picture of what I've shipped.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA */}
        <section className="w-full px-[8%] py-16 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold mb-4">Ready to build your mobile app?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's turn your idea into a professional, production-ready mobile application.
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
