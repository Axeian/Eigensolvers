import "./App.css";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Updates from "./components/Updates";
import Workshops from "./components/Workshops";
import Blogs from "./components/Blogs";
import People from "./components/People";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroHeader />

      <Updates />

      <Workshops />

      <Blogs />

      <People />

      <ContactUs />
    </div>
  );
}

export default App;
