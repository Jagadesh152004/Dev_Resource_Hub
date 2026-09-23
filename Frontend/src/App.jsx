import {BrowserRouter, Route} from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import AdminDash from "./pages/AdminDash"
import AddYoutube from "./pages/AddYoutube"
import EditYoutube from "./pages/EditYoutube"

const App = () => {
  return (
    
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/admin" element={<AdminDash/>} />

      <Route path="/admin/youtube/add" element={<AddYoutube/>} />

      <Route path="/admin/youtube/edit/:id" element={<EditYoutube/>} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App