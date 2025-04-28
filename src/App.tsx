import { Navbar } from "./components/header";
import { Hero } from "./components/hero";
import { Information } from "./components/info";
import { Hadeeth } from "./components/hadeeth";
import { Footer } from "./components/footer";
function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
      <Information />
      <Hadeeth />
      <Footer />
    </div>
  );
}

export default App;
