import './App.css';
import Header from './components/Header';
import About from './components/About/About.js';
import Skills  from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
