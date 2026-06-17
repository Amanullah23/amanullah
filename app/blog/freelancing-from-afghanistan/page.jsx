import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Freelancing Internationally from Afghanistan — Amanullah Yawari",
  description:
    "How I built a remote freelance career on Upwork and Fiverr from Kabul — the real challenges, the wins, and what I'd tell any Afghan developer starting out.",
  openGraph: {
    title: "Freelancing Internationally from Afghanistan",
    description:
      "How I built a remote freelance career on Upwork and Fiverr from Kabul — the real challenges, the wins, and what I'd tell any Afghan developer starting out.",
    url: "https://yawari.vercel.app/blog/freelancing-from-afghanistan",
    type: "article",
  },
};

const TOC = [
  { id: "reality",   label: "The reality nobody talks about"     },
  { id: "portfolio", label: "Why your portfolio is your passport" },
  { id: "platforms", label: "Upwork vs Fiverr"                   },
  { id: "trust",     label: "Building trust across a cultural gap"},
  { id: "tech",      label: "The tech stack that gets you hired"  },
  { id: "advice",    label: "What I'd tell myself starting out"   },
];

function Callout({ children, type = "info" }) {
  const styles = {
    info:    "bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-950/60 dark:border-blue-700 dark:text-blue-200",
    success: "bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-200",
  };
  return (
    <div className={`my-6 px-5 py-4 rounded-xl border-l-4 text-sm leading-relaxed font-medium ${styles[type]}`}>
      {children}
    </div>
  );
}

