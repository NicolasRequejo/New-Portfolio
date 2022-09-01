import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#141414" }}>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
