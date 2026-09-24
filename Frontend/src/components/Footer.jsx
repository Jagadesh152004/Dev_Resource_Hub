import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <PlayCircle className="w-6 h-6 text-sky-500" />
                <span className="font-bold text-xl text-white">
                  DecResource Hub
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Discover curated, high-quality learning resources for your
                software developer journey. Organized, searchable, and always
                free.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    to="technologies"
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    Technologies
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} DevResource Hub. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm">Built for Developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
