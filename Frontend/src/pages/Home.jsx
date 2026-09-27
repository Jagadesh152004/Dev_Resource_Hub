import NavBar from "../components/NavBar";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import About from "../pages/About";
import Feature from "./Feature";
import Technology from "./Technology";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-300 font-sans scroll-smooth selection:bg-sky-500/30 selection:text-sky-200">
      {/* NavBar */}
      <NavBar />

      <Element name="home">
        {/* Home section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
          {/* Decorative Background linear */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 font-medium text-sm mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Platform Live v1.0
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              <span className="block text-white mb-2">Learn. Explore.</span>
              <span className="block bg-linear-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent pb-2">
                Grow as a Developer.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-400 mx-auto mb-10 leading-relaxed">
              DevCourseHub helps developers discover, filter, and track the best
              curated YouTube programming tutorials in one organized platform.
              Stop searching. Start building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* explore page router link */}
              <Link
                to="/explore"
                className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group"
              >
                Explore Resources
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* About page scroll link */}
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
              >
                Learn More
              </ScrollLink>
            </div>
          </div>
        </section>
      </Element>

      {/* About page */}
      <Element name="about">
        <About />
      </Element>

      {/* Feature page */}
      <Element name="features">
        <Feature />
      </Element>

      {/* technology page */}
      <Element name="technologies">
        <Technology />
      </Element>

      {/* contact page */}
      <Element name="contact">
        <Contact />
      </Element>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
