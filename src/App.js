import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Service from "./layout/Service";
import Membership from "./layout/Membership";
import Team from "./layout/Team";
import Location from "./layout/Location";
import Form from "./layout/Form";
import Footer from "./layout/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Membership />
      <Team />
      <Location />
      <Form />
      <Footer />

      <ScrollToTopBtn />
    </div>
  );
}

export default App;
