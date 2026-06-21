import { ThemeProvider } from "next-themes";
import './globals.css'
import { Outfit, Ovo } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"], weight:["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"],
});

export const metadata = {
  metadataBase: new URL("https://yawari.vercel.app"),
  title: "Amanullah Yawari — Full-Stack Developer",
  description:
    "Full-Stack Developer from Kabul, Afghanistan — Next.js, TypeScript, Supabase, Flutter. Available for remote freelance projects.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "Afghan Developer",
    "Remote Freelance Developer",
    "TypeScript",
    "Supabase",
    "Flutter",
    "Kabul Afghanistan",
  ],
  authors: [{ name: "Amanullah Yawari", url: "https://yawari.vercel.app" }],
  creator: "Amanullah Yawari",
  openGraph: {
    title: "Amanullah Yawari — Full-Stack Developer",
    description:
      "Full-Stack Developer from Kabul, Afghanistan — Next.js, TypeScript, Supabase, Flutter. Available for remote freelance projects.",
    url: "https://yawari.vercel.app",
    siteName: "Amanullah Yawari Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanullah Yawari — Full-Stack Developer",
    description:
      "Full-Stack Developer from Kabul — Next.js, TypeScript, Supabase, Flutter.",
    creator: "@amanullah_yawari",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}