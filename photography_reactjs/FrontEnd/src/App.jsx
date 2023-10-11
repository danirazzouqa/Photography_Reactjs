import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";


function App() {
  return (
    <div >
     <Navbar />
     <Home />
     <About/>
     <Projects/>
    </div>
  );
}

export default App;