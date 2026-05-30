import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function MobileAppsPage() {
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
            Flutter & Mobile App<br />Development
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I build modern, secure, and high-performance mobile applications
            using Flutter for both Android and iOS platforms — from idea to
            production.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire me
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              See my work
            </Link>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* STATS */}
        <section className="w-full px-[8%] py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10+",           label: "Apps built"          },
              { value: "2+",            label: "Years experience"    },
              { value: "100%",          label: "Client satisfaction" },
              { value: "Android & iOS", label: "Cross-platform"      },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-gray-50 dark:bg-gray-900"
              >
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* TECHNOLOGIES */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Stack</p>
          <h2 className="text-center text-3xl font-bold mb-10">Technologies & tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { name: "Flutter",            color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"         },
              { name: "Dart",               color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"         },
              { name: "Firebase",           color: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200"     },
              { name: "REST APIs",          color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"         },
              { name: "Google Maps",        color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"     },
              { name: "Authentication",     color: "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200" },
              { name: "State Management",   color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"         },
              { name: "Push Notifications", color: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200"     },
            ].map(({ name, color }) => (
              <div
                key={name}
                className={`text-center text-sm font-medium rounded-xl px-4 py-3 ${color}`}
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
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
                color: "border-blue-100 dark:border-blue-900",
                badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
                tag: "Business",
              },
              {
                title: "E-commerce apps",
                desc: "Product listing, cart, checkout, and order tracking systems with smooth user experience.",
                color: "border-teal-100 dark:border-teal-900",
                badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
                tag: "E-commerce",
              },
              {
                title: "Custom solutions",
                desc: "Tailored mobile applications designed for your unique needs from scratch.",
                color: "border-purple-100 dark:border-purple-900",
                badge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
                tag: "Custom",
              },
            ].map(({ title, desc, color, badge, tag }) => (
              <div
                key={title}
                className={`border rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300 ${color}`}
              >
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge}`}>{tag}</span>
                <h3 className="text-base font-semibold mt-4 mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* PROCESS */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">How it works</p>
          <h2 className="text-center text-3xl font-bold mb-10">My development process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Planning",       desc: "Requirements, scope, and timeline" },
              { step: "02", title: "UI / UX design", desc: "Wireframes and visual design"      },
              { step: "03", title: "Development",    desc: "Clean, tested Flutter code"        },
              { step: "04", title: "Launch",         desc: "Testing, deployment, and support"  },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900 text-center"
              >
                <p className="text-xs font-medium text-gray-400 mb-2">{step}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* FEATURED PROJECTS */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Portfolio</p>
          <h2 className="text-center text-3xl font-bold mb-10">Featured projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: "Juice ordering app",
                desc: "Flutter app with Firebase authentication, shopping cart, and real-time order management.",
                tags: ["Flutter", "Firebase", "Dart"],
              },
              {
                title: "Business management app",
                desc: "Mobile solution for tracking customers, payments, and generating business reports.",
                tags: ["Flutter", "REST API", "State Management"],
              },
            ].map(({ title, desc, tags }) => (
              <div
                key={title}
                className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA */}
        <section className="w-full px-[8%] py-16 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold mb-4">Ready to build your mobile app?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's turn your idea into a professional, production-ready mobile application.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              All services
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}