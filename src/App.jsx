import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Navigation from "./components/Navigation.jsx";


function App() {


  return (
    <>
    <Router>
      <Navigation/>
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
