

import { useState, useEffect } from 'react';
import "../components/Scroll.css"

import { 
  Search, 
  FileText, 
  Code2, 
  Clock, 
  Eye, 
  User, 
  PlayCircle,
  Filter,
  PlayCircleIcon
} from 'lucide-react';

const language = [
  "English","Tamil","Hindi"
]

 const Explore = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedLang, setSelectedLang] = useState("All");
  const [resources,setResource] = useState([]);
  const [technologies,setTechnologies] = useState([]);

  useEffect( () => {
    async function fetchResources(){

      try{
        const response = await fetch("http://localhost:8080/resource/youtube")

        if(response.ok){
          const data = await response.json();
          setResource(data);
        }else{
          throw new Error("Error occur due to " + response.status);
        }

      }catch(error){
        console.log(error.message)
      }
    }

    fetchResources();
  } )

    useEffect( () => {
    async function fetchTechnologies(){

      try{
        const response = await fetch("http://localhost:8080/course/technology")

        if(response.ok){
          const data = await response.json();
          setTechnologies(data);
        }else{
          throw new Error("Error occur due to " + response.status);
        }

      }catch(error){
        console.log(error.message);
      }
    }

    fetchTechnologies();
  } )

  // Filter resources based on state
  const filteredResources = resources.filter( resource => {

      const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        resource.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.authorName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTech = selectedTech === "All" || resource.technology.name === selectedTech;
      const matchesLang = selectedLang === "All" || resource.Language === selectedLang;

      return matchesSearch && matchesTech && matchesLang;

  }, [searchTerm, selectedTech, selectedLang] );

  const formatViews = (views) => {
    if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M';
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K';
    return views;
  };

  // const formatDate = (dateString) => {
  //   const options = { year: 'numeric', month: 'short', day: 'numeric' };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950 text-gray-300 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* LEFT SIDEBAR (Desktop) / TOP NAV (Mobile) */}
      <aside className="w-full md:w-64 md:shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-gray-900/50 backdrop-blur-xl flex flex-col absolute md:relative z-20 h-auto md:h-screen">
        
        {/* Logo Area */}
        <div className="h-16 md:h-20 flex items-center px-6 border-b border-white/5">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <PlayCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              DevResource
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex md:flex-col overflow-x-auto md:overflow-visible px-4 py-4 gap-2 no-scrollbar">
          <a href="#" className="shrink-0 flex items-center gap-3 px-4 py-3 bg-sky-500/10 text-sky-400 rounded-xl font-medium border border-sky-500/20 transition-all">
            <PlayCircle className="w-5 h-5" />
            <span>YouTube Resources</span>
          </a>
          <a href="#" className="shrink-0 flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all">
            <FileText className="w-5 h-5" />
            <span>Documentation</span>
          </a>
          <a href="#" className="shrink-0 flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all">
            <Code2 className="w-5 h-5" />
            <span>Coding Platform</span>
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden pt-20 md:pt-0">
        
        {/* Header & Filters (Sticky) */}
        <header className="bg-gray-950/80 backdrop-blur-xl border-b border-white/10 px-6 py-6 z-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Explore Resources</h1>
            
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by title, channel, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Filters Container */}
              <div className="flex w-full md:w-auto gap-4">
                {/* Technology Filter */}
                <div className="relative w-1/2 md:w-48">
                  <select
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                    name="technologyId"
                    defaultValue=""
                    className="w-full appearance-none bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  >
                    <option value="All"  className="bg-gray-900 text-gray-400">
                        Select Technology
                    </option>
                    
                    {technologies.map((tech) => (
                      <option key={tech.id} value={tech.name}>{tech.name}</option>
                    ))}

                  </select>
                  <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                </div>

                {/* Language Filter */}
                <div className="relative w-1/2 md:w-48">
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="w-full appearance-none bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  >
                    <option value="All" className="text-gray-500">Language</option>
                    {language.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}

                  </select>
                  <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Grid */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            
            {filteredResources.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 border border-gray-800">
                  <Search className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No resources found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchTerm(""); setSelectedTech("All"); setSelectedLang("All"); }}
                  className="mt-6 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  /* Resource Card */
                  <div key={resource.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:border-sky-500/50 transition-all duration-300 shadow-xl group">
                    
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {resource.technology.name}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
                        {resource.Language}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-sky-400 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
                      {resource.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-400 mb-6 bg-gray-900/50 p-4 rounded-xl border border-gray-800/50">
                      <div className="flex items-center gap-2">
                        <PlayCircleIcon className="w-4 h-4 text-red-400" />
                        <span className="truncate" title={resource.channelName}>{resource.channelName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-emerald-400" />
                        <span className="truncate" title={resource.authorName}>{resource.authorName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>{formatViews(resource.views)} views</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Navigating to /resources/${resource.id}`)}
                      className="w-full py-3 bg-gray-800 hover:bg-sky-500 text-white rounded-xl font-medium transition-colors border border-gray-700 hover:border-sky-400 flex justify-center items-center gap-2"
                    >
                      View Details
                      <PlayCircle className="w-4 h-4" />
                    </button>

                  </div>
                ))}
              </div>
            )}
            
            {/* Footer space to ensure content isn't hidden behind bottom edges */}
            <div className="h-12 w-full"></div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Explore;