import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";


const App = () => {
  return <div>
     <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills">
    <Skills/>
    </section>
    
      <Project/>

    <section id="Contact">
      <Contact/>
    </section>
 
 

    {/* <Test/> */}
  </div>;
};

export default App;
