import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Experience' element={<Experience/>}></Route>
        <Route></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
