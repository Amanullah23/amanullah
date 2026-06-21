import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Networking & IT Infrastructure – Amanullah Yawari",
  description:
    "Enterprise network design, Cisco/MikroTik configuration, system administration, and IT consulting — by Amanullah Yawari.",
};

export default function NetworkingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* HERO */}
        <section className="w-full px-[8%] pt-28 pb-16 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-orange-700 bg-orange-50 dark:bg-orange-950 dark:text-orange-400 rounded-full px-4 py-1.5 mb-6">
            Networking & IT
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Networks & IT systems<br />that just work
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Before I was a full-stack developer, I was an IT specialist — supporting
            national election infrastructure and running ISP operations. I design,
            configure, and maintain networks with the same care I put into code.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300">
              Hire me
            </Link>
            <Link href="/#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300">
              My background
            </Link>
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* STATS */}
        <section className="w-full px-[8%] py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "7+",    label: "Years in networking & IT" },
              { value: "Cisco", label: "Networking Academy certified" },
              { value: "ISP",   label: "Operations experience"     },
              { value: "National scale", label: "Election infrastructure support" },
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
              { name: "Cisco",          color: "bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-200" },
              { name: "MikroTik",       color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"         },
              { name: "Linux",          color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"        },
              { name: "Windows Server", color: "bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-200"             },
              { name: "VSAT & Wireless",color: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200"         },
              { name: "Network Security", color: "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"           },
              { name: "Hardware Maintenance", color: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200" },
              { name: "System Admin",  color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"        },
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
          <h2 className="text-center text-3xl font-bold mb-10">What I can help with</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Network design",
                desc: "Routing, switching, and secure network architecture for offices, ISPs, and wireless infrastructure.",
                tag: "Infrastructure", badge: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300", color: "border-orange-100 dark:border-orange-900",
              },
              {
                title: "ISP operations",
                desc: "VSAT and wireless internet rollout, customer provisioning, and day-to-day network administration.",
                tag: "ISP", badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300", color: "border-blue-100 dark:border-blue-900",
              },
              {
                title: "IT support & maintenance",
                desc: "Hardware troubleshooting, system administration, and technical support for critical operations.",
                tag: "Support", badge: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300", color: "border-teal-100 dark:border-teal-900",
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

        {/* EXPERIENCE HIGHLIGHTS */}
        <section className="w-full px-[8%] py-14">
          <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">Track record</p>
          <h2 className="text-center text-3xl font-bold mb-10">Where this experience comes from</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">Independent Election Commission of Afghanistan</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                IT support and system management during national election operations — networking,
                hardware maintenance, and technical support under real operational pressure.
              </p>
            </div>
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">Talia & Quika (ISP operations)</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                VSAT and wireless internet services across Afghan provinces — network administration,
                customer infrastructure, and technical management for a licensed ISP.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-100 dark:border-gray-800 mx-[8%]" />

        {/* CTA */}
        <section className="w-full px-[8%] py-16 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Get started</p>
          <h2 className="text-3xl font-bold mb-4">Need network or IT support?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Let's talk about your infrastructure, however big or small.
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
