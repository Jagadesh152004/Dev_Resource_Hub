import {Home, LayoutDashboard, MonitorPlay, Pencil, Plus} from "lucide-react"
import { Link } from "react-router-dom"

const HorizontalNavbar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen bg-linear-to-r from-indigo-800 to-violet-900 w-72 flex flex-col">

        <div className="border-b border-amber-50 p-5 flex items-center justify-center gap-4 mt-2">

            <div className="bg-linear-to-tr from-sky-400 to-blue-600 p-2 rounded-full">
                <LayoutDashboard className="w-6 h-6 text-white"/>
            </div>
            <span className="bg-linear-to-r from-neutral-300 to-sky-200 bg-clip-text text-transparent font-bold text-xl">AdminPanel</span>

        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 p-4 mt-5">

            <Link
              to="/admin"
              className="flex items-center justify-center gap-4 text-white p-3 rounded-lg hover:bg-white/10 transition duration-500 "
            >
              <div className="bg-yellow-300 p-2 rounded-full">
                <MonitorPlay className="w-6 h-6 text-black"/>
              </div>
                <span className="w-32 text-left">View Resources</span>
            </Link>

            <Link
              to="/admin/youtube/add"
              className="flex items-center justify-center gap-4 text-white p-3 rounded-lg hover:bg-white/10 transition duration-500 "
            >
                <div className="bg-yellow-300 p-2 rounded-full">
                  <Plus className="w-6 h-6 text-black"/>
                </div>
                  <span className="w-32 text-left">Add Resource</span>
            </Link>

            <Link
              to="/admin/youtube/edit/1"
              className="flex items-center justify-center gap-4 text-white p-3 rounded-lg hover:bg-white/10 transition duration-500 "
            >
                <div className="bg-yellow-300 p-2 rounded-full">
                  <Pencil className="w-6 h-6 text-black"/>
                </div>
                  <span className="w-32 text-left">Edit Resource</span>
            </Link>

            <Link
              to="/"
              className="flex items-center justify-center gap-4 text-white p-3 rounded-lg hover:bg-white/10 transition duration-500 "
            >
                <div className="bg-yellow-300 p-2 rounded-full">
                  <Home className="w-6 h-6 text-black"/>
                </div>
                  <span className="w-32 text-left">Home</span>
            </Link>

        </div>

    </div>
  )
}

export default HorizontalNavbar