import type { JSX } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
