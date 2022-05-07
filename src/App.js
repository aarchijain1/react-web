import './App.css';
import Cards from './Components/Cards';
import Client from './Components/Testimonals';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Progress from './Components/Progress';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#040023' }}>
      <div className="header" id="topheader">

        <Navbar />
        <Landing />
      </div>
        <Cards />
        <Progress />
        <Project/>
        <Pricing/>
        <Client/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
