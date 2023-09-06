import "./index.css"
import { useLocalStorage } from "@uidotdev/usehooks"

// Components
import Navbar from "./Components/Navbar/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import ContactBar from "./Components/ContactBar"

// Sections
import Home from "./Sections/Home"
import Skills from "./Sections/SkillsnCerti"
import Project from "./Sections/Project"
import Contact from "./Sections/Contact"
import Experience from "./Sections/Experience"
import About from "./Sections/About"

function App() {
  let [theme, setTheme] = useLocalStorage("dark" ? "dark" : "light")
  let toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <header>
        <div className="theme-toggle">
          <h2>{theme} theme</h2>
          <i onClick={toggleTheme} className="fas fa-toggle-on"></i>
        </div>
        <Navbar />
      </header>

      <div className="app_section_container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
      <ContactBar />
      <Footer />
    </div>
  )
}

export default App
