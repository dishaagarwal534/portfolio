import About from "./components/About";
import Layout from "./components/Layout";
import Experience from "./components/Experience"; 
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Layout>
      <About/>
      <Experience/>
      <Skills/>
      <Achievements/>
      <Certifications/>
      </Layout>
    </div>

  );
}

export default App;