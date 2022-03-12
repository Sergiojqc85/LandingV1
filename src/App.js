import './App.css';
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [
  {url: "#", title:"Home"},
  {url: "#", title:"Trips"},
  {url: "#", title:"Rewards"},
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero ImageSrc={travel_01}/>
      <Slider 
      imagesSrc={travel_02}
      title={"Be an Explorer!"}
      subtitle={"Our platform offert a wide variety of unique travel locations!"}
     />
     <Slider 
      imagesSrc={travel_03}
      title={"Memories for a lifetime!"}
      subtitle={"Your dream vacation is only a fear clicks away!"}
      flipped={true}
     />
    </div>
  );
}

export default App;
