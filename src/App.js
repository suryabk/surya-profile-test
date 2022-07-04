import About from "./components/About";
import Academy from "./components/Academy";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Hero />
      <About />
      <Academy />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
