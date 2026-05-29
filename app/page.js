"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
//import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import CertificatesGallery from "./components/CertificatesGallery";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      <Work />
      {/*<Certificate />*/}
      <CertificatesGallery/>
      <Contact />
      <Footer />
    </>
  );
}
