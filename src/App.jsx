import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Past from "./components/About";
import Pastsponsor from "./components/Pastsponsor";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import ProblemStatements from "./components/ProblemStatements";
import PastGlimpse from "./components/PastGlimpse";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import Rules from "./components/Rules";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Past />
      <Pastsponsor />
      <Schedule />
      <ProblemStatements />
      <Prizes />
      <PastGlimpse />
      <Rules/>
      <FAQ />
      <Footer />
    </>
  );
}

export default App;