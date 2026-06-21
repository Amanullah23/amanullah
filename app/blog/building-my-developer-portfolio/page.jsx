import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Building My Developer Portfolio with Next.js 15 — Amanullah Yawari",
  description:
    "A practical look at how I designed, built, and audited my portfolio — the decisions I made, the bugs I found, and what I learned about modern React architecture.",
  openGraph: {
    title: "Building My Developer Portfolio with Next.js 15",
    description:
      "A practical look at how I designed, built, and audited my portfolio — the decisions I made, the bugs I found, and what I learned about modern React architecture.",
    url: "https://yawari.vercel.app/blog/building-my-developer-portfolio",
    type: "article",
  },
};

const TOC = [
  { id: "why",      label: "Why I rebuilt it"            },
  { id: "stack",    label: "The stack decisions"         },
  { id: "audit",    label: "The audit that found the bugs" },
  { id: "design",   label: "Building the design system"  },
  { id: "lesson",   label: "The single-source-of-truth lesson" },
  { id: "next",     label: "What's still on my list"     },
];

function H2({ id, children }) {
  return (
    <h2 id={id} className="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4 leading-snug scroll-mt-24">
      {children}
    </h2>
  );
}

function P({ children }) {
  return <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-[1.85] mb-5">{children}</p>;
}

function UL({ items }) {
  return (
    <ul className="my-4 mb-5 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="text-gray-300 dark:text-gray-600 font-light mt-0.5 shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children, type = "info" }) {
  const styles = {
    info: "bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-950/60 dark:border-blue-700 dark:text-blue-200",
    success: "bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-200",
  };
  return <div className={`my-6 px-5 py-4 rounded-xl border-l-4 text-sm leading-relaxed font-medium ${styles[type]}`}>{children}</div>;
}

function Divider() {
  return <div className="my-8 border-t border-gray-100 dark:border-gray-800" />;
}

export default function BuildingPortfolioPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">

        <section className="w-full px-[8%] pt-28 pb-12 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-8 font-Ovo">
              <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-400">Building My Developer Portfolio</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Next.js
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">6 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              Building My Developer<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">Portfolio with Next.js 15</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              A practical look at how I designed, built, and — more recently — audited
              this portfolio. The decisions I made, the bugs I found by actually reading
              my own deployed pages, and what that process taught me about React architecture.
            </p>

            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-xs font-bold shrink-0">AY</div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">Amanullah Yawari</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Full Stack Developer · Kabul, Afghanistan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[8%] py-14">
          <div className="max-w-3xl lg:max-w-none lg:grid lg:grid-cols-[1fr_220px] lg:gap-16 items-start">
            <article className="max-w-3xl">

              <H2 id="why">Why I rebuilt it</H2>
              <P>
                My first portfolio was a single landing page with a project grid and a contact
                form — fine for getting started, but it didn't say much about who I actually am
                as a developer. By 2026 I'd shipped real products: KarJo, AfghanRoutes, KabulHire,
                Flowe, a finance system for an ISP. The portfolio needed to catch up.
              </P>
              <P>
                So I rebuilt it on Next.js 15 with the App Router, Tailwind CSS, and Framer
                Motion — the same stack I use for client work, on purpose. If I'm telling people
                I build with this stack, my own site should prove it.
              </P>

              <Divider />

              <H2 id="stack">The stack decisions</H2>
              <P>
                A few choices I made early and stuck with:
              </P>
              <UL items={[
                "App Router over Pages Router — server components by default, simpler data fetching, and it's where Next.js is heading.",
                "Tailwind CSS for everything — no separate CSS files to maintain, and dark mode support comes almost free with the dark: variant.",
                "Framer Motion for the interactive layer — scroll reveals, hover states, page transitions. Used sparingly so it adds polish without feeling gimmicky.",
                "next-themes for dark/light mode — handles the flash-of-wrong-theme problem that hand-rolled solutions usually get wrong.",
              ]} />

              <Divider />

              <H2 id="audit">The audit that found the bugs</H2>
              <P>
                Here's the part I didn't expect to write about: months after the redesign
                shipped, I went through the live site page by page — not just the homepage,
                every route — and found problems that had been sitting there unnoticed.
                A resume download link pointing at the wrong PDF file. Service detail pages
                that 404'd because the homepage cards linked to slugs that were never built.
                Blog posts listed on the blog index that had no actual article behind them.
              </P>
              <P>
                None of these were exotic bugs. They were the boring kind — a filename typo,
                a string that didn't exactly match a config key, a page that got planned but
                never finished. The kind of thing that's invisible when you're heads-down
                building, and only shows up when you actually click through your own site
                like a visitor would.
              </P>
              <Callout type="info">
                The lesson: shipping a feature and verifying a feature are two different steps.
                I used to treat "it built successfully" as proof it worked. Now I treat it as
                the starting point for actually checking.
              </Callout>

              <Divider />

              <H2 id="design">Building the design system</H2>
              <P>
                Rather than styling each page independently, I built small reusable pieces —
                the same pattern you'll see across my service and blog pages: a consistent
                hero section, stat cards, tag pills, and a CTA block that repeats with slightly
                different copy. It's a deliberate trade-off. Less visual novelty per page, but
                far easier to keep consistent as the site grows past a dozen routes.
              </P>
              <P>
                Assets live in a single <code>assets.js</code> file rather than scattered
                imports, and I use relative imports instead of path aliases — a personal
                preference that's saved me from import-resolution headaches more than once
                when moving folders around.
              </P>

              <Divider />

              <H2 id="lesson">The single-source-of-truth lesson</H2>
              <P>
                The most useful thing the audit taught me wasn't about a specific bug — it was
                about why the bugs happened in the first place. My homepage service cards were
                generated from one data file, but the routing logic that decided where each
                card linked to lived in a different file, with its own separate list of
                expected titles. The two lists drifted apart over time, and nothing caught it
                because there was no single source of truth connecting "what's displayed" to
                "what's actually built."
              </P>
              <P>
                Now, whenever a homepage card promises a destination, I make sure the exact
                same string exists in exactly one place, and that the page it points to
                actually exists before I commit. Small discipline, but it's the difference
                between a site that looks finished and one that actually is.
              </P>

              <Divider />

              <H2 id="next">What's still on my list</H2>
              <P>
                A portfolio is never really "done" — it's a living project that should track
                what you're actually building. Real project screenshots instead of placeholders,
                an Open Graph image so links preview properly on LinkedIn, and keeping the
                deployment pipeline itself honest are all things I'm actively working through.
                If you're building your own portfolio: ship it, then go back and click every
                link like a stranger would. You'll be surprised what you find.
              </P>
              <Callout type="success">
                Your portfolio is the one product you fully control, end to end. Treat bugs on
                it the same way you'd treat bugs on a client project — because for freelancers,
                it effectively is one.
              </Callout>

              <div className="mt-14 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-Ovo">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to blog
                </Link>
                <Link href="/#contact" className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-all duration-300 font-Ovo">
                  Work with me →
                </Link>
              </div>
            </article>

            <aside className="hidden lg:block sticky top-28 self-start">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-4">On this page</p>
              <nav className="flex flex-col gap-0.5">
                {TOC.map(({ id, label }) => (
                  <a key={id} href={`#${id}`} className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white py-1.5 pl-3 border-l-2 border-gray-100 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs font-medium text-gray-800 dark:text-white mb-1">Available for projects</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">Full-stack web development, mobile apps, and custom systems.</p>
                <Link href="/#contact" className="block text-center text-xs font-medium py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity font-Ovo">
                  Get in touch
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
