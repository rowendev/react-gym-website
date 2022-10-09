import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Service from "./layout/Service";
import Membership from "./layout/Membership";
import Team from "./layout/Team";
import Form from "./layout/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Membership />
      <Team />
      <Form />
    </div>
  );
}

export default App;
