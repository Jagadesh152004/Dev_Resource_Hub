import { Element } from "react-scroll"
import { ChevronRight } from "lucide-react"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Technology = () => {

    const [technologies, setTechnologies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchTechnologies = async () => {
            try {

                const response = await fetch(
                    "http://localhost:8080/course/technology"
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                setTechnologies(data);

            } catch (error) {

                console.log(
                    "Backend fetch failed:",
                    error
                );

            } finally {

                setIsLoading(false);

            }
        };

        fetchTechnologies();

    }, []);

  return (
    <Element name="technologies">
        <section className="py-24 bg-gray-900 relative overflow-hidden min-h-screen w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Master Modern Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find resources specific to your current stack or the stack you want to learn next.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  className="bg-gray-950 border border-gray-800 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] text-gray-300 hover:text-sky-400 rounded-full px-6 py-3 font-medium transition-all duration-300"
                >
                  {tech.name}
                </button>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
             <Link to="/explore" 
                className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-2 mx-auto group"
              >
                View all technologies and resources
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Technology