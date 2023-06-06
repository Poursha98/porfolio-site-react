import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Contact from './pages/Contact.jsx'
import AboutUs from "./pages/AboutUs.jsx";
import Gallery from "./pages/Gallery.jsx";
import './App.css'

function App() {


  return (
    <>
    <Router>
      <Navigation  />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}



export default App
