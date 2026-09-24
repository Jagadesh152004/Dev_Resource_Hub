import { Element } from "react-scroll"
import { Send } from "lucide-react";


const Contact = () => {
  return (
    <Element name="contact">

      <section className="py-24 bg-gray-950 min-h-screen w-full flex items-center">
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

    </Element>
  )
}

export default Contact