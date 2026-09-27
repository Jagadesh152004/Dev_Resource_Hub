import { useEffect, useState } from "react";
import HorizontalNavbar from "../components/HorizontalNavbar";
import "../components/Scroll.css";
import {
  Calendar,
  Clock,
  Eye,
  LanguagesIcon,
  Pencil,
  Trash2,
  Filter,
  Search
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const language = ["English", "Tamil", "Hindi"];
const AdminDash = () => {
  const navigate = useNavigate();
  const [resources, setResource] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedLang, setSelectedLang] = useState("All");
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await fetch("http://localhost:8080/resource/youtube");

        if (response.ok) {
          const data = await response.json();
          setResource(data);
        } else {
          throw new Error("Error occur due to " + response.status);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    fetchResources();
  }, []);

    useEffect(() => {
    async function fetchTechnologies() {
      try {
        const response = await fetch("http://localhost:8080/course/technology");

        if (response.ok) {
          const data = await response.json();
          setTechnologies(data);
        } else {
          throw new Error("Error occur due to " + response.status);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTechnologies();
  });

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "m";
    }

    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k";
    }

    return views;
  };

  const formatDate = (date) => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/resource/youtube/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete resource");
        }

        setResource((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // filter the resources by search and language

  const filteredResources = resources.filter(
    (resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.authorName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTech =
        selectedTech === "All" || resource.technology.name === selectedTech;
      const matchesLang =
        selectedLang === "All" || resource.Language === selectedLang;

      return matchesSearch && matchesTech && matchesLang;
    },
    [searchTerm, selectedTech, selectedLang],
  );

  return (
    <div className="w-full h-screen overflow-hidden bg-linear-to-r from-gray-950 to-gray-900">
      <div className="flex h-screen">
        <HorizontalNavbar />

        {/* Main Content */}
        <div className="ml-80 h-screen w-full overflow-hidden flex flex-col">
          <h1 className="font-bold text-4xl text-center mt-10 bg-linear-to-r from-sky-200 to-sky-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>

          <div className="flex flex-col gap-2 mt-15 ml-10">
            <h1 className="text-white font-bold text-3xl">
              Manage Playlist...
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Organize and update your Youtube tutorial collections.
            </p>
          </div>

          {/* Search and Select filter */}

          <div className="flex flex-col md:flex-row gap-4 items-center ml-10 mt-5" >
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
                  <option value="All" className="bg-gray-900 text-gray-400">
                    Technology
                  </option>

                  {technologies.map((tech) => (
                    <option key={tech.id} value={tech.name}>
                      {tech.name}
                    </option>
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
                  <option value="All" className="text-gray-500">
                    Language
                  </option>
                  {language.map((lang, index) => (
                    <option key={index} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* List from Database */}
            <div className="mt-10 flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center gap-5 p-5">
                {filteredResources.map((item) => (
                  <div
                    key={item.id}
                    className="border border-sky-400 rounded-t-3xl rounded-b-3xl flex flex-col bg-linear-to-r from-blue-800 to-indigo-900"
                  >
                    <iframe
                      width="600"
                      height="100"
                      src={item.videoUrl}
                      title={item.title}
                      allowFullScreen
                      className="rounded-t-3xl object-cover"
                    ></iframe>

                    <div className=" p-2 flex flex-col">
                      <div className="flex flex-col gap-2 border-b border-b-gray-400 p-2">
                        <h2 className="text-white text-xl font-bold ml-2">
                          {item.title}
                        </h2>

                        <p className="text-gray-400 ml-2">{item.channelName}</p>
                      </div>

                      <div className="flex justify-between mt-2 items-center p-2">
                        <div className="flex gap-2">
                          <LanguagesIcon className="text-orange-400 w-6 h-6" />
                          <h1 className="text-white">{item.Language}</h1>
                        </div>

                        <div className="flex gap-1">
                          <Eye className="text-white" />
                          <span className="text-zinc-300">
                            {formatViews(item.views)}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-2 mb-2">
                        <div className="flex gap-2">
                          <Calendar className="text-cyan-400" />
                          <span className="text-gray-300">
                            {formatDate(item.upload)}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Clock className="text-yellow-400" />
                          <span className="text-gray-300">{item.duration}</span>
                        </div>
                      </div>

                      {/* Edit and Delete Button */}

                      <div className="flex justify-between items-center p-2">
                        <span className="border-2 rounded-lg h-8 w-22 text-center border-green-400 text-green-400 ">
                          {item.status}
                        </span>

                        <div className="flex gap-4">
                          <button
                            onClick={() =>
                              navigate(`/admin/youtube/edit/${item.id}`)
                            }
                            className="group flex items-center gap-2 text-white py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 hover:rounded-lg duration-300"
                          >
                            <Pencil className="text-black group-hover:text-white" />
                          </button>

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="group flex items-center gap-2 font-semibold text-red-600 border-2 border-red-600 py-2 px-3 rounded-xl hover:bg-red-600 hover:text-white hover:border-2 duration-300"
                          >
                            <Trash2 className="text-red-600 group-hover:text-white duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
