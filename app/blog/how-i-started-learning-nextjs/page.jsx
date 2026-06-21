import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "How I Started Learning Next.js — Amanullah Yawari",
  description:
    "The roadmap I followed, the mistakes I made, and the lessons that helped me understand modern React apps — from a developer based in Kabul.",
  openGraph: {
    title: "How I Started Learning Next.js",
    description:
      "The roadmap I followed, the mistakes I made, and the lessons that helped me understand modern React apps — from a developer based in Kabul.",
    url: "https://yawari.vercel.app/blog/how-i-started-learning-nextjs",
    type: "article",
  },
};

const TOC = [
  { id: "start",     label: "Where I actually started"   },
  { id: "confusion", label: "The App Router confusion"   },
  { id: "roadmap",   label: "The roadmap that worked"    },
  { id: "projects",  label: "The projects that cemented it" },
  { id: "mistakes",  label: "Mistakes I'd skip next time" },
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
function Divider() { return <div className="my-8 border-t border-gray-100 dark:border-gray-800" />; }

export default function LearningNextjsPost() {
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
              <span className="text-gray-600 dark:text-gray-400">How I Started Learning Next.js</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">Learning</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">4 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              How I Started<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">Learning Next.js</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              The roadmap I followed, the mistakes I made, and the lessons that helped
              me understand modern React apps — from a developer based in Kabul, learning
              mostly from documentation and trial and error.
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

              <H2 id="start">Where I actually started</H2>
              <P>
                I didn't start with Next.js. I started with HTML, CSS, and plain JavaScript,
                then moved into React while working as a front-end developer at Fanoos and
                Talia. React on its own was straightforward enough — components, props, state.
                Next.js was where things got genuinely confusing at first, because it wasn't
                just a library, it was a set of conventions: file-based routing, server vs.
                client components, data fetching patterns that didn't match anything I'd done
                with plain React.
              </P>

              <Divider />

              <H2 id="confusion">The App Router confusion</H2>
              <P>
                The hardest part wasn't React — it was figuring out which version of Next.js
                documentation I was even reading. The App Router and the older Pages Router
                solve the same problems in genuinely different ways, and a lot of tutorials
                online still teach the older pattern. I spent real time debugging code that
                was actually correct for one router and silently wrong for the other.
              </P>
              <P>
                What finally clicked: server components are the default in the App Router, and
                you opt into client-side interactivity explicitly with{" "}
                <code className="text-[13px] bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">"use client"</code>{" "}
                at the top of a file. Once I understood that data fetching happens on the
                server by default — no <code className="text-[13px] bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">useEffect</code> needed
                for the initial load — a lot of the framework's design started making sense.
              </P>
              <Callout type="info">
                If you're starting today: pick the App Router and stick to docs and examples
                that explicitly say App Router. Mixing mental models from both routers is the
                fastest way to confuse yourself.
              </Callout>

              <Divider />

              <H2 id="roadmap">The roadmap that worked</H2>
              <P>Once I stopped jumping between tutorials, this is roughly the order that worked for me:</P>
              <UL items={[
                "JavaScript fundamentals first — closures, async/await, array methods. Skipping this and going straight to React just moves the confusion downstream.",
                "Plain React — components, props, state, and the rendering model — before adding a framework on top of it.",
                "Next.js fundamentals — routing, layouts, and the server/client component split, using the official docs as the primary source.",
                "A real backend — Prisma and PostgreSQL, then Supabase, to understand what's actually happening behind the API calls.",
                "Authentication — JWTs first by hand, so managed auth (like Supabase Auth) stops feeling like a black box.",
              ]} />

              <Divider />

              <H2 id="projects">The projects that cemented it</H2>
              <P>
                Tutorials got me to "I understand this in theory." Real projects got me to
                "I can actually build this." The shift happened when I started building things
                with actual constraints — a real client, a real deadline, real data that didn't
                behave the way the tutorial's sample data did. AfghanRoutes was the first
                project where I had to solve a problem (a Leaflet map hydration error) that no
                tutorial had covered, by actually reading the library's GitHub issues. That's
                when Next.js stopped being something I was learning and became something I knew.
              </P>

              <Divider />

              <H2 id="mistakes">Mistakes I'd skip next time</H2>
              <UL items={[
                "Trying to learn TypeScript and Next.js at the same time. Pick one new thing at a time — stacking unfamiliar concepts just slows both down.",
                "Copying tutorial code without reading why each piece exists. It works until you need to change something the tutorial didn't cover.",
                "Avoiding the official documentation in favor of video tutorials. Docs are usually more current and more precise, even if they're less entertaining.",
                "Not deploying early. I sat on local projects for too long before pushing them to Vercel. Seeing something live, with a real URL, changes how seriously you take it.",
              ]} />
              <Callout type="success">
                The fastest way to actually learn a framework is to build something you care
                about finishing, with a backend that holds real data, and to deploy it before
                it feels "ready." You'll learn more from the first bug report than from another
                ten tutorials.
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
