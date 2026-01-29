import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function MobileAppsPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10">
            Flutter & Mobile App Development
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            I build modern, secure, and high-performance mobile applications
            using Flutter for Android and iOS platforms.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCard value="10+" label="Apps Built" />
          <StatCard value="2+" label="Years Experience" />
          <StatCard value="100%" label="Client Satisfaction" />
          <StatCard value="Cross-Platform" label="Android & iOS" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies & Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Flutter",
              "Dart",
              "Firebase",
              "REST APIs",
              "Google Maps",
              "Authentication",
              "State Management",
              "Push Notifications",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 rounded-2xl shadow-sm p-6 text-center font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mobile App Previews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <MobileImage src="/app1.png" />
          <MobileImage src="/app2.png" />
          <MobileImage src="/app3.png" />
        </div>

        <p className="text-center text-gray-500 mt-6">
          Real project screenshots (replace with your own apps)
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Can Build For You
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Business Apps"
              description="Apps for managing customers, payments, orders, and reports."
            />
            <ServiceCard
              title="E-Commerce Apps"
              description="Product listing, cart, checkout, and order tracking systems."
            />
            <ServiceCard
              title="Custom Mobile Solutions"
              description="Tailored mobile applications designed for your unique needs."
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <ProcessStep step="1" title="Planning" />
          <ProcessStep step="2" title="UI/UX Design" />
          <ProcessStep step="3" title="Development" />
          <ProcessStep step="4" title="Testing & Launch" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Juice Ordering App"
              description="Flutter app with Firebase authentication, cart, and real-time orders."
            />
            <ProjectCard
              title="Business Management App"
              description="Mobile solution for tracking customers, payments, and reports."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-300 text-black">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let’s turn your idea into a professional mobile application.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-xl font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
  
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <p className="text-3xl font-bold text-orange-500">{value}</p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <span className="inline-block text-orange-500 font-semibold">
        Flutter · Firebase
      </span>
    </div>
  );
}

function ProcessStep({ step, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="text-3xl font-bold text-orange-500 mb-2">{step}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function MobileImage({ src }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex justify-center">
      <Image
        src={src}
        alt="Mobile App"
        width={250}
        height={500}
        className="rounded-xl"
      />
    </div>
  );
}

