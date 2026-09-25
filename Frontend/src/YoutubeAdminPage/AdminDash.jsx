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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const navigate = useNavigate();
  const [resource, setResource] = useState([]);
  const [userSearch, setSearch] = useState("");
  const [selectedLanguage,setSelectedLanguage] = useState("All");

  useEffect(() => {

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
      alert(error.message);
    }

  }
    fetchResources();
  }, []);

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

  const filterData = resource.filter( (data) => {

   const matchTechnology = data.technology?.name?.toLowerCase().includes(userSearch.toLowerCase());
   const matchLanguage = selectedLanguage === "All" || data.Language === selectedLanguage;
  
   return matchTechnology && matchLanguage;

  })

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

      <div className="ml-5 mt-10 flex justify-start items-center gap-2 w-3xl">
          {/* Search */}
          <div className="flex justify-center items-center gap-2 w-80 p-2">
            <label htmlFor="Search" className="text-white font-mono">
              Search :
            </label>
            <input
              id="search"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by technology..."
              className="w-52 text-white text-sm px-3 py-1 border border-cyan-400 rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all outline-none"
            />
          </div>

          {/* select by language */}
          <div className="flex justify-start items-center gap-2 w-96 p-2">
            <label htmlFor="language" className="text-white font-mono">Select Language : </label>
          <select 
            id="language"
            value={selectedLanguage}
            onChange={ (e) => setSelectedLanguage(e.target.value) }
            className="w-40 text-gray-400 text-sm px-3 py-1 border border-cyan-400 rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all outline-none"
            >
              <option value="All" className="bg-black text-white">All</option>
              <option value="English" className="bg-black text-white ">English</option>
              <option value="Tamil" className="bg-black text-white ">Tamil</option>
              <option value="Hindi" className="bg-black text-white ">Hindi</option>

          </select>
          </div>
      </div>


          {/* List from Database */}
          <div className="mt-10 flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center gap-5 p-5">
              {filterData.map((item) => (
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
  );
};

export default AdminDash;
