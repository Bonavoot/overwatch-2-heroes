import "./App.css";
import { useEffect, useState } from "react";
import HeroSelect from "./HeroSelect";
import SelectedHero from "./SelectedHero";
import Home from "./Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "heroselect",
      element: (
        <HeroSelect
          isAbilities={isAbilities}
          setAbilities={setAbilities}
          currentlySelected={currentlySelected}
          setcurrentlySelected={setcurrentlySelected}
          heroes={heroes}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
