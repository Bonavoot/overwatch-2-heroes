import "./App.css";
import { useEffect, useState } from "react";
import HeroSelect from "./HeroSelect";
import SelectedHero from "./SelectedHero";
import Home from "./Home";

// add <Home as a Route to "/"

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentlySelected, setcurrentlySelected] = useState("");
  const [isAbilities, setAbilities] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/heroes");
      let heroData = await res.json();
      setHeroes(heroData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <SelectedHero
        isAbilities={isAbilities}
        setAbilities={setAbilities}
        currentlySelected={currentlySelected}
      />
      <HeroSelect setcurrentlySelected={setcurrentlySelected} heroes={heroes} />
      )
    </div>
  );
};

export default App;
