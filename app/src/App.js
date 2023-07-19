import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login"
import "./App.css"
import LandPage from "./Pages/LandPage"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/landpage" element={<LandPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
