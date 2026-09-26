import { useState, useEffect } from 'react';
import { 
  PlayCircle, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Eye, 
  Globe, 
  User, 
  CheckCircle,
  ChevronRight,
  MonitorPlay
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const YoutubeDetails = () => {

  const {id} = useParams();

  const [resource, setResource] = useState({});
  const [loading, setLoading] = useState(true);

useEffect(() => {

  async function fetchData(){
    
    try{
      const response = await fetch(`http://localhost:8080/resource/youtube/${id}`)

      if(response.ok){
        
        const data = await response.json();
        setResource(data);
        setLoading(false);

      }else{
        throw new Error("Error occur due to " + response.status);
      }
    }catch(error){
      console.error(error.message);
      setLoading(false);
    }

  }
  
  fetchData();
});

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-500"></div>
      </div>
    );
  }

  if (!resource) return null;

  // Helper to format large numbers (e.g., 4600000 -> 4.6M)
  const formatViews = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  // Helper to format date (e.g., 2023-01-23 -> Jan 23, 2023)
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Clean and split the comma-separated topics
const parseTopics = (topicsString) => {
  const cleanedString = topicsString.replace(/&amp;/g, '&');

  return cleanedString
    .split(/,(?![^(]*\))/)
    .map(topic => topic.trim());
};

  const topicsList = parseTopics(resource.topicsCovered);

  // Extract actual YouTube watch URL from embed URL for the external button
  const externalWatchUrl = resource.videoUrl.replace('/embed/', '/watch?v=');

  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-sky-500/30 pb-20">
      
      {/* Optional Navbar Placeholder */}
      <nav className="bg-gray-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <MonitorPlay className="text-sky-500" />
            DevResource<span className="text-sky-500">Hub</span>
          </div>
          {/* Breadcrumbs */}
          <div className="hidden sm:flex items-center text-sm text-gray-400 gap-2">
            <span className="hover:text-white cursor-pointer transition-colors">Explore</span>
            <ChevronRight size={14} />
            <span className="hover:text-white cursor-pointer transition-colors">{resource.technology?.name}</span>
            <ChevronRight size={14} />
            <span className="text-sky-400 truncate max-w-50">{resource.title}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        
        {/* Header Section */}
        <div className="mb-8">
          {/* Tech name and back to explore technology */}
          <div className="flex justify-between">
            <div className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-lg text-sm font-semibold mb-4">
              {resource.technology?.name || "Technology"}
            </div>
          <Link 
          to="/explore"
          className="inline-block px-3 py-1 bg-sky-500/10 border border-yellow-300 text-yellow-300 rounded-xl text-sm font-semibold mb-4"
          >Back</Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            {resource.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column (Video & Topics) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Video Embed Player Container */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative group">
              <iframe
                className="w-full h-full absolute inset-0"
                src={resource.videoUrl}
                title={resource.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Topics Covered Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {topicsList.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300 leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar Metadata & Actions) */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24">
              
              {/* Primary Action Button */}
              <a 
                href={externalWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/25 mb-8"
              >
                <PlayCircle size={24} />
                Start to Listen / Watch
                <ExternalLink size={18} className="ml-1 opacity-70" />
              </a>

              <h3 className=" font-semibold text-white mb-5 uppercase tracking-wider text-sm">Resource Details</h3>
              
              {/* Metadata Grid */}
              <div className="flex flex-col gap-5">
                
                <div className="flex items-center gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-indigo-400">
                    <User size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">Creator</p>
                    <p className="text-white font-medium">{resource.channelName}</p>
                    <p className="text-gray-500 text-sm">{resource.authorName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-emerald-400">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">Duration</p>
                    <p className="text-white font-medium">{resource.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-sky-400">
                    <Eye size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">Views</p>
                    <p className="text-white font-medium">{formatViews(resource.views)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-purple-400">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">Uploaded</p>
                    <p className="text-white font-medium">{formatDate(resource.upload)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-pink-400">
                    <Globe size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">Language</p>
                    <p className="text-white font-medium">{resource.Language || resource.language}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default YoutubeDetails;