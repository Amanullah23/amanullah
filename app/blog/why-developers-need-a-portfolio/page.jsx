import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Why Every Developer Needs a Portfolio — Amanullah Yawari",
  description:
    "A portfolio helps you prove your skills, present your projects, and build trust with international clients. Here's why I built mine and what changed after.",
  openGraph: {
    title: "Why Every Developer Needs a Portfolio",
    description:
      "A portfolio helps you prove your skills, present your projects, and build trust with international clients. Here's why I built mine and what changed after.",
    url: "https://yawari.vercel.app/blog/why-developers-need-a-portfolio",
    type: "article",
  },
};

const TOC = [
  { id: "resume",   label: "A resume tells, a portfolio shows" },
  { id: "clients",  label: "What clients actually look for"    },
  { id: "more",     label: "More than a project list"          },
  { id: "starting", label: "If you're starting from zero"       },
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

export default function WhyPortfolioPost() {
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
              <span className="text-gray-600 dark:text-gray-400">Why Every Developer Needs a Portfolio</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Career</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">3 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              Why Every Developer<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">Needs a Portfolio</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              A portfolio helps you prove your skills, present your projects, and build
              trust with clients who've never met you. Here's why I built mine, and what
              actually changed after.
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

              <H2 id="resume">A resume tells, a portfolio shows</H2>
              <P>
                A resume says "I know Next.js, TypeScript, and Supabase." A portfolio shows
                a working app built with them, deployed, with a live URL someone can click
                right now. For a developer, that difference matters more than almost anything
                else in how fast a client decides to trust you.
              </P>
              <P>
                This isn't a knock on resumes — mine still matters, especially for roles that
                expect one. But for freelance and remote work specifically, a portfolio does
                something a resume structurally can't: it lets a stranger verify your claims
                in under a minute, without taking your word for it.
              </P>

              <Divider />

              <H2 id="clients">What clients actually look for</H2>
              <P>
                Before I had a real portfolio, I assumed clients cared mostly about the tech
                stack list. They don't, not primarily. What I've actually seen clients respond
                to:
              </P>
              <UL items={[
                "Does the live site actually work? Broken links and console errors on your own portfolio are the fastest way to lose credibility before a conversation even starts.",
                "Does it look finished, not templated? Clients can tell the difference between a default template and something built with intention.",
                "Are the projects real? A live URL they can click beats a screenshot every time.",
                "Is there evidence of range? A tourism platform, a job portal, and a finance system says more about adaptability than five near-identical to-do apps.",
              ]} />

              <Divider />

              <H2 id="more">More than a project list</H2>
              <P>
                The portfolios that convert best aren't just project galleries — they tell a
                story about how you think. That's part of why I write here: not every client
                reads the blog, but the ones who do arrive already trusting that I understand
                what I'm building, not just that I can follow a spec.
              </P>
              <P>
                A portfolio is also the one place where you control the narrative completely.
                On Upwork or Fiverr, you're one tile among hundreds. On your own site, you get
                to explain context — why a project was built a certain way, what trade-offs you
                made, what you'd do differently next time. That's the kind of detail that turns
                a one-off gig into a longer relationship.
              </P>

              <Divider />

              <H2 id="starting">If you're starting from zero</H2>
              <P>
                You don't need twenty projects to start. You need a few real ones, deployed,
                with honest descriptions — not placeholder text promising features that aren't
                built yet. A portfolio with three working projects beats one with ten broken
                links every time.
              </P>
              <Callout type="success">
                Build something, deploy it, and put it on your portfolio before it feels
                perfect. An imperfect live project will always do more for you than a polished
                idea that's still sitting in a private repo.
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
