import {  ArrowRight, PlayCircle } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";


const NavBar = () => {
  return (
    // Navbar
    <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

        {/* Logo */}
        <div
            className="shrink-0 flex items-center gap-2"
        >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <PlayCircle className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              DevCourse Hub
            </span>
          </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 "> 

            <RouterLink to="/" 
              className="text-black hover:text-red-500 font-medium transition-colors cursor-pointer flex gap-1 items-center animate-pulse duration-500   bg-yellow-400 rounded-2xl px-2 py-1"
              >
                Back 
                <ArrowRight  className="w-5 h-4"/>
            </RouterLink>
            
            {/* AdminDashBoard */}
            <RouterLink 
                to="/admin"
                className="text-gray-300 hover:text-sky-400 font-medium transition-colors duration-300" 
            >
                Admin
            </RouterLink>

            {/* Explore */}
            <RouterLink 
                to="/explore"
                className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
                Explore Resources
            </RouterLink>

            </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
