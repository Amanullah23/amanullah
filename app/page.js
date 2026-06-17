"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      <Work />
      <Testimonials />
      <Certificate/>
      <Contact/>    
      <Footer />
    </>
  );
}
