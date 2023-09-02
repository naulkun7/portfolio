import "./App.css"
import Navbar from "./Components/Navbar/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import ContactBar from "./Components/ContactBar"
import Home from "./Sections/Home"

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <Home />
      </div>
      <ContactBar />
      <Footer />
    </main>
  )
}
export default App
