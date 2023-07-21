import "./App.css";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/About/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Projects from "./components/Projects/projects";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";
import AfterFooter from "./components/after-footer/after-footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <AfterFooter />
    </div>
  );
}

export default App;
