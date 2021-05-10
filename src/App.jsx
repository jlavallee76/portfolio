import './app.scss'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

import {useState} from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu className="menu" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
