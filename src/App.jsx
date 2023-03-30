import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import TopHeader from "./Components/TopHeader";

function App() {
  return (
    <div>
      <header>
        <TopHeader />
        <Header />
      </header>
      <main>
        <Hero />
        <Services />
        <About />
        <Project />
        <Testimonial />
      </main>
    </div>
  );
}

export default App;
