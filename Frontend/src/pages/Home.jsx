import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Code, 
  Menu, 
  X, 
  ChevronRight, 
  PlayCircle, 
  Terminal,
  Send,
  PlayCircleIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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


    const handleExploreResources = () => {

        alert(
            "In a full app, this would navigate to the resources page!"
        );

    };

return (

    <div className="bg-gray-950 min-h-screen text-gray-300 font-sans scroll-smooth selection:bg-sky-500/30 selection:text-sky-200" 
    style={{ scrollBehavior: 'smooth' }}>
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                DevCourse Hub
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-sky-400 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-sky-400 font-medium transition-colors">About</a>
              <a href="#features" className="text-gray-300 hover:text-sky-400 font-medium transition-colors">Features</a>
              <a href="#technologies" className="text-gray-300 hover:text-sky-400 font-medium transition-colors">Technologies</a>
              <Link to="/admin" className="text-gray-300 hover:text-sky-400 font-medium transition-colors" >Admin</Link>
              <a href="#contact" className="text-gray-300 hover:text-sky-400 font-medium transition-colors">Contact</a>
              <button 
                onClick={handleExploreResources}
                className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
              >
                Explore Resources
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">About</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Features</a>
            <a href="#technologies" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Technologies</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Contact</a>
            <button 
              onClick={() => { handleExploreResources(); setIsMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-3 rounded-md text-base font-semibold text-sky-400 hover:bg-gray-800"
            >
              Explore Resources &rarr;
            </button>
          </div>
        )}
      </nav>

      {}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
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
            DevCourseHub helps developers discover, filter, and track the best curated YouTube programming tutorials in one organized platform. Stop searching. Start building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleExploreResources}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group"
            >
              Explore Resources
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#about"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-24 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-sky-500 font-semibold tracking-wide text-lg">About CourseHub</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Curating the Best Developer Content on the Web
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                CourseHub is a learning resource platform designed specifically to help students and software developers find highly useful programming tutorials without having to manually sift through thousands of videos online.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We organize YouTube's best educational content by technology, extracting crucial metadata like topics covered, duration, author, and channel information so you can find exactly what you need to level up your skills.
              </p>
              
              <ul className="space-y-4 pt-4">
                {['No more getting lost in YouTube recommendations', 'Detailed breakdown of topics inside each video', 'Filter directly by the technology stack you use'].map((item, i) => (
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
                  <p><span className="text-indigo-400">const</span> <span className="text-white">platform</span> = <span className="text-sky-300">"CourseHub"</span>;</p>
                  <p><span className="text-indigo-400">const</span> <span className="text-white">mission</span> = <span className="text-sky-300">"Empower Developers"</span>;</p>
                  <p className="pt-4"><span className="text-gray-500">// We handle the searching.</span></p>
                  <p><span className="text-gray-500">// You handle the learning.</span></p>
                  <p className="pt-2"><span className="text-indigo-400">await</span> platform.<span className="text-sky-200">startLearning</span>();</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="features" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sky-500 font-semibold tracking-wide uppercase text-sm mb-2">Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Everything you need to learn efficiently</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                <BookOpen className="w-7 h-7 text-sky-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Curated Content</h4>
              <p className="text-gray-400">Hand-picked, high-quality learning resources filtering out the noise.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <Code className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Tech Stacks</h4>
              <p className="text-gray-400">Organized strictly by technology so you can focus on exactly what you want to learn.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Search className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Deep Search</h4>
              <p className="text-gray-400">Search by title, author, channel name, or scan through specific topics covered.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <PlayCircleIcon className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Direct Access</h4>
              <p className="text-gray-400">Get all the details upfront, then click straight through to the official YouTube video.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="technologies" className="py-24 bg-gray-900 relative overflow-hidden">
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
                  onClick={handleExploreResources}
                  className="bg-gray-950 border border-gray-800 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] text-gray-300 hover:text-sky-400 rounded-full px-6 py-3 font-medium transition-all duration-300"
                >
                  {tech.name}
                </button>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
             <button 
                onClick={handleExploreResources}
                className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-2 mx-auto group"
              >
                View all technologies and resources
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-500 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h3>
            <p className="mt-4 text-gray-400 text-lg">Have a suggestion for a resource or a feature? Let us know!</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent successfully! (Frontend validation only)');
              e.target.reset();
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-500/20 flex justify-center items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <PlayCircle className="w-6 h-6 text-sky-500" />
                <span className="font-bold text-xl text-white">DecResource Hub</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Discover curated, high-quality learning resources for your software developer journey. Organized, searchable, and always free.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-sky-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-sky-400 transition-colors">About</a></li>
                <li><button onClick={handleExploreResources} className="text-gray-400 hover:text-sky-400 transition-colors">Resources</button></li>
                <li><a href="#technologies" className="text-gray-400 hover:text-sky-400 transition-colors">Technologies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} DevResource Hub. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built for Developers.
            </p>
          </div>
        </div>
      </footer>

    </div>
    
  )
}

export default Home