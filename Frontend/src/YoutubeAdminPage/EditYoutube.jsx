import { useParams, useNavigate } from "react-router-dom";
import HorizontalNavbar from "../components/HorizontalNavbar";
import { useEffect, useState } from "react";

const EditYoutube = () => {
  const { id } = useParams();

  const [technologies, setTechnologies] = useState([]);
  const [resource, setResource] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/course/technology`)
      .then((response) => response.json())
      .then((data) => setTechnologies(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/resource/youtube/${id}`)
      .then((response) => response.json())
      .then((data) => setResource(data));
  }, [id]);

  if (!resource) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-950 text-sky-500 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  // update function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `http://localhost:8080/resource/youtube/${id}?technologyId=${formData.get("technologyId")}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        navigate("/admin");
        alert("Resource updated successfully!");
      }
    } catch (error) {
      console.error("Error updating resource:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-r from-gray-950 to-gray-900">
      <div className="flex items-start min-h-screen">
        <HorizontalNavbar />

        <div className="ml-80 min-h-screen w-full">
          <h1 className="font-bold text-4xl text-center mt-10 bg-linear-to-r from-white to-sky-500 bg-clip-text text-transparent">
            Edit Resource
          </h1>

          <div className="flex justify-center mt-20 mb-20">
            {/* Form Container with Glass morphic */}
            <form
              className="flex flex-col gap-5 w-full max-w-4xl p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl"
              onSubmit={handleSubmit}
            >
              {/* Technology */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-gray-300 font-medium w-48 shrink-0">
                  Technology :
                </label>
                <div className="flex-1">
                  <select
                    name="technologyId"
                    defaultValue={resource.technology?.id || ""}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  >
                    <option value="" disabled>
                      Select Technology
                    </option>
                    {technologies.map((technology) => (
                      <option key={technology.id} value={technology.id}>
                        {technology.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Video Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="title" className="text-gray-300 font-medium w-48 shrink-0">
                  Video Title :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter video title"
                    defaultValue={resource.title}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Video URL */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="videoUrl" className="text-gray-300 font-medium w-48 shrink-0">
                  Video URL :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="videoUrl"
                    name="videoUrl"
                    placeholder="Enter YouTube video URL"
                    defaultValue={resource.videoUrl}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Channel Name */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="channelName" className="text-gray-300 font-medium w-48 shrink-0">
                  Channel Name :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="channelName"
                    name="channelName"
                    placeholder="Enter channel name"
                    defaultValue={resource.channelName}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Author Name */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="authorName" className="text-gray-300 font-medium w-48 shrink-0">
                  Author Name :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    placeholder="Enter author name"
                    defaultValue={resource.authorName}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Language */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="language" className="text-gray-300 font-medium w-48 shrink-0">
                  Language :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="language"
                    name="language" // Changed to match your backend model convention
                    placeholder="Enter language"
                    defaultValue={resource.language || resource.Language} 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="duration" className="text-gray-300 font-medium w-48 shrink-0">
                  Duration :
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="Example: 12h 23m"
                    defaultValue={resource.duration}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Upload Date */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="upload" className="text-gray-300 font-medium w-48 shrink-0">
                  Upload Date :
                </label>
                <div className="flex-1">
                  <input
                    type="date"
                    id="upload"
                    name="upload"
                    defaultValue={resource.upload}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <label htmlFor="description" className="text-gray-300 font-medium w-48 shrink-0 mt-3">
                  Description :
                </label>
                <div className="flex-1">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter video description"
                    rows="3"
                    defaultValue={resource.description}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Topics Covered */}
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <label htmlFor="topicsCovered" className="text-gray-300 font-medium w-48 shrink-0 mt-3">
                  Topics Covered :
                </label>
                <div className="flex-1">
                  <textarea
                    id="topicsCovered"
                    name="topicsCovered"
                    placeholder="Enter topics covered"
                    rows="3"
                    defaultValue={resource.topicsCovered}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="status" className="text-gray-300 font-medium w-48 shrink-0">
                  Status :
                </label>
                <div className="flex-1">
                  <select
                    id="status"
                    name="status"
                    defaultValue={resource.status}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                  >
                    <option value="published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              {/* Views */}
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label htmlFor="views" className="text-gray-300 font-medium w-48 shrink-0">
                  Views :
                </label>
                <div className="flex-1">
                  <input
                    type="number"
                    id="views"
                    name="views"
                    placeholder="Example: 4600000"
                    defaultValue={resource.views}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-sky-500 text-white font-bold py-3 mt-4 rounded-lg hover:bg-sky-600 transition-all shadow-lg"
              >
                Update Resource
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditYoutube;