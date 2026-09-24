import {BrowserRouter, Route} from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import AdminDash from "./YoutubeAdminPage/AdminDash"
import AddYoutube from "./YoutubeAdminPage/AddYoutube"
import EditYoutube from "./YoutubeAdminPage/EditYoutube"
import Explore from "./pages/Explore"
import Terms from "./pages/Terms"
import PrivacyPolicy from "./pages/PrivacyPolicy"

const App = () => {
  return (
    
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/admin" element={<AdminDash />} />

      <Route path="/admin/youtube/add" element={<AddYoutube/>} />

      <Route path="/admin/youtube/edit/:id" element={<EditYoutube/>} />

      <Route path="/explore" element={<Explore/>} />

      <Route path="/term" element={<Terms />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />   

    </Routes>
    
    </BrowserRouter>
  )
}

export default App