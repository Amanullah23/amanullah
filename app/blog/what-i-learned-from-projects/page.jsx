import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "What I Learned from Building Real Projects — Amanullah Yawari",
  description:
    "Why project-based learning beats tutorials every time — and the specific lessons I took from AfghanRoutes, KabulHire, Flowe, and the Quika Finance System.",
  openGraph: {
    title: "What I Learned from Building Real Projects",
    description:
      "Why project-based learning beats tutorials every time — and the specific lessons I took from AfghanRoutes, KabulHire, Flowe, and the Quika Finance System.",
    url: "https://yawari.vercel.app/blog/what-i-learned-from-projects",
    type: "article",
  },
};

const TOC = [
  { id: "tutorials", label: "Tutorials vs. real constraints" },
  { id: "afghanroutes", label: "AfghanRoutes: i18n is harder than it looks" },
  { id: "kabulhire", label: "KabulHire: auth is never just auth" },
  { id: "flowe", label: "Flowe: animation has a maintenance cost" },
  { id: "quika", label: "Quika Finance: real business logic is messy" },
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

export default function LearnedFromProjectsPost() {
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
              <span className="text-gray-600 dark:text-gray-400">What I Learned from Building Real Projects</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">Projects</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">4 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              What I Learned from<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">Building Real Projects</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              Why project-based learning beats tutorials every time — and the specific
              lessons I took from AfghanRoutes, KabulHire, Flowe, and the Quika Finance
              System.
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

              <H2 id="tutorials">Tutorials vs. real constraints</H2>
              <P>
                A tutorial gives you a problem that's already been solved and shows you the
                solution. A real project gives you a client, a deadline, and a problem nobody's
                written a blog post about yet. The gap between those two experiences is where
                actual skill gets built — and it's the reason I'd tell any developer to take on
                real projects, even small or low-paid ones, far earlier than feels comfortable.
              </P>
              <P>
                Four projects in particular taught me more than any course did, each for a
                different reason.
              </P>

              <Divider />

              <H2 id="afghanroutes">AfghanRoutes: i18n is harder than it looks</H2>
              <P>
                AfghanRoutes needed multilingual support — Dari and Pashto alongside English,
                with right-to-left text direction for both. RTL isn't just "flip the text
                alignment." It changes how icons should mirror, how flex layouts need to
                reverse, and how spacing utilities behave when the whole reading direction
                inverts. I also hit a Leaflet map hydration error that only showed up in
                production, not locally — a reminder that server-side rendering mismatches can
                hide until they're live.
              </P>
              <UL items={[
                "RTL support needs to be designed in from the start, not patched on at the end.",
                "Always test map and canvas-based components specifically for hydration issues — they're common offenders.",
              ]} />

              <Divider />

              <H2 id="kabulhire">KabulHire: auth is never just auth</H2>
              <P>
                Building KabulHire's authentication with Supabase taught me that "add login"
                is never a one-step task. It's a profiles table, row-level security policies
                that actually match your access rules, a conditional layout wrapper so the
                navbar and footer don't render on auth pages, and edge cases like what happens
                when someone tries to save a job before they're logged in.
              </P>
              <P>
                Getting RLS policies wrong is also a silent failure mode — your app can look
                like it's working in testing while quietly leaking data across users if a
                policy is too permissive. I now treat writing and testing RLS policies as a
                distinct step, not an afterthought to writing the schema.
              </P>

              <Divider />

              <H2 id="flowe">Flowe: animation has a maintenance cost</H2>
              <P>
                Flowe's full Framer Motion and GSAP animation layer looks great, but it taught
                me that every animated component is also a component that's harder to debug
                later. A layout bug that's invisible in a static page becomes much harder to
                spot when elements are mid-transition. I learned to build the static version
                first, get the layout fully correct, and only then layer animation on top —
                never the other way around.
              </P>
              <Callout type="info">
                Animation should be the last 10% of a component's build, not woven in from the
                first line. It's much easier to add motion to something that already works than
                to debug a layout issue through a transition.
              </Callout>

              <Divider />

              <H2 id="quika">Quika Finance: real business logic is messy</H2>
              <P>
                Designing the Quika Finance System meant translating how an actual ISP runs —
                in Dari, gathered directly from non-technical staff — into a database schema
                with four distinct roles, AFN currency, Gregorian billing cycles, and WhatsApp
                bill delivery. Nothing about that maps cleanly onto a textbook "billing system"
                tutorial. Real businesses have exceptions, manual overrides, and historical
                quirks that any schema needs to accommodate, not fight against.
              </P>
              <P>
                The biggest lesson: spend more time than feels necessary on requirements
                gathering before writing a single migration. A schema is expensive to change
                once real data is sitting in it — far more expensive than the extra week spent
                getting the roles and relationships right up front.
              </P>
              <Callout type="success">
                Every one of these lessons came from a problem a tutorial wouldn't have shown
                me, because tutorials are built around problems someone already solved cleanly.
                Real clients aren't. That friction is exactly where the learning happens.
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
