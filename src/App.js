import "./App.css";
import Navbar from "./components/Navbar";
import LandingCarousel from "./components/LandingCarousel";
import WhatWeDo from "./components/WhatWeDo";
import Blogs from "./components/Blogs";
import People from "./components/People";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <LandingCarousel />

      <WhatWeDo />

      <Blogs />

      <People />

      <ContactUs />
    </div>
  );
}

export default App;