function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4 leading-snug scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function P({ children }) {
  return (
    <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-[1.85] mb-5">
      {children}
    </p>
  );
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

function Divider() {
  return <div className="my-8 border-t border-gray-100 dark:border-gray-800" />;
}

export default function FreelancingFromAfghanistanPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">

        {/* ── Hero ── */}
        <section className="w-full px-[8%] pt-28 pb-12 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-8 font-Ovo">
              <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-400">Freelancing from Afghanistan</span>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                Career
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">June 2026</span>
              <span className="text-gray-200 dark:text-gray-700">·</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">5 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
              Freelancing Internationally<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">
                from Afghanistan
              </span>
            </h1>

            {/* Lead */}
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              How I'm building a remote freelance career on Upwork and Fiverr from
              Kabul — the real challenges, the wins, and what I'd tell any Afghan
              developer who wants to work with international clients.
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="w-9 h-9 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-xs font-bold shrink-0">
                AY
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">Amanullah Yawari</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Full Stack Developer · Kabul, Afghanistan</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="w-full px-[8%] py-14">
          <div className="max-w-3xl lg:max-w-none lg:grid lg:grid-cols-[1fr_220px] lg:gap-16 items-start">

            {/* Article */}
            <article className="max-w-3xl">

              <H2 id="reality">The reality nobody talks about</H2>
              <P>
                When I tell people I work with clients in the US, Germany, and Nigeria from
                Kabul, the first reaction is surprise. The second is a list of reasons it
                shouldn't be possible — payment restrictions, timezone gaps, unreliable
                internet, lack of trust.
              </P>
              <P>
                They're not wrong about the challenges. But they miss the point. The internet
                doesn't care where you are. A Next.js app deployed to Vercel performs the
                same whether it was built in San Francisco or Kabul. That's the opportunity.
              </P>
              <P>
                What nobody tells you is that the barrier isn't technical — it's presentation.
                International clients don't know Kabul. They don't know what Afghan developers
                are capable of. Your job, before you write a single line of code for them,
                is to make them feel safe hiring you. That starts long before the first message.
              </P>

              <Divider />

              <H2 id="portfolio">Why your portfolio is your passport</H2>
              <P>
                In countries with established freelance markets, developers can lean on
                reputation networks — referrals, LinkedIn connections, alumni communities.
                In Afghanistan, you're starting with none of that goodwill internationally.
                Your portfolio website is the first thing a client sees, and it needs to do
                serious work.
              </P>
              <P>
                When I rebuilt my portfolio at yawari.vercel.app, I treated it as a product,
                not a side project. Every section had a job:
              </P>
              <UL items={[
                "The hero — establish credibility in 5 seconds (name, role, location, availability)",
                "The work section — show real, live projects with screenshots and links",
                "The certificates — prove that you invest in your own growth",
                "The experience timeline — show that real organizations trusted you",
                "The contact section — make it trivially easy to reach you",
              ]} />
              <P>
                The single most important change I made was replacing placeholder projects
                with real ones — AfghanRoutes, KabulHire, Flowe, NOVA INC., the Quika
                Finance System. These are live URLs a client can click and use. That
                credibility is worth more than any certificate.
              </P>
              <Callout>
                A portfolio with 3 real live projects beats a portfolio with 10 placeholder
                screenshots every time. Ship something. Anything. Then link to it.
              </Callout>

              <Divider />

              <H2 id="platforms">Upwork vs Fiverr — what actually works</H2>
              <P>
                I'm active on both, and they attract very different kinds of clients.
              </P>
              <P>
                Fiverr is transactional. Clients come with a defined task — "build me a
                landing page", "fix this bug", "convert this design to Next.js". The
                advantage is speed: no proposals, no lengthy negotiation. The disadvantage
                is that you're competing on price. Your gig description and response time
                matter more than your code quality at the discovery stage.
              </P>
              <P>
                Upwork is relational. Clients post jobs, you write proposals, they interview
                you. The barrier is higher but the projects are larger and the relationships
                last longer. A single good Upwork client can become months of consistent
                work. The proposal is everything — I treat each one like a short cover letter
                that proves I read the brief, understand the problem, and have done something
                similar before.
              </P>
              <P>
                My honest advice: start on Fiverr to build reviews, then use those reviews
                as social proof on Upwork proposals. The first 5 reviews are the hardest.
                After that, momentum builds.
              </P>

              <Divider />

              <H2 id="trust">Building trust across a cultural gap</H2>
              <P>
                The hardest part of international freelancing from Afghanistan isn't the
                technical work. It's the trust gap. Clients don't know you, don't know your
                country's tech scene, and have probably never hired anyone from Central Asia.
                You need to close that gap proactively.
              </P>
              <P>A few things that have helped me:</P>
              <UL items={[
                "Over-communicate early. In the first week, send daily updates even if nothing major changed. A simple 'I've completed the auth flow, here's a Loom walkthrough' message builds confidence faster than anything else.",
                "Show your work in progress. Deploy to a preview URL on day one. Let the client see something real as early as possible. Vercel preview deployments are perfect for this.",
                "Be specific about timelines. Don't say 'I'll finish this soon.' Say 'I'll have the dashboard ready by Thursday at 6pm UTC.' Then deliver it Wednesday. Under-promise, over-deliver.",
                "Timezone as an advantage. Kabul is UTC+4:30. When US clients wake up, they have work waiting for them. Async progress feels like magic to clients used to waiting.",
              ]} />

              <Divider />

              <H2 id="tech">The tech stack that gets you hired</H2>
              <P>
                International clients want developers who can work on their existing codebase
                or build something they can maintain after you leave. That means being strong
                in the dominant stack, not the most interesting one.
              </P>
              <P>In 2026, that stack is:</P>
              <UL items={[
                "Next.js — the default for React projects. If you know it well, you can work on almost any modern web project.",
                "TypeScript — non-negotiable for serious clients. Untyped JavaScript signals junior work.",
                "Tailwind CSS — fast to write, easy to hand off. Clients love it because the output is readable.",
                "Supabase or Firebase — managed backend means faster delivery and less DevOps for the client.",
                "Vercel — one-click deploys, preview URLs, great DX. Makes you look professional from day one.",
              ]} />
              <P>
                I'd also add: know how to read and contribute to an existing codebase. Most
                freelance work isn't greenfield — it's "here's our repo, add this feature."
                Git discipline, clear commits, and the ability to understand someone else's
                architecture are underrated skills that clients notice immediately.
              </P>

              <Divider />

              <H2 id="advice">What I'd tell myself starting out</H2>
              <P>
                If I could go back and give myself one piece of advice before starting
                international freelancing from Kabul, it would be this:
              </P>
              <P>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  Ship real things before you try to sell anything.
                </strong>
              </P>
              <P>
                I spent too long learning before building. The moment I started deploying
                real projects — even imperfect ones — my confidence changed, my portfolio
                changed, and the quality of my conversations with clients changed.
                AfghanRoutes isn't a perfect app. KabulHire has rough edges. But they're
                live, they work, and clients can see I can take something from idea to
                production.
              </P>
              <P>
                The other thing I'd tell myself: don't hide where you're from. I used to
                worry that "Kabul, Afghanistan" in my profile would cost me jobs. The
                opposite has been true. Clients who see it and still reach out are serious —
                they've already decided location doesn't matter. Be proud of where you come
                from. Let your output speak.
              </P>
              <Callout type="success">
                The internet is the great equalizer. A developer in Kabul with a strong
                portfolio, clear communication, and real shipped projects can compete with
                anyone, anywhere. Location is context — not a ceiling.
              </Callout>

              {/* Footer nav */}
              <div className="mt-14 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-Ovo"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to blog
                </Link>
                <Link
                  href="/#contact"
                  className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full
                    bg-black dark:bg-white text-white dark:text-black
                    hover:opacity-80 transition-all duration-300 font-Ovo"
                >
                  Work with me →
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block sticky top-28 self-start">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-4">
                On this page
              </p>
              <nav className="flex flex-col gap-0.5">
                {TOC.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white
                      py-1.5 pl-3 border-l-2 border-gray-100 dark:border-gray-800
                      hover:border-gray-400 dark:hover:border-gray-500
                      transition-all duration-200"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Sidebar CTA */}
              <div className="mt-8 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs font-medium text-gray-800 dark:text-white mb-1">
                  Available for projects
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  Full-stack web development, mobile apps, and custom systems.
                </p>
                <Link
                  href="/#contact"
                  className="block text-center text-xs font-medium py-2 rounded-lg
                    bg-black dark:bg-white text-white dark:text-black
                    hover:opacity-80 transition-opacity font-Ovo"
                >
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