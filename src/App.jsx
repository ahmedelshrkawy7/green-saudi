import Hero from "./pages/Hero"
import Nav from "./pages/Nav"
import Mobile from "./pages/MobileMenu"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Counter from "./pages/Counter"
import Process from "./pages/Process"
import LatestProjects from "./pages/LatestProjects"
import ClientsTalk from "./pages/ClientsTalk"
import LatestBlog from "./pages/LatestBlog"
import Services from "./pages/Services"
import Cta from "./pages/Cta "
import Footer from "./pages/Footer"



function App() {

  return (
    <div className="d-flex flex-column gap-5">
    <Mobile/>
    <Nav/>
    <Hero/>
    <About/>
    <Services/>
    <Counter/>
    <Process/>
    <LatestProjects/>
    <ClientsTalk/>
    <Blog/>
    <Cta/>
    <Footer/>

    
    </div>
  )
}

export default App
