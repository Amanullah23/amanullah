import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "My Favorite Tools for Web Development in 2026 — Amanullah Yawari",
  description:
    "The tools I use daily for coding, designing, debugging, and deploying — from VS Code and PowerShell to Supabase, Prisma, Figma, and Vercel.",
  openGraph: {
    title: "My Favorite Tools for Web Development in 2026",
    description:
      "The tools I use daily for coding, designing, debugging, and deploying — from VS Code and PowerShell to Supabase, Prisma, Figma, and Vercel.",
    url: "https://yawari.vercel.app/blog/my-favorite-web-dev-tools",
    type: "article",
  },
};

const TOC = [
  { id: "editor",   label: "Editor & terminal"      },
  { id: "backend",  label: "Backend & database"     },
  { id: "design",   label: "Design & animation"     },
  { id: "deploy",   label: "Deployment"             },
  { id: "extras",   label: "The smaller tools that add up" },
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

export default function FavoriteToolsPost() {
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
              <span className="text-gray-600 dark:text-gray-400">My Favorite Tools for Web Development</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">Tools</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">5 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              My Favorite Tools<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">for Web Development</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              The tools I actually use every day for coding, designing, debugging, and
              deploying — not an exhaustive list, just what's still in my workflow after
              trying a lot of alternatives.
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

              <H2 id="editor">Editor & terminal</H2>
              <P>
                VS Code is still my daily driver — I've tried a couple of alternatives, but
                the extension ecosystem and the integrated terminal keep pulling me back. I
                work on Windows, so PowerShell is my default terminal inside VS Code rather
                than WSL; for the Next.js and Node-based projects I build, it's never been a
                meaningful limitation.
              </P>
              <UL items={[
                "GitLens — seeing blame and history inline saves constant context-switching to the terminal.",
                "Tailwind CSS IntelliSense — autocomplete and hover previews for utility classes, which matters a lot once a project has hundreds of them.",
                "Prisma's official extension — schema syntax highlighting and formatting for .prisma files.",
              ]} />

              <Divider />

              <H2 id="backend">Backend & database</H2>
              <P>
                Supabase and Prisma cover almost everything I need on the backend side. Supabase
                gives me Postgres, auth, and storage without standing up infrastructure myself —
                genuinely useful when I'm the only developer on a project and need to move fast.
                Prisma sits on top as the ORM, giving me type-safe queries and migrations that
                stay readable as a schema grows.
              </P>
              <P>
                For projects with heavier custom logic — like KarJo's backend — I reach for
                plain Node.js or Python with FastAPI instead, depending on what the rest of the
                system is already written in.
              </P>

              <Divider />

              <H2 id="design">Design & animation</H2>
              <P>
                Figma for any layout that needs to be agreed on before code gets written —
                client sign-off is much faster when they can see and comment on a design
                directly rather than describing changes over chat. On the build side, Framer
                Motion handles almost all of my animation needs inside React; for anything tied
                to scroll position specifically, GSAP's ScrollTrigger is the one I reach for
                instead — Flowe's landing page uses it for the scroll-driven reveals.
              </P>

              <Divider />

              <H2 id="deploy">Deployment</H2>
              <P>
                Vercel, almost without exception, for anything Next.js. Git-connected deploys
                mean every push to main goes live automatically, and preview URLs on pull
                requests make client review painless — I can send a working link instead of
                asking someone to imagine what a change will look like.
              </P>
              <Callout type="info">
                One thing I learned the hard way: "connected to Git" doesn't always mean "auto-deploys
                are actually firing." It's worth checking your deployment dashboard occasionally,
                not just assuming every push went live.
              </Callout>

              <Divider />

              <H2 id="extras">The smaller tools that add up</H2>
              <UL items={[
                "Git, obviously — but specifically, writing commit messages that explain why, not just what changed. Future me always thanks present me for this.",
                "Postman or Thunder Client for testing API routes before wiring them into the frontend.",
                "Lighthouse in Chrome DevTools — a quick performance and accessibility check before calling any page done.",
                "An AI coding assistant for the repetitive parts — boilerplate, first-draft components, catching the kind of small inconsistency bugs that are easy to miss when you're moving fast.",
              ]} />
              <P>
                None of these tools matter as much as just shipping consistently. But the right
                ones remove enough friction that shipping consistently actually feels possible.
              </P>

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
