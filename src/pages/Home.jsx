// src/pages/Home.jsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Technologies from "../components/Technologies";
import Models from "../components/Models";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Process />
      <Technologies />
      <Models />
      <Testimonials />
    </div>
  );
}

export default Home;