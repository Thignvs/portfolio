import './App.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Certificates from './components/Certificates';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <main>
      <About/>
      <Skills />
      <Certificates  />
      <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
