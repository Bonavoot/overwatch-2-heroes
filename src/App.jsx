import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeroSelect from "./HeroSelect";
import Home from "./Home";
import CreateComp from "./CreateComp";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentlySelected, setcurrentlySelected] = useState("");
  const [isAbilities, setAbilities] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("public/db.json");
      let heroData = await res.json();
      setHeroes(heroData);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route
          path="/heroselect"
          render={() => (
            <HeroSelect
              isAbilities={isAbilities}
              setAbilities={setAbilities}
              currentlySelected={currentlySelected}
              setcurrentlySelected={setcurrentlySelected}
              heroes={heroes}
            />
          )}
        />
        <Route
          path="/createcomp"
          render={() => <CreateComp heroes={heroes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
