import About from "../Sections/About";
import Hero from "../Sections/Hero";
import Project from "../Sections/Project";
import Services from "../Sections/Services";
import Testimonial from "../Sections/Testimonial";
import Layout from "../layout/Layout";
import Blog from "../Sections/Blog";
import Team from "../Sections/Team";
import Contact from "../Sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <Team />
      <Contact />
      <Blog />
    </Layout>
  );
}

export default App;
