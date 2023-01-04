import "./App.css";
import { useEffect, useState } from "react";
import HeroSelect from "./HeroSelect";
import SelectedHero from "./SelectedHero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentlySelected, setcurrentlySelected] = useState("");

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
      element: <SelectedHero currentlySelected={currentlySelected} />,
    },
    {
      path: "/:name",
      element: <App />,
    },
  ]);

  return (
    <div className="container">
      <HeroSelect setcurrentlySelected={setcurrentlySelected} heroes={heroes} />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
/* <SelectedHero currentlySelected={currentlySelected} />
<div className="container">
  <HeroSelect
    setcurrentlySelected={setcurrentlySelected}
    heroes={heroes}
  />
</div>

*/
