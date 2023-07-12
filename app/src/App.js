import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default App
