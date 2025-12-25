import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Past from "./components/Past";
import Pastsponsor from "./components/Pastsponsor";
import Rank from "./components/Rank";
import Footer from "./components/Footer"; // 👈 add this

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Past />
      <Pastsponsor />
      <Rank />
      <Footer /> {/* 👈 footer added */}
    </>
  );
}

export default App;
