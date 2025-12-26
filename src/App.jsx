import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import GetInTouch from './components/sections/GetInTouch'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  )
}

export default App