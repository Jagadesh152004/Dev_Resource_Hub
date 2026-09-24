import { Element } from "react-scroll"
import { BookOpen,Code,Search,PlayCircleIcon } from "lucide-react"

const Feature = () => {
  return (
    <Element name="features">
        <section id="features" className="py-24 bg-gray-950 min-h-screen w-full flex items-center">
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
    </Element>
  )
}

export default Feature