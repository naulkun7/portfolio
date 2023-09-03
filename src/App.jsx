import "./index.css"
import { useLocalStorage } from "@uidotdev/usehooks"

// Components
import Navbar from "./Components/Navbar/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import ContactBar from "./Components/ContactBar"

// Sections
import Home from "./Sections/Home"
import Skills from "./Sections/Skills"
import Project from "./Sections/Project"

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
        <Skills />
        <Project />
      </div>
      <ContactBar />
      <Footer />
    </div>
  )
}

export default App
