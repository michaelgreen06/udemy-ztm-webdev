import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLink from "./Components/ImageLink/ImageLink";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";

const particleSettings = {
  className: "particles",
  color: "#ffffff",
  type: "cobweb",
  bg: true,
};

function App() {
  return (
    <div className="App">
      <ParticlesBg {...particleSettings} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
    </div>
  );
}

export default App;
