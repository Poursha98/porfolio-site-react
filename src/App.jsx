import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Navbar from "./components/Navbar.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
