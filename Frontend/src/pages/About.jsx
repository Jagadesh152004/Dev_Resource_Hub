import { ChevronRight, Terminal } from "lucide-react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      {/* About Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-sky-500 font-semibold tracking-wide text-lg">
                About CourseHub
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Curating the Best Developer Content on the Web
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                CourseHub is a learning resource platform designed specifically
                to help students and software developers find highly useful
                programming tutorials without having to manually sift through
                thousands of videos online.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We organize YouTube's best educational content by technology,
                extracting crucial metadata like topics covered, duration,
                author, and channel information so you can find exactly what you
                need to level up your skills.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  "No more getting lost in YouTube recommendations",
                  "Detailed breakdown of topics inside each video",
                  "Filter directly by the technology stack you use",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-sky-500/20 p-1 rounded-full">
                      <ChevronRight className="w-4 h-4 text-sky-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Visual Box */}
            <div className="relative rounded-2xl bg-linear-to-br from-gray-800 to-gray-950 p-1">
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 to-indigo-500/20 blur-xl z-0"></div>
              <div className="relative z-10 bg-gray-900 border border-gray-800 rounded-xl p-8 h-full flex flex-col justify-center">
                <Terminal className="w-12 h-12 text-sky-400 mb-6" />
                <div className="space-y-3 font-mono text-sm text-gray-400">
                  <p>
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-white">platform</span> ={" "}
                    <span className="text-sky-300">"CourseHub"</span>;
                  </p>
                  <p>
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-white">mission</span> ={" "}
                    <span className="text-sky-300">"Empower Developers"</span>;
                  </p>
                  <p className="pt-4">
                    <span className="text-gray-500">
                      // We handle the searching.
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">
                      // You handle the learning.
                    </span>
                  </p>
                  <p className="pt-2">
                    <span className="text-indigo-400">await</span> platform.
                    <span className="text-sky-200">startLearning</span>();
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
