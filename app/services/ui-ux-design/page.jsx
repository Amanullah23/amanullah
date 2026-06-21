import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "UI/UX Design – Amanullah Yawari",
  description:
    "Clean, conversion-focused interfaces designed in Figma with smooth Framer Motion animations — by Amanullah Yawari.",
};

export default function UiUxDesignPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-purple-700 bg-purple-50 dark:bg-purple-950 dark:text-purple-400 rounded-full px-4 py-1.5 mb-6">
            UI/UX Design
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Interfaces people<br />actually enjoy using
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I design clean, conversion-focused interfaces in Figma, then bring them
            to life with Tailwind CSS, Framer Motion, and GSAP — so the design and
            the build are never out of sync, because I do both myself.
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
              { value: "20+",  label: "Interfaces designed & built" },
              { value: "7+",   label: "Years experience"            },
              { value: "Figma",label: "Design tool"                 },
              { value: "Dark mode", label: "Default on every build" },
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
          <h2 className="text-center text-3xl font-bold mb-10">Tools I design & build with</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { name: "Figma",          color: "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200" },
              { name: "Tailwind CSS",   color: "bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-200"             },
              { name: "Framer Motion",  color: "bg-violet-50 text-violet-800 dark:bg-violet-950 dark:text-violet-200" },
              { name: "GSAP",           color: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"     },
              { name: "Design Systems", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"        },
              { name: "Responsive UI",  color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"         },
              { name: "Dark Mode",      color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"        },
              { name: "Accessibility",  color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"         },
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
          <h2 className="text-center text-3xl font-bold mb-10">What I can design for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Landing pages",
                desc: "High-converting marketing and product landing pages with motion that feels intentional, not decorative.",
                tag: "Marketing", badge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300", color: "border-purple-100 dark:border-purple-900",
              },
              {
                title: "Dashboard UX",
                desc: "Clear, data-dense dashboards that stay readable — built for the people who'll use them daily.",
                tag: "Product", badge: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300", color: "border-sky-100 dark:border-sky-900",
              },
              {
                title: "Design systems",
                desc: "A reusable component library and design tokens so your product stays visually consistent as it grows.",
                tag: "Systems", badge: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300", color: "border-violet-100 dark:border-violet-900",
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
          <h2 className="text-center text-3xl font-bold mb-10">My design process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understand goals, users, and brand"        },
              { step: "02", title: "Wireframes",desc: "Low-fidelity layout and flow in Figma"      },
              { step: "03", title: "Hi-fi UI",  desc: "Final visual design with your brand colors" },
              { step: "04", title: "Build",     desc: "Pixel-accurate build with real animation"   },
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
          <h2 className="text-center text-3xl font-bold mb-10">Design-led projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: "Flowe",
                desc: "SaaS UI/UX platform — full design system, purple brand identity, GSAP ScrollTrigger and Framer Motion animation layer across every component.",
                tags: ["Figma", "Framer Motion", "GSAP"],
                url: "https://flowe.vercel.app",
              },
              {
                title: "NOVA INC.",
                desc: "Dark industrial redesign for a construction company — near-black palette with an amber accent system, rebuilt component by component.",
                tags: ["Tailwind CSS", "Dark UI", "Framer Motion"],
                url: "https://nova-one-gamma.vercel.app",
              },
              {
                title: "Quika.org",
                desc: "Corporate ISP website with a canvas particle hero animation and a brand system built around teal and red.",
                tags: ["Next.js", "Canvas", "Brand System"],
                url: "https://quika.org",
              },
              {
                title: "This portfolio",
                desc: "Systematic UI audit and rebuild of yawari.vercel.app — testimonials marquee, animated stats, and a consistent design language throughout.",
                tags: ["Next.js", "Framer Motion", "Tailwind"],
                url: "https://yawari.vercel.app",
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
          <h2 className="text-3xl font-bold mb-4">Ready to design something great?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's design and build an interface your users will actually enjoy.
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
