import { useRef, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Service from "./layout/Service";
import Membership from "./layout/Membership";
import Team from "./layout/Team";
import Form from "./layout/Form";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Membership />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
