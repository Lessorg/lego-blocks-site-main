import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Advantages from "./components/Advantages";
import Statistics from "./components/Statistics";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-paper">
      <Navbar />
      <main>
        <Products />
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Advantages /> */}
        {/* <Statistics /> */}
        {/* <Process /> */}
        {/* <Gallery /> */}
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
