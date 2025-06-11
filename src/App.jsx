import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-indigo-100 to-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Optional footer */}
      <footer className="text-center py-6 bg-indigo-100 text-indigo-700 font-semibold">
        © {new Date().getFullYear()} Akash Tripathi. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
